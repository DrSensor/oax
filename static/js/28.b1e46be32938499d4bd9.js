webpackJsonp([28],{581:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(582),i=a(583),r=a(3)(s.a,i.a,!1,null,null,null);e.default=r.exports},582:function(t,e,a){"use strict";var s=a(5),i=a.n(s),r=a(9),n=a(6),l=a(57),c=a(166),d=a(34);e.a={mixins:[l.a],directives:{markdown:d.a},components:{appOperation:c.a},computed:i()({},Object(r.c)([n._35,n._29,n.I,n.H])),methods:i()({},Object(r.d)([n.P]))}},583:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pl-4 pr-4 pa-3-sm",attrs:{fluid:"fluid"}},[a("div",{staticClass:"hidden-sm-and-up mt-2"}),a("v-layout",{staticClass:"stretch",class:{"dividers-bottom":t.VIEW_SUMMARY&&t.VIEW_PATH},attrs:{row:"row",wrap:"wrap"}},t._l(t.SPEC_OPERATIONS,function(e,s){return e._._display?a("div",{directives:[{name:"ripple",rawName:"v-ripple",value:!0,expression:"true"}],key:e._id,staticClass:"flex hover--block",class:{"secondary white--text":t.SPEC_OPERATION===t.SPEC_OPERATIONS[s]},style:{"flex-basis":t.$innerMin(t.SPEC_OPERATIONS.length),"max-width":t.$innerMin(t.SPEC_OPERATIONS.length)},attrs:{relative:"relative"},on:{click:function(a){a.stopPropagation(),t.SPEC_SET_OPERATION(e)}}},[a("div",{staticClass:"pt-1 pb-1 plr-3-sm"},[a("app-operation",{attrs:{sum:!t.VIEW_PATH,item:t.SPEC_OPERATIONS[s]}}),t.VIEW_SUMMARY&&t.VIEW_PATH&&(e._.summary||e._.description)?a("div",[a("div",{directives:[{name:"markdown",rawName:"v-markdown.summary",value:e._,expression:"item._",modifiers:{summary:!0}}],staticClass:"pt-1 pr-1",staticStyle:{"padding-left":"68px"}})]):t._e()],1)]):t._e()})),a("div",{staticClass:"hidden-sm-and-up mt-2"})],1)},staticRenderFns:[]};e.a=s}});