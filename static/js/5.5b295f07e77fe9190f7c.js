webpackJsonp([5],{530:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(714),r=s(724),l=function(t){s(712)},i=s(3)(a.a,r.a,!1,l,"data-v-9c05b9f8",null);e.default=i.exports},712:function(t,e,s){var a=s(713);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(1)("0e43ea80",a,!0)},713:function(t,e,s){(t.exports=s(0)(void 0)).push([t.i,".table-stripes[data-v-9c05b9f8]{border-collapse:collapse}.table-stripes td[data-v-9c05b9f8]{padding:8px 8px 10px;vertical-align:top}.table-stripes tr[data-v-9c05b9f8]:nth-child(odd){background-color:rgba(0,0,0,.06)}.theme--dark .table-stripes tr[data-v-9c05b9f8]:nth-child(odd){background-color:hsla(0,0%,100%,.24)}",""])},714:function(t,e,s){"use strict";var a=s(5),r=s.n(a),l=s(95),i=s.n(l),n=s(26),o=s.n(n),c=s(13),d=s(9),p=s(6),u=s(715),h=s.n(u),f=s(716),C=s(722),g=s.n(C),v=s(168),b=s(723),k=s.n(b);e.a={components:{appKeyboard:f.a},mounted:function(){var t=this;this.$route.hash&&c.a.nextTick(function(){document.querySelector(t.$route.hash).scrollIntoView()})},data:function(){var t={};o()(g.a.editor).forEach(function(e){return i()(t,g.a.editor[e])});var e={};return o()(t).forEach(function(s){return e[s]=t[s].replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase().replace(/^del /,"delete ")}),{keys:g.a,directories:v,services:k.a,appKeys:r()({},g.a.app.Application,g.a.app.API),editorKeys:t,editorActions:e,classes:{Alt:"key-success",Ctrl:"key-error",Shift:"key-warning"},libs:o()(h.a).filter(function(t){return"@"!==t[0]}).map(function(t){return{name:t,version:0===h.a[t].indexOf("github:")?"":"^"===h.a[t][0]?h.a[t].substr(1):h.a[t],href:0===h.a[t].indexOf("github:")?"https://github.com/"+h.a[t].substr(7):"https://www.npmjs.com/package/"+t}})}},computed:r()({},Object(d.c)([p.n,p.h,p._10,p._9])),methods:{reload:function(){window.OAX&&window.OAX.registration&&window.OAX.registration.update?window.OAX.registration.update():location.reload(!0)}}}},715:function(t,e){t.exports={axios:"0.17","ciena-graphlib":"1.0","circular-json":"0.4",codemirror:"5.31","d3-array":"1.2","d3-format":"1.2","d3-scale":"1.0","d3-shape":"1.2",dagre:"github:darosh/dagre","fast-json-patch":"2.0","highlight.js":"9.12","intersection-observer":"0.4","json-schema-bundler":"0.1","json-stringify-pretty-compact":"1.0",lodash:"4.17",lunr:"2.1","material-icons-bundle":"github:darosh/material-icons-bundle","openapi-directory-lite":"github:darosh/openapi-directory-lite","openapi-samples":"github:darosh/openapi-samples",parse5:"3.0",randexp:"0.4","random-material-color":"1.0","serialize-error":"2.1",showdown:"1.8","swagger-schema-official":"2.0","v-hotkey":"0.2",vue:"2.5","vue-router":"3.0","vue-virtual-scroller":"0.10",vuetify:"0.17",vuex:"3.0","vuex-router-sync":"5.0","walk-parse5":"1.0","webpack-common-shake":"1.5","whatwg-url":"6.3","yaml-js":"0.2"}},716:function(t,e,s){"use strict";var a=s(719),r=s(721),l=function(t){s(717)},i=s(3)(a.a,r.a,!1,l,"data-v-8adc38d2",null);e.a=i.exports},717:function(t,e,s){var a=s(718);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(1)("adfba848",a,!0)},718:function(t,e,s){(t.exports=s(0)(!1)).push([t.i,".keyboard[data-v-8adc38d2]{max-width:500px;min-width:500px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.keyboard .line[data-v-8adc38d2]:first-child{font-size:85%}.keyboard .line[data-v-8adc38d2]{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.key[data-v-8adc38d2]{-webkit-box-flex:1;flex:1}",""])},719:function(t,e,s){"use strict";var a=s(26),r=s.n(a),l=s(720),i=s.n(l);e.a={props:["shortcuts"],data:function(){return{keyboard:i.a,textKeys:{PageUp:"PgUp",PageDown:"PgDn",Insert:"Ins",Delete:"Del"},defaultClasses:{Single:"key-primary",Alt:"key-success",Ctrl:"key-error",Shift:"key-warning"},classes:{}}},created:function(){var t=this;r()(this.shortcuts).forEach(function(e){var s=[];e.split(" ").forEach(function(t){return t.split("+").forEach(function(t){return s.push(t)})}),1===s.length&&t.addClass(s,t.defaultClasses.Single),s.indexOf("Alt")>-1&&(t.addClass(s,t.defaultClasses.Alt),t.classes.Alt=t.defaultClasses.Alt),s.indexOf("Shift")>-1&&(t.addClass(s,t.defaultClasses.Shift),t.classes.Shift=t.defaultClasses.Shift),s.indexOf("Ctrl")>-1&&(t.addClass(s,t.defaultClasses.Ctrl),t.classes.Ctrl=t.defaultClasses.Ctrl)})},methods:{addClass:function(t,e){var s=this;t.forEach(function(t){var a=s.textKey(t);s.defaultClasses[a]||(s.classes[a]=s.classes[a]||"",-1===s.classes[a].indexOf(e)&&(s.classes[a]+=" "+e))})},textKey:function(t){return this.textKeys[t]||t},text:function(t){var e=(t.text||t).split(" ");return e[1]||e[0]},grow:function(t){return t.long},symbol:function(t){var e=this.text(t);return!(e.length>1)&&e.charCodeAt(0)>128}}}},720:function(t,e){t.exports=[[{key:"Escape",text:"Esc"},"F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],["~ `","! 1","@ 2","# 3","$ 4","% 5","^ 6","& 7","* 8","( 9",") 0","_ -","+ =",{key:"Backspace",text:"Backspace",long:!0}],[{text:"Tab",long:!0},"Q","W","E","R","T","Y","U","I","O","P","{ [","} ]","| \\"],[{text:"CapsLock",long:!0},"A","S","D","F","G","H","J","K","L",": ;","\" '",{text:"Enter",long:!0}],[{text:"Shift",long:!0},"Z","X","C","V","B","N","M","< ,","> .","? /",{text:"Shift",long:!0}],[{key:"Control",text:"Ctrl"},"Alt",{key:" ",text:"Space",long:!0},"AltGr",{key:"PrintScreen",text:"PrtSc"},{key:"Control",text:"Ctrl"}],[{text:"Home",long:!0},{text:"End",long:!0},{key:"ArrowLeft",text:"Left",icon:"arrow_left_thick"},{key:"ArrowDown",text:"Down",icon:"arrow_down_thick"},{key:"ArrowUp",text:"Up",icon:"arrow_up_thick"},{key:"ArrowRight",text:"Right",icon:"arrow_right_thick"},{key:"PageUp",text:"PgUp",long:!0},{key:"PageDown",text:"PgDn",long:!0},{text:"Ins",long:!0},{text:"Del",long:!0}]]},721:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keyboard"},t._l(t.keyboard,function(e,a){return s("div",{key:a,staticClass:"line"},t._l(e,function(e,a){return s("div",{key:a,staticClass:"key",class:t.classes[t.text(e)],style:{"flex-grow":t.grow(e)?1:.2,"font-size":t.symbol(e)?"90%":"70%"}},[e.icon?s("v-icon",{staticStyle:{width:"12px",height:"12px"}},[t._v(t._s(e.icon))]):t._e(),t._v(t._s(e.icon?"":t.text(e)))],1)}))}))},staticRenderFns:[]};e.a=a},722:function(t,e){t.exports={app:{Application:{Esc:["close dialog","close right panel","close left panel","open left panel","go to API"],"Alt+H":"go to help","Alt+L":"show/hide log","Alt+T":"switch theme"},API:{"Shift+Tab":"next tab",F8:"open editor","Alt+V":"switch API view","Alt+S":"switch path/summary","Alt+W":"switch wide view","Alt+O":"next operation","Alt+I":"previous operation"}},editor:{"Basic & Extra":{F8:"switchFullscreen",Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",Home:"goLineStartSmart",End:"goLineEnd",PageUp:"goPageUp",PageDown:"goPageDown",Tab:"defaultTab",Enter:"newlineAndIndent",Delete:"delCharAfter",Insert:"toggleOverwrite",Backspace:"smartBackspace","Shift+Backspace":"delCharBefore"},Cursor:{"Ctrl+Home":"goDocStart","Ctrl+End":"goDocEnd","Ctrl+Left":"goGroupLeft","Ctrl+Right":"goGroupRight","Alt+Left":"goSubwordLeft","Alt+Right":"goSubwordRight","Ctrl+Up":"scrollLineUp","Ctrl+Down":"scrollLineDown","Ctrl+Alt+Up":"addCursorToPrevLine","Ctrl+Alt+Down":"addCursorToNextLine","Ctrl+M":"goToBracket","Ctrl+K Ctrl+C":"showInCenter"},Edit:{"Ctrl+Z":"undo","Shift+Ctrl+Z":"redo","Ctrl+Y":"redo","Ctrl+[":"indentLess","Ctrl+]":"indentMore","Shift+Ctrl+Up":"swapLineUp","Shift+Ctrl+Down":"swapLineDown","Ctrl+/":"toggleCommentIndented","Ctrl+J":"joinLines","Shift+Ctrl+D":"duplicateLine","Ctrl+T":"transposeChars",F9:"sortLines","Ctrl+F9":"sortLinesInsensitive","Alt+Q":"wrapLines","Ctrl+K Ctrl+Backspace":"delLineLeft","Ctrl+K Ctrl+K":"delLineRight","Ctrl+K Ctrl+U":"upcaseAtCursor","Ctrl+K Ctrl+L":"downcaseAtCursor","Ctrl+Backspace":"delGroupBefore","Ctrl+Delete":"delGroupAfter","Shift+Ctrl+L":"splitSelectionByLine","Shift+Tab":"indentLess","Shift+Ctrl+K":"deleteLine","Ctrl+Enter":"insertLineAfter","Shift+Ctrl+Enter":"insertLineBefore"},Selection:{"Ctrl+A":"selectAll","Ctrl+U":"undoSelection","Shift+Ctrl+U":"redoSelection","Alt+U":"redoSelection","Ctrl+D":"selectNextOccurrence","Shift+Ctrl+Space":"selectScope","Shift+Ctrl+M":"selectBetweenBrackets","Ctrl+L":"selectLine"},Folding:{"Shift+Ctrl+[":"fold","Shift+Ctrl+]":"unfold","Ctrl+K Ctrl+J":"unfoldAll","Ctrl+K Ctrl+0":"unfoldAll"},"Search & Replace":{"Ctrl+F":"find","Ctrl+G":"findNext","Shift+Ctrl+G":"findPrev","Shift+Ctrl+F":"replace","Shift+Ctrl+R":"replaceAll","Ctrl+F3":"findUnder","Shift+Ctrl+F3":"findUnderPrevious","Alt+F3":"findAllUnder","Ctrl+I":"findIncremental","Shift+Ctrl+I":"findIncrementalReverse","Ctrl+H":"replace",F3:"findNext","Shift+F3":"findPrev"},Bookmarks:{F2:"nextBookmark","Shift+F2":"prevBookmark","Ctrl+F2":"toggleBookmark","Shift+Ctrl+F2":"clearBookmarks","Alt+F2":"selectBookmarks","Ctrl+K Ctrl+G":"clearBookmarks"},Sublime:{"Ctrl+K Ctrl+Space":"setSublimeMark","Ctrl+K Ctrl+A":"selectToSublimeMark","Ctrl+K Ctrl+W":"deleteToSublimeMark","Ctrl+K Ctrl+X":"swapWithSublimeMark","Ctrl+K Ctrl+Y":"sublimeYank"}}}},723:function(t,e){t.exports=[{title:"Swagger Code Generator",home:"https://github.com/swagger-api/swagger-codegen"},{title:"Swagger Validator Badge",home:"https://github.com/swagger-api/validator-badge"}]},724:function(t,e,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"gpu",staticStyle:{width:"100%","max-width":"100%"}},[s("v-layout",{staticClass:"ma-3-md"},[s("v-spacer",{staticClass:"hidden-xs-only"}),s("v-flex",{staticStyle:{"max-width":"80em"}},[s("v-card",{staticClass:"pa-4 mb-1"},[s("div",{staticClass:"pt-3 hidden-xs-only"}),s("h3",{staticClass:"pb-3 ma-0 display-2"},[t._v("OpenAPI Specification Explorer")]),s("div",{staticClass:"pb-3 hidden-xs-only"}),s("v-divider"),s("v-layout",{staticClass:"mt-3 mb-3"},[s("v-flex",[s("div",{staticClass:"subheading pt-2"},[t._v("Version "+t._s(t.APP_VERSION)+" "),s("span",{staticClass:"nowrap"},[t._v("("+t._s(t.APP_BUILD.toLocaleString())+")")])])]),s("v-spacer"),s("v-btn",{staticClass:"ma-0",attrs:{flat:"flat"},on:{click:t.reload}},[t._v("Update")])],1),s("v-divider",{staticClass:"mb-3"}),s("div",{staticClass:"hidden-xs-only",attrs:{id:"shortcuts"}},[s("h4",{staticClass:"display-1 mb-3"},[t._v("Keyboard shortcuts")]),s("h5",{staticClass:"headline mb-3"},[t._v("Key color legend")]),s("span",{staticClass:"keyboard mb-4",staticStyle:{display:"inline-block"}},[s("span",{staticClass:"key key-primary"},[t._v("Single")]),s("span",{staticClass:"key key-success"},[t._v("Alt")]),s("span",{staticClass:"key key-warning"},[t._v("Shift")]),s("span",{staticClass:"key key-error"},[t._v("Ctrl")])]),s("h5",{staticClass:"headline mb-3",attrs:{id:"application-shortcuts"}},[t._v("Application shortcuts")]),s("app-keyboard",{staticClass:"mb-4",attrs:{shortcuts:t.appKeys}}),s("div",{staticClass:"mr-4",staticStyle:{float:"left"}},[s("h6",{staticClass:"title mb-3"},[t._v("Application")]),s("table",{staticClass:"table-stripes mb-4"},[s("tbody",t._l(t.keys.app.Application,function(e,a){return s("tr",{key:a},[s("td",{staticClass:"keys nowrap"},t._l(a.split("+"),function(e,a){return s("span",[a?s("span",[t._v("+")]):t._e(),s("div",{staticClass:"key",class:t.classes[e]},[t._v(t._s(e))])])})),Array.isArray(e)?s("td",{staticClass:"pl-3"},[t._v("one of:"),s("ul",{staticClass:"unordered-list"},t._l(e,function(e){return s("li",[t._v(t._s(e))])}))]):s("td",{staticClass:"pl-3"},[t._v(t._s(e))])])}))])]),s("div",[s("h6",{staticClass:"title mb-3"},[t._v("API")]),s("table",{staticClass:"table-stripes mb-4"},[s("tbody",t._l(t.keys.app.API,function(e,a){return s("tr",{key:a},[s("td",{staticClass:"keys nowrap"},t._l(a.split("+"),function(e,a){return s("span",[a?s("span",[t._v("+")]):t._e(),s("div",{staticClass:"key",class:t.classes[e]},[t._v(t._s(e))])])})),s("td",{staticClass:"pl-3"},[t._v(t._s(e))])])}))])]),s("h5",{staticClass:"headline mb-3",staticStyle:{clear:"both"},attrs:{id:"editor-shortcuts"}},[t._v("Editor shortcuts")]),s("p",[t._v("Editor shortcuts should be identical to "),s("a",{attrs:{href:"https://codemirror.net/demo/sublime.html",target:"_blank",rel:"noopener"}},[t._v("CodeMirror Sublime keymap")]),t._v(" except some extra keys.")]),t._l(t.keys.editor,function(e,a){return[s("h6",{staticClass:"title mb-3",staticStyle:{clear:"both"}},[t._v(t._s(a))]),s("app-keyboard",{staticClass:"mb-4 mr-4",staticStyle:{float:"left"},attrs:{shortcuts:e}}),s("table",{staticClass:"table-stripes mb-4"},[s("tbody",t._l(e,function(e,a){return s("tr",{key:a},[s("td",{staticClass:"keys nowrap"},t._l(a.split(" "),function(e,a){return s("span",t._l(e.split("+"),function(e,a){return s("span",[a?s("span",[t._v("+")]):t._e(),s("div",{staticClass:"key",class:t.classes[e]},[t._v(t._s(e))])])}))})),s("td",{staticClass:"pl-3"},[t._v(t._s(t.editorActions[a]))])])}))])]}),s("v-divider",{staticClass:"mb-3"})],2),s("h4",{staticClass:"display-1 mb-3",attrs:{id:"acknowledgement"}},[t._v("Acknowledgement")]),s("p",[t._v("This app wouldn be posssible without following packages, services and OpenAPI specification directories")]),s("h5",{staticClass:"headline mb-3"},[t._v("Packages")]),s("p",t._l(t.libs,function(e,a){return s("span",{key:a},[a?s("span",[t._v(", ")]):t._e(),s("a",{staticClass:"subheading nowrap",attrs:{href:e.href,target:"_blank",rel:"noopener"}},[t._v(t._s(e.name))]),t._v(" "+t._s(e.version))])})),s("h5",{staticClass:"headline mb-3"},[t._v("Services")]),s("p",[s("ul",{staticClass:"unordered-list"},t._l(t.services,function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.home,target:"_blank",rel:"noopener"}},[t._v(t._s(e.title))])])}))]),s("h5",{staticClass:"headline mb-3"},[t._v("Directories")]),s("p",[s("ul",{staticClass:"unordered-list"},t._l(t.directories,function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.home,target:"_blank",rel:"noopener"}},[t._v(t._s(e.title))]),t._v(" — "+t._s(e.subTitle))])}))])],1)],1),s("v-spacer",{staticClass:"hidden-xs-only"})],1)],1)}]};e.a=a}});