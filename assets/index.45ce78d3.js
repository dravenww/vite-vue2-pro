import{h as e}from"./clipboard.6974c7d2.js";import{n as o}from"./index.a1f8c0f1.js";import"./vendor.ae19cf99.js";const t=require.context("../../icons/svg",!1,/\.svg$/),a=/\.\/(.*)\.svg/,n=(s=t,s.keys()).map((e=>e.match(a)[1]));var s;const i=["platform-eleme","eleme","delete-solid","delete","s-tools","setting","user-solid","user","phone","phone-outline","more","more-outline","star-on","star-off","s-goods","goods","warning","warning-outline","question","info","remove","circle-plus","success","error","zoom-in","zoom-out","remove-outline","circle-plus-outline","circle-check","circle-close","s-help","help","minus","plus","check","close","picture","picture-outline","picture-outline-round","upload","upload2","download","camera-solid","camera","video-camera-solid","video-camera","message-solid","bell","s-cooperation","s-order","s-platform","s-fold","s-unfold","s-operation","s-promotion","s-home","s-release","s-ticket","s-management","s-open","s-shop","s-marketing","s-flag","s-comment","s-finance","s-claim","s-custom","s-opportunity","s-data","s-check","s-grid","menu","share","d-caret","caret-left","caret-right","caret-bottom","caret-top","bottom-left","bottom-right","back","right","bottom","top","top-left","top-right","arrow-left","arrow-right","arrow-down","arrow-up","d-arrow-left","d-arrow-right","video-pause","video-play","refresh","refresh-right","refresh-left","finished","sort","sort-up","sort-down","rank","loading","view","c-scale-to-original","date","edit","edit-outline","folder","folder-opened","folder-add","folder-remove","folder-delete","folder-checked","tickets","document-remove","document-delete","document-copy","document-checked","document","document-add","printer","paperclip","takeaway-box","search","monitor","attract","mobile","scissors","umbrella","headset","brush","mouse","coordinate","magic-stick","reading","data-line","data-board","pie-chart","data-analysis","collection-tag","film","suitcase","suitcase-1","receiving","collection","files","notebook-1","notebook-2","toilet-paper","office-building","school","table-lamp","house","no-smoking","smoking","shopping-cart-full","shopping-cart-1","shopping-cart-2","shopping-bag-1","shopping-bag-2","sold-out","sell","present","box","bank-card","money","coin","wallet","discount","price-tag","news","guide","male","female","thumb","cpu","link","connection","open","turn-off","set-up","chat-round","chat-line-round","chat-square","chat-dot-round","chat-dot-square","chat-line-square","message","postcard","position","turn-off-microphone","microphone","close-notification","bangzhu","time","odometer","crop","aim","switch-button","full-screen","copy-document","mic","stopwatch","medal-1","medal","trophy","trophy-1","first-aid-kit","discover","place","location","location-outline","location-information","add-location","delete-location","map-location","alarm-clock","timer","watch-1","watch","lock","unlock","key","service","mobile-phone","bicycle","truck","ship","basketball","football","soccer","baseball","wind-power","light-rain","lightning","heavy-rain","sunrise","sunrise-1","sunset","sunny","cloudy","partly-cloudy","cloudy-and-sunny","moon","moon-night","dish","dish-1","food","chicken","fork-spoon","knife-fork","burger","tableware","sugar","dessert","ice-cream","hot-water","water-cup","coffee-cup","cold-drink","goblet","goblet-full","goblet-square","goblet-square-full","refrigerator","grape","watermelon","cherry","apple","pear","orange","coffee","ice-tea","ice-drink","milk-tea","potato-strips","lollipop","ice-cream-square","ice-cream-round"];const r={};var c=o({name:"Icons",data:()=>({svgIcons:n,elementIcons:i}),methods:{generateIconCode:e=>`<svg-icon icon-class="${e}" />`,generateElementIconCode:e=>`<i class="el-icon-${e}" />`,handleClipboard(o,t){e(o,t)}}},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"icons-container"},[e._m(0),t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"Icons"}},[t("div",{staticClass:"grid"},e._l(e.svgIcons,(function(o){return t("div",{key:o,on:{click:function(t){e.handleClipboard(e.generateIconCode(o),t)}}},[t("el-tooltip",{attrs:{placement:"top"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(" "+e._s(e.generateIconCode(o))+" ")]),t("div",{staticClass:"icon-item"},[t("svg-icon",{attrs:{"icon-class":o,"class-name":"disabled"}}),t("span",[e._v(e._s(o))])],1)])],1)})),0)]),t("el-tab-pane",{attrs:{label:"Element-UI Icons"}},[t("div",{staticClass:"grid"},e._l(e.elementIcons,(function(o){return t("div",{key:o,on:{click:function(t){e.handleClipboard(e.generateElementIconCode(o),t)}}},[t("el-tooltip",{attrs:{placement:"top"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(" "+e._s(e.generateElementIconCode(o))+" ")]),t("div",{staticClass:"icon-item"},[t("i",{class:"el-icon-"+o}),t("span",[e._v(e._s(o))])])])],1)})),0)])],1)],1)}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("aside",[t("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html",target:"_blank"}},[e._v("Add and use ")])])}],!1,(function(e){for(let o in r)this[o]=r[o]}),"21f0385d",null,null);c.options.__file="src/views/icons/index.vue";var l=c.exports;export default l;
