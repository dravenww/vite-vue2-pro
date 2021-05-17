import{n as e}from"./index.a1f8c0f1.js";import"./vendor.ae19cf99.js";const l={};var d=e({name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:()=>({visible:!1,interval:null,isMoving:!1}),mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop(){if(this.isMoving)return;const e=window.pageYOffset;let l=0;this.isMoving=!0,this.interval=setInterval((()=>{const d=Math.floor(this.easeInOutQuad(10*l,e,-e,500));d<=this.backPosition?(window.scrollTo(0,this.backPosition),clearInterval(this.interval),this.isMoving=!1):window.scrollTo(0,d),l++}),16.7)},easeInOutQuad:(e,l,d,v)=>(e/=v/2)<1?d/2*e*e+l:-d/2*(--e*(e-2)-1)+l}},(function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("transition",{attrs:{name:e.transitionName}},[d("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:e.customStyle,on:{click:e.backToTop}},[d("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[d("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])}),[],!1,(function(e){for(let d in l)this[d]=l[d]}),"3acddd02",null,null);d.options.__file="src/components/BackToTop/index.vue";var v=d.exports;const i={};var o=e({name:"BackToTopDemo",components:{BackToTop:v},data:()=>({myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}})},(function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("div",{staticClass:"components-container"},[d("aside",[e._v(" When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner ")]),d("aside",[e._v(" You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally ")]),e._m(0),d("el-tooltip",{attrs:{placement:"top",content:"tooltip"}},[d("back-to-top",{attrs:{"custom-style":e.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)}),[function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("div",{staticClass:"placeholder-container"},[d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")])])}],!1,(function(e){for(let l in i)this[l]=i[l]}),"29f81388",null,null);o.options.__file="src/views/components-demo/back-to-top.vue";var a=o.exports;export default a;
