import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint';
import { ThebeCell, ThebeNotebook, ThebeSession } from 'thebe-core';
import { Options } from './options';
import { randomId } from './utils';
import { Mode } from '@jupyterlab/codemirror';

export interface CellDOMItem {
  id: string;
  placeholders: {
    source: Element;
    output?: Element;
  };
  ui?: {
    cell: Element;
    editor: Element;
    output?: Element;
    buttons: {
      run?: Element;
      runAll?: Element;
      restart?: Element;
      retartAll?: Element;
    };
  };
}

/**
 * findCells will find cells and outputs, associating outputs with cells
 * in fifo priority
 *
 * Note: this mirrors the original thebe behaviour
 *
 * @param selector
 * @param outputSelector
 * @returns
 */
export function findCells(selector: string, outputSelector: string): CellDOMItem[] {
  const cellEls = Array.from(document.querySelectorAll(selector));
  const outputEls = Array.from(document.querySelectorAll(outputSelector));
  return cellEls.map((el, idx) => ({
    id: randomId(),
    placeholders: {
      source: el,
      output: idx < outputEls.length ? outputEls[idx] : undefined,
    },
  }));
}

function buildButton(
  parent: Element,
  classSlug: string,
  text: string,
  title: string,
  onClickCb?: () => void
) {
  const btn = document.createElement('button');
  btn.classList.add('thebe-button', `thebe-${classSlug}-button`);
  btn.textContent = text;
  btn.setAttribute('title', title);
  btn.onclick = onClickCb ?? (() => console.debug(`thebe:${classSlug}`));
  parent.append(btn);
  return btn;
}

function buildButtonBusySpinner(parent: Element) {
  const outer = document.createElement('div');
  outer.classList.add('thebe-busy');
  const inner = document.createElement('div');
  inner.classList.add('thebe-busy-spinner');
  outer.appendChild(inner);
  parent.append(outer);
  return outer;
}

function getButtonsBusy(id: string) {
  const cell = document.getElementById(id);
  console.log('cell', cell);
  const busy = cell?.getElementsByClassName('.thebe-busy').item(0);
  console.log('busy', busy);
  if (!busy) return;
  return busy as HTMLElement;
}

export function setButtonsBusy(id: string) {
  const busy = getButtonsBusy(id);
  if (busy) busy.style.visibility = 'visible';
}

export function clearButtonsBusy(id: string) {
  setTimeout(() => {
    const busy = getButtonsBusy(id);
    if (busy) busy.style.visibility = 'hidden';
  }, 3000);
}

function setupCodemirror(options: Options, item: CellDOMItem, cell: ThebeCell, el: HTMLElement) {
  const { source: sourceEl } = item.placeholders;
  const mode = sourceEl.getAttribute('data-language') || 'python';
  const isReadOnly = Boolean(sourceEl.getAttribute('data-readonly'));
  console.debug(
    `thebe:setupCodemirror source: ${cell.source.slice(0, 50) ?? 'no source code found'}...`
  );
  console.debug(`thebe:setupCodemirror mode: ${mode}`);
  console.debug(`thebe:setupCodemirror isReadOnly: ${isReadOnly}`);

  async function execute() {
    console.debug(`thebe:codemirror:shift-enter execute`);
    try {
      setButtonsBusy(cell.id);
      await cell.execute(cell.source);
      clearButtonsBusy(cell.id);
    } catch (error) {
      cell.clearOnError(error);
    }
  }

  function codeCompletion() {
    console.debug(`thebe:codemirror:ctrl-space`);
    // TODO
    const a = cm;
  }

  const requiredSettings = {
    value: cell.source,
    mode,
    readyOnly: isReadOnly !== undefined ? isReadOnly : false,
    extraKeys: {
      'Shift-Enter': execute,
      'Ctrl-Space': codeCompletion,
    },
  };

  const codeMirrorConfig = Object.assign(options.codeMirrorConfig ?? {}, requiredSettings);
  console.debug('thebe:setupCodemirror:codeMirrorConfig', codeMirrorConfig);

  if ('theme' in codeMirrorConfig) {
    // TODO ship some themes?
    import(`codemirror/theme/${codeMirrorConfig.theme}.css`);
  }

  const cm = new CodeMirror(el as HTMLElement, codeMirrorConfig);

  // All cells in the notebook automatically update their sources on change
  cm.on('change', () => {
    const code = cm.getValue();
    cell.source = code;
  });

  // TODO can we avoid this?
  Mode.ensure(mode).then(() => cm.setOption('mode', 'mode'));
  if (cm.isReadOnly()) {
    cm.display.lineDiv.setAttribute('data-readonly', 'true');
    item.ui?.editor.setAttribute('data-readonly', 'true');
    item.ui?.cell.setAttribute('data-readonly', 'true');
  }

  return cm;
}

function buildCellUI(
  options: Options,
  item: CellDOMItem,
  notebook: ThebeNotebook,
  cell: ThebeCell
) {
  console.debug(`thebe:buildCellUI CellId:${item.id}`);
  const box = document.createElement('div');
  box.classList.add('thebe-cell');
  box.setAttribute('id', item.id);

  console.debug(`thebe:buildCellUI building editor`);
  const editor = document.createElement('div');
  editor.classList.add('thebe-input');
  box.append(editor);

  console.debug(`thebe:buildCellUI setup CodeMirror`);
  const { execute } = setupCodemirror(options, item, cell, editor);

  console.debug(`thebe:buildCellUI adding cell controls`);
  let run, runAll, restart, restartAll;

  if (options.mountRunButton)
    run = buildButton(box, 'run', 'run', 'run this cell', async () => {
      console.debug(`thebe:run:${cell.id} run`);
      setButtonsBusy(cell.id);
      await cell.execute(cell.source);
      // clearButtonsBusy(cell.id);
    });

  if (options.mountRunAllButton) {
    runAll = buildButton(box, 'runall', 'run all', 'run all cells', async () => {
      console.debug(`thebe:run:${cell.id} runall`);
      notebook.cells?.forEach(({ id }) => setButtonsBusy(id));
      // TODO notebook should return an array of promises, one for each cell
      // TODO return the cell id along with the each promise
      await notebook.executeAll();
      notebook.cells?.forEach(({ id }) => clearButtonsBusy(id));
    });
  }

  if (options.mountRestartButton) {
    restart = buildButton(box, 'restart', 'restart', 'restart the kernel', async () => {
      console.debug(`thebe:run:${cell.id} restart`);
      await notebook.session?.kernel?.restart();
    });
  }

  if (options.mountRestartallButton) {
    restartAll = buildButton(
      box,
      'restartall',
      'restart & run all',
      'restart the kernel and run all cells'
    );
  }

  buildButtonBusySpinner(box);

  // no output placeholder for this cell, append a new element
  let output = item.placeholders.output;
  if (output) {
    console.debug(`thebe:buildCellUI using output placeholder`);
  } else {
    console.debug(`thebe:buildCellUI no output placeholder for this cell, append a new element`);
    output = document.createElement('div');
    output.classList.add('thebe-output');
    box.append(output);
  }

  item.placeholders.source.replaceWith(box);

  // this must happen after the box/host is attached
  cell.attachToDOM(output as HTMLElement);

  return {
    ...item,
    ui: {
      cell: box,
      editor,
      output,
      buttons: {
        run,
        runAll,
        restart,
        restartAll,
      },
    },
  };
}

export function renderAllCells(options: Options, notebook: ThebeNotebook, items: CellDOMItem[]) {
  return items.map((item) => {
    const cell = notebook.getCellById(item.id);
    if (!cell) return item;
    return buildCellUI(options, item, notebook, cell);
  });
}