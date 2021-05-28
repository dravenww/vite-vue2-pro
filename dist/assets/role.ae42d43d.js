var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;import{s as n,n as a,b as c}from"./index.15788707.js";import"./vendor.d0ee885f.js";const d={key:"",name:"",description:"",routes:[]},h={};var u=a({data:()=>({role:Object.assign({},d),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}),computed:{routesData(){return this.routes}},created(){this.getRoutes(),this.getRoles()},methods:{async getRoutes(){const e=await n({url:"/vue-element-admin/routes",method:"get"});this.serviceRoutes=e.data,this.routes=this.generateRoutes(e.data)},async getRoles(){const e=await n({url:"/vue-element-admin/roles",method:"get"});this.rolesList=e.data},generateRoutes(e,t="/"){const i=[];for(let r of e){if(r.hidden)continue;const e=this.onlyOneShowingChild(r.children,r);r.children&&e&&!r.alwaysShow&&(r=e);const l={path:t+"/"+r.path,title:r.meta&&r.meta.title};r.children&&(l.children=this.generateRoutes(r.children,l.path)),i.push(l)}return i},generateArr(e){let t=[];return e.forEach((e=>{if(t.push(e),e.children){const i=this.generateArr(e.children);i.length>0&&(t=[...t,...i])}})),t},handleAddRole(){this.role=Object.assign({},d),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit(e){this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=c(e.row),this.$nextTick((()=>{const e=this.generateRoutes(this.role.routes);this.$refs.tree.setCheckedNodes(this.generateArr(e)),this.checkStrictly=!1}))},handleDelete({$index:e,row:t}){this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{var i;await(i=t.key,n({url:`/vue-element-admin/role/${i}`,method:"delete"})),this.rolesList.splice(e,1),this.$message({type:"success",message:"Delete succed!"})})).catch((e=>{console.error(e)}))},generateTree(e,t="/",i){const r=[];for(const l of e){const e=t+"/"+l.path;l.children&&(l.children=this.generateTree(l.children,e,i)),(i.includes(e)||l.children&&l.children.length>=1)&&r.push(l)}return r},async confirmRole(){const e="edit"===this.dialogType,t=this.$refs.tree.getCheckedKeys();if(this.role.routes=this.generateTree(c(this.serviceRoutes),"/",t),e){await(i=this.role.key,r=this.role,n({url:`/vue-element-admin/role/${i}`,method:"put",data:r}));for(let e=0;e<this.rolesList.length;e++)if(this.rolesList[e].key===this.role.key){this.rolesList.splice(e,1,Object.assign({},this.role));break}}else{const{data:e}=await function(e){return n({url:"/vue-element-admin/role",method:"post",data:e})}(this.role);this.role.key=e.key,this.rolesList.push(this.role)}var i,r;const{description:l,key:s,name:o}=this.role;this.dialogVisible=!1,this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:`\n            <div>Role Key: ${s}</div>\n            <div>Role Name: ${o}</div>\n            <div>Description: ${l}</div>\n          `,type:"success"})},onlyOneShowingChild(e=[],n){let a=null;const c=e.filter((e=>!e.hidden));return 1===c.length?(a=c[0],a.path=n.path+"/"+a.path,a):0===c.length&&(d=((e,t)=>{for(var i in t||(t={}))l.call(t,i)&&o(e,i,t[i]);if(r)for(var i of r(t))s.call(t,i)&&o(e,i,t[i]);return e})({},n),a=t(d,i({path:"",noShowingChildren:!0})),a);var d}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("New Role")]),i("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[i("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),i("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),i("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),i("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return e.handleEdit(t)}}},[e._v("Edit")]),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){return e.handleDelete(t)}}},[e._v("Delete")])]}}])})],1),i("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[i("el-form-item",{attrs:{label:"Name"}},[i("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),i("el-form-item",{attrs:{label:"Desc"}},[i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),i("el-form-item",{attrs:{label:"Menus"}},[i("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),i("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)}),[],!1,(function(e){for(let t in h)this[t]=h[t]}),"0533aacf",null,null);u.options.__file="src/views/permission/role.vue";var p=u.exports;export default p;