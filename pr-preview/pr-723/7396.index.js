"use strict";(self.webpackChunkthebe=self.webpackChunkthebe||[]).push([[7396],{67396:(e,t,a)=>{a.r(t),a.d(t,{Cassandra:()=>ve,MSSQL:()=>be,MariaSQL:()=>he,MySQL:()=>ge,PLSQL:()=>ye,PostgreSQL:()=>ue,SQLDialect:()=>re,SQLite:()=>_e,StandardSQL:()=>de,keywordCompletion:()=>oe,keywordCompletionSource:()=>ie,schemaCompletion:()=>le,schemaCompletionSource:()=>se,sql:()=>ce});var n=a(77120),r=a(86253),i=a(51392),o=a(64100);const s=36,l=1,c=2,d=3,u=4,m=5,p=6,f=7,g=8,h=9,b=10,_=11,v=12,y=13,k=14,x=15,O=16,w=17,Q=18,C=19,S=20,q=21,P=22,T=23,U=24;function z(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function X(e,t,a){for(let n=!1;;){if(e.next<0)return;if(e.next==t&&!n)return void e.advance();n=a&&!n&&92==e.next,e.advance()}}function B(e,t){for(;95==e.next||z(e.next);)null!=t&&(t+=String.fromCharCode(e.next)),e.advance();return t}function J(e,t){for(;48==e.next||49==e.next;)e.advance();t&&e.next==t&&e.advance()}function j(e,t){for(;;){if(46==e.next){if(t)break;t=!0}else if(e.next<48||e.next>57)break;e.advance()}if(69==e.next||101==e.next)for(e.advance(),43!=e.next&&45!=e.next||e.advance();e.next>=48&&e.next<=57;)e.advance()}function R(e){for(;!(e.next<0||10==e.next);)e.advance()}function Z(e,t){for(let a=0;a<t.length;a++)if(t.charCodeAt(a)==e)return!0;return!1}const L=" \t\r\n";function V(e,t,a){let n=Object.create(null);n.true=n.false=m,n.null=n.unknown=p;for(let t of e.split(" "))t&&(n[t]=S);for(let e of t.split(" "))e&&(n[e]=q);for(let e of(a||"").split(" "))e&&(n[e]=U);return n}const D="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",I="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",$={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,plsqlQuotingMechanism:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:V(I,D)};function E(e){return new i.Jq((t=>{var a;let{next:n}=t;if(t.advance(),Z(n,L)){for(;Z(t.next,L);)t.advance();t.acceptToken(s)}else if(36==n&&36==t.next&&e.doubleDollarQuotedStrings)!function(e){for(;;){if(e.next<0||e.peek(1)<0)return;if(36==e.next&&36==e.peek(1))return void e.advance(2);e.advance()}}(t),t.acceptToken(d);else if(39==n||34==n&&e.doubleQuotedStrings)X(t,n,e.backslashEscapes),t.acceptToken(d);else if(35==n&&e.hashComments||47==n&&47==t.next&&e.slashComments)R(t),t.acceptToken(l);else if(45!=n||45!=t.next||e.spaceAfterDashes&&32!=t.peek(1))if(47==n&&42==t.next){t.advance();for(let e=1;;){let a=t.next;if(t.next<0)break;if(t.advance(),42==a&&47==t.next){if(e--,t.advance(),!e)break}else 47==a&&42==t.next&&(e++,t.advance())}t.acceptToken(c)}else if(101!=n&&69!=n||39!=t.next)if(110!=n&&78!=n||39!=t.next||!e.charSetCasts)if(95==n&&e.charSetCasts)for(let a=0;;a++){if(39==t.next&&a>1){t.advance(),X(t,39,e.backslashEscapes),t.acceptToken(d);break}if(!z(t.next))break;t.advance()}else if(e.plsqlQuotingMechanism&&(113==n||81==n)&&39==t.next&&t.peek(1)>0&&!Z(t.peek(1),L)){let e=t.peek(1);t.advance(2),function(e,t){let a="[{<(".indexOf(String.fromCharCode(t)),n=a<0?t:"]}>)".charCodeAt(a);for(;;){if(e.next<0)return;if(e.next==n&&39==e.peek(1))return void e.advance(2);e.advance()}}(t,e),t.acceptToken(d)}else if(40==n)t.acceptToken(f);else if(41==n)t.acceptToken(g);else if(123==n)t.acceptToken(h);else if(125==n)t.acceptToken(b);else if(91==n)t.acceptToken(_);else if(93==n)t.acceptToken(v);else if(59==n)t.acceptToken(y);else if(e.unquotedBitLiterals&&48==n&&98==t.next)t.advance(),J(t),t.acceptToken(P);else if(98!=n&&66!=n||39!=t.next&&34!=t.next){if(48==n&&(120==t.next||88==t.next)||(120==n||88==n)&&39==t.next){let e=39==t.next;for(t.advance();(r=t.next)>=48&&r<=57||r>=97&&r<=102||r>=65&&r<=70;)t.advance();e&&39==t.next&&t.advance(),t.acceptToken(u)}else if(46==n&&t.next>=48&&t.next<=57)j(t,!0),t.acceptToken(u);else if(46==n)t.acceptToken(k);else if(n>=48&&n<=57)j(t,!1),t.acceptToken(u);else if(Z(n,e.operatorChars)){for(;Z(t.next,e.operatorChars);)t.advance();t.acceptToken(x)}else if(Z(n,e.specialVar))t.next==n&&t.advance(),function(e){if(39==e.next||34==e.next||96==e.next){let t=e.next;e.advance(),X(e,t,!1)}else B(e)}(t),t.acceptToken(w);else if(Z(n,e.identifierQuotes))X(t,n,!1),t.acceptToken(C);else if(58==n||44==n)t.acceptToken(O);else if(z(n)){let r=B(t,String.fromCharCode(n));t.acceptToken(46==t.next?Q:null!==(a=e.words[r.toLowerCase()])&&void 0!==a?a:Q)}}else{const a=t.next;t.advance(),e.treatBitsAsBytes?(X(t,a,e.backslashEscapes),t.acceptToken(T)):(J(t,a),t.acceptToken(P))}else t.advance(),X(t,39,e.backslashEscapes),t.acceptToken(d);else t.advance(),X(t,39,!0);else R(t),t.acceptToken(l);var r}))}const W=E($),N=i.WQ.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,W],topRules:{Script:[0,25]},tokenPrec:0});function G(e){let t=e.cursor().moveTo(e.from,-1);for(;/Comment/.test(t.name);)t.moveTo(t.from,-1);return t.node}function A(e,t){let a=e.sliceString(t.from,t.to),n=/^([`'"])(.*)\1$/.exec(a);return n?n[2]:a}function M(e){return e&&("Identifier"==e.name||"QuotedIdentifier"==e.name)}function Y(e,t){if("CompositeIdentifier"==t.name){let a=[];for(let n=t.firstChild;n;n=n.nextSibling)M(n)&&a.push(A(e,n));return a}return[A(e,t)]}function K(e,t){for(let a=[];;){if(!t||"."!=t.name)return a;let n=G(t);if(!M(n))return a;a.unshift(A(e,n)),t=G(n)}}const F=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" ")),H=/^\w*$/,ee=/^[`'"]?\w*[`'"]?$/;class te{constructor(){this.list=[],this.children=void 0}child(e,t){let a=this.children||(this.children=Object.create(null));return a[e]||(e&&this.list.push(ae(e,"type",t)),a[e]=new te)}addCompletions(e){for(let t of e){let e=this.list.findIndex((e=>e.label==t.label));e>-1?this.list[e]=t:this.list.push(t)}}}function ae(e,t,a){return/[^\w\xb5-\uffff]/.test(e)?{label:e,type:t,apply:a+e+a}:{label:e,type:t}}let ne=N.configure({props:[n.uj.add({Statement:(0,n.tC)()}),n.x0.add({Statement:e=>({from:e.firstChild.to,to:e.to}),BlockComment:e=>({from:e.from+2,to:e.to-2})}),(0,r.Gv)({Keyword:r.pJ.keyword,Type:r.pJ.typeName,Builtin:r.pJ.standard(r.pJ.name),Bits:r.pJ.number,Bytes:r.pJ.string,Bool:r.pJ.bool,Null:r.pJ.null,Number:r.pJ.number,String:r.pJ.string,Identifier:r.pJ.name,QuotedIdentifier:r.pJ.special(r.pJ.string),SpecialVar:r.pJ.special(r.pJ.name),LineComment:r.pJ.lineComment,BlockComment:r.pJ.blockComment,Operator:r.pJ.operator,"Semi Punctuation":r.pJ.punctuation,"( )":r.pJ.paren,"{ }":r.pJ.brace,"[ ]":r.pJ.squareBracket})]});class re{constructor(e,t,a){this.dialect=e,this.language=t,this.spec=a}get extension(){return this.language.extension}static define(e){let t=function(e,t,a,n){let r={};for(let t in $)r[t]=(e.hasOwnProperty(t)?e:$)[t];return t&&(r.words=V(t,a||"",n)),r}(e,e.keywords,e.types,e.builtin),a=n.qp.define({name:"sql",parser:ne.configure({tokenizers:[{from:W,to:E(t)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new re(t,a,e)}}function ie(e,t=!1){return function(e,t){let a=Object.keys(e).map((a=>({label:t?a.toUpperCase():a,type:e[a]==q?"type":e[a]==S?"keyword":"variable",boost:-1})));return(0,o.eC)(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],(0,o.Mb)(a))}(e.dialect.words,t)}function oe(e,t=!1){return e.language.data.of({autocomplete:ie(e,t)})}function se(e){return e.schema?function(e,t,a,r,i,o){var s;let l=new te,c=(null===(s=null==o?void 0:o.spec.identifierQuotes)||void 0===s?void 0:s[0])||'"',d=l.child(i||"",c);for(let t in e){let a=t.replace(/\\?\./g,(e=>"."==e?"\0":e)).split("\0"),n=1==a.length?d:l;for(let e of a)n=n.child(e.replace(/\\\./g,"."),c);for(let a of e[t])a&&n.list.push("string"==typeof a?ae(a,"property",c):a)}return t&&d.addCompletions(t),a&&l.addCompletions(a),l.addCompletions(d.list),r&&l.addCompletions(d.child(r,c).list),e=>{let{parents:t,from:a,quoted:i,empty:o,aliases:s}=function(e,t){let a=(0,n.qz)(e).resolveInner(t,-1),r=function(e,t){let a;for(let e=t;!a;e=e.parent){if(!e)return null;"Statement"==e.name&&(a=e)}let n=null;for(let t=a.firstChild,r=!1,i=null;t;t=t.nextSibling){let a="Keyword"==t.name?e.sliceString(t.from,t.to).toLowerCase():null,o=null;if(r)if("as"==a&&i&&M(t.nextSibling))o=A(e,t.nextSibling);else{if(a&&F.has(a))break;i&&M(t)&&(o=A(e,t))}else r="from"==a;o&&(n||(n=Object.create(null)),n[o]=Y(e,i)),i=/Identifier$/.test(t.name)?t:null}return n}(e.doc,a);return"Identifier"==a.name||"QuotedIdentifier"==a.name||"Keyword"==a.name?{from:a.from,quoted:"QuotedIdentifier"==a.name?e.doc.sliceString(a.from,a.from+1):null,parents:K(e.doc,G(a)),aliases:r}:"."==a.name?{from:t,quoted:null,parents:K(e.doc,a),aliases:r}:{from:t,quoted:null,parents:[],empty:!0,aliases:r}}(e.state,e.pos);if(o&&!e.explicit)return null;s&&1==t.length&&(t=s[t[0]]||t);let u=l;for(let e of t){for(;!u.children||!u.children[e];)if(u==l)u=d;else{if(u!=d||!r)return null;u=u.child(r,c)}u=u.child(e,c)}let m=i&&e.state.sliceDoc(e.pos,e.pos+1)==i,p=u.list;return u==l&&s&&(p=p.concat(Object.keys(s).map((e=>({label:e,type:"constant"}))))),{from:a,to:m?e.pos+1:void 0,options:(f=i,g=p,f?g.map((e=>Object.assign(Object.assign({},e),{label:f+e.label+f,apply:void 0}))):g),validFor:i?ee:H};var f,g}}(e.schema,e.tables,e.schemas,e.defaultTable,e.defaultSchema,e.dialect||de):()=>null}function le(e){return e.schema?(e.dialect||de).language.data.of({autocomplete:se(e)}):[]}function ce(e={}){let t=e.dialect||de;return new n.ri(t.language,[le(e),oe(t,!!e.upperCaseKeywords)])}const de=re.define({}),ue=re.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:I+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:D+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),me="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",pe=D+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",fe="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",ge=re.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:I+"group_concat "+me,types:pe,builtin:fe}),he=re.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:I+"always generated groupby_concat hard persistent shutdown soft virtual "+me,types:pe,builtin:fe}),be=re.define({keywords:I+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:D+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),_e=re.define({keywords:I+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:D+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),ve=re.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:D+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),ye=re.define({keywords:I+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:D+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0,plsqlQuotingMechanism:!0})}}]);
//# sourceMappingURL=7396.index.js.map