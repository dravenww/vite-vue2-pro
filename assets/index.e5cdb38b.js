import{n as a}from"./index.6a53eb42.js";import"./vendor.ae19cf99.js";const e=["apple","banana"],t={};var n=a({data:()=>({tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],key:1,formTheadOptions:["apple","banana","orange"],checkboxVal:e,formThead:e}),watch:{checkboxVal(a){this.formThead=this.formTheadOptions.filter((e=>a.indexOf(e)>=0)),this.key=this.key+1}}},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:a.checkboxVal,callback:function(e){a.checkboxVal=e},expression:"checkboxVal"}},[t("el-checkbox",{attrs:{label:"apple"}},[a._v(" apple ")]),t("el-checkbox",{attrs:{label:"banana"}},[a._v(" banana ")]),t("el-checkbox",{attrs:{label:"orange"}},[a._v(" orange ")])],1)],1),t("el-table",{key:a.key,staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._l(a.formThead,(function(e){return t("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(" "+a._s(t.row[e])+" ")]}}],null,!0)})}))],2)],1)}),[],!1,(function(a){for(let e in t)this[e]=t[e]}),null,null,null);n.options.__file="src/views/table/dynamic-table/components/FixedThead.vue";var l=n.exports;const r={};var o=a({data:()=>({tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],formThead:["apple","banana"]})},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:a.formThead,callback:function(e){a.formThead=e},expression:"formThead"}},[t("el-checkbox",{attrs:{label:"apple"}},[a._v(" apple ")]),t("el-checkbox",{attrs:{label:"banana"}},[a._v(" banana ")]),t("el-checkbox",{attrs:{label:"orange"}},[a._v(" orange ")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._l(a.formThead,(function(e){return t("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(" "+a._s(t.row[e])+" ")]}}],null,!0)})}))],2)],1)}),[],!1,(function(a){for(let e in r)this[e]=r[e]}),null,null,null);o.options.__file="src/views/table/dynamic-table/components/UnfixedThead.vue";var i=o.exports;const c={};var s=a({name:"DynamicTable",components:{FixedThead:l,UnfixedThead:i}},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticStyle:{margin:"0 0 5px 20px"}},[a._v(" Fixed header, sorted by header order, ")]),t("fixed-thead"),t("div",{staticStyle:{margin:"30px 0 5px 20px"}},[a._v(" Not fixed header, sorted by click order ")]),t("unfixed-thead")],1)}),[],!1,(function(a){for(let e in c)this[e]=c[e]}),null,null,null);s.options.__file="src/views/table/dynamic-table/index.vue";var p=s.exports;export default p;