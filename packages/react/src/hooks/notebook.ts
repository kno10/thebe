import { createRef, useEffect, useState } from 'react';
import type { ThebeNotebook, ThebeSession, IThebeCell, IThebeCellExecuteReturn } from 'thebe-core';
import { useThebeConfig } from '../ThebeServerProvider';
import { useThebeCore } from '../ThebeCoreProvider';
import type { INotebookContent } from '@jupyterlab/nbformat';
import { useThebeSession } from '../ThebeSessionProvider';

export interface NotebookExecuteOptions {
  stopOnError?: boolean;
  before?: () => void;
  after?: () => void;
  preprocessor?: (s: string) => string;
}

export type IThebeNotebookError = IThebeCellExecuteReturn & { index: number };

export function findErrors(execReturns: (IThebeCellExecuteReturn | null)[]) {
  return execReturns.reduce<IThebeNotebookError[] | null>(
    (acc, retval: IThebeCellExecuteReturn | null, index) => {
      if (retval?.error) {
        if (acc == null) return [{ ...retval, index }];
        else return [...acc, { ...retval, index }];
      }
      return acc;
    },
    null,
  );
}

export function useNotebookBase() {
  const { session, ready: sessionReady } = useThebeSession();
  const [notebook, setNotebook] = useState<ThebeNotebook | undefined>();
  // TODO move the refs to caller hooks as it does so little to maintain them in here.
  const [refs, setRefs] = useState<((node: HTMLDivElement) => void)[]>([]);
  const [executing, setExecuting] = useState<boolean>(false);
  const [executed, setExecuted] = useState(false);
  const [errors, setErrors] = useState<IThebeNotebookError[] | null>(null);

  /**
   * When the notebook and session is avaiable, attach to session
   */
  useEffect(() => {
    if (!notebook || !session || !sessionReady) return;
    notebook.attachSession(session);
  }, [notebook, session, sessionReady]);

  const executeAll = (options?: NotebookExecuteOptions) => {
    if (!notebook) throw new Error('executeAll called before notebook available');
    options?.before?.();
    setExecuting(true);
    return notebook
      .executeAll(options?.stopOnError ?? true, options?.preprocessor)
      .then((execReturns) => {
        options?.after?.();
        const errs = findErrors(execReturns);
        if (errs != null) setErrors(errs);
        setExecuted(true);
        setExecuting(false);
        return execReturns;
      });
  };

  const executeSome = (
    predicate: (cell: IThebeCell) => boolean,
    options?: NotebookExecuteOptions,
  ) => {
    if (!notebook) throw new Error('executeSome called before notebook available');
    options?.before?.();
    setExecuting(true);
    const filteredCells = notebook.cells.filter(predicate).map((c) => c.id);
    return notebook
      .executeCells(filteredCells, options?.stopOnError ?? true, options?.preprocessor)
      .then((execReturns) => {
        options?.after?.();
        const errs = findErrors(execReturns);
        if (errs != null) setErrors(errs);
        setExecuted(true);
        setExecuting(false);
        return execReturns;
      });
  };

  const clear = () => {
    if (!notebook) throw new Error('clear called before notebook available');
    notebook.clear();
    setExecuted(false);
  };

  return {
    ready: !!notebook && notebook.isAttached,
    attached: notebook?.isAttached ?? false,
    executing,
    executed,
    errors,
    notebook,
    setNotebook,
    refs,
    setRefs,
    executeAll,
    executeSome,
    clear,
    reset: () => {
      // TODO return to full original state by re-rendering original outputs
      setExecuted(false);
    },
    session,
  };
}

/**
 * @param name - provided to the fetcher function
 * @param fetchNotebook - an async function, that given a name, can return a JSON representation of an ipynb file (INotebookContent)
 * @param opts - options.refsForWidgetsOnly=false allows refs to be generated for all notebook cells, rather than onlythose with widget tags
 * @returns
 */
export function useNotebook(
  name: string,
  fetchNotebook: (name: string) => Promise<INotebookContent>,
  opts = { refsForWidgetsOnly: true },
) {
  const { core } = useThebeCore();
  const { config } = useThebeConfig();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    ready,
    attached,
    executing,
    executed,
    errors,
    notebook,
    setNotebook,
    refs,
    setRefs,
    executeAll,
    executeSome,
    clear,
    session,
  } = useNotebookBase();

  /**
   * - set loading flag
   * - load the notebook
   * - setup callback refs, to auto-attach to dom
   * - set notebook, which triggers
   * - clear loading flag
   */
  useEffect(() => {
    if (!core || !config) return;
    setLoading(true);
    fetchNotebook(name)
      .then((ipynb) => {
        return core?.ThebeNotebook.fromIpynb(ipynb, config);
      })
      .then((nb: ThebeNotebook) => {
        const cells = opts?.refsForWidgetsOnly ? nb?.widgets ?? [] : nb?.cells ?? [];
        // set up an array of callback refs to update the DOM elements
        setRefs(
          Array(cells.length)
            .fill(null)
            .map((_, idx) => (node) => {
              console.debug(`new ref[${idx}] - attaching to dom...`, node);
              if (node != null) cells[idx].attachToDOM(node);
            }),
        );
        setNotebook(nb);
        setLoading(false);
      });
  }, [core, config]);

  return {
    ready,
    loading,
    attached,
    executing,
    executed,
    errors,
    notebook,
    cellRefs: refs,
    cellIds: (opts.refsForWidgetsOnly ? notebook?.widgets ?? [] : notebook?.cells ?? []).map(
      (c) => c.id,
    ),
    executeAll,
    executeSome,
    clear,
    session,
  };
}

/**
 * @param sourceCode - just an array of valid code blocks as single line strings
 * @param opts - options.refsForWidgetsOnly=false allows refs to be generated for all notebook cells, rather than onlythose with widget tags
 * @returns
 */
export function useNotebookFromSource(sourceCode: string[], opts = { refsForWidgetsOnly: true }) {
  const { core } = useThebeCore();
  const { config } = useThebeConfig();
  const [loading, setLoading] = useState(false);
  const {
    ready,
    attached,
    executing,
    executed,
    errors,
    notebook,
    setNotebook,
    refs,
    setRefs,
    executeAll,
    executeSome,
    clear,
    session,
  } = useNotebookBase();

  useEffect(() => {
    if (!core || !config || loading || notebook) return;
    setLoading(true);
    const nb = core.ThebeNotebook.fromCodeBlocks(
      sourceCode.map((source) => ({ id: core?.shortId(), source })),
      config,
    );
    const cells = opts?.refsForWidgetsOnly ? nb?.widgets ?? [] : nb?.cells ?? [];
    setRefs(
      Array(cells.length)
        .fill(null)
        .map((_, idx) => (node) => {
          console.debug(`new ref[${idx}] - attaching to dom...`, node);
          if (node != null) cells[idx].attachToDOM(node);
        }),
    );
    setNotebook(nb);
    setLoading(false);
  }, [core, notebook, loading]);

  return {
    ready,
    loading,
    attached,
    executing,
    executed,
    errors,
    notebook,
    cellRefs: refs,
    cellIds: (opts.refsForWidgetsOnly ? notebook?.widgets ?? [] : notebook?.cells ?? []).map(
      (c) => c.id,
    ),
    executeAll,
    executeSome,
    clear,
    session,
  };
}
