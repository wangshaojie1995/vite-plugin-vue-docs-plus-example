var N=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(l,s,r)=>s in l?N(l,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[s]=r,f=(l,s)=>{for(var r in s||(s={}))q.call(s,r)&&v(l,r,s[r]);if(k)for(var r of k(s))E.call(s,r)&&v(l,r,s[r]);return l},C=(l,s)=>A(l,F(s));import{b as t,i as e,t as d,s as _,g as H,v as W,x as V,F as a,n as u,r as x,y as L,o}from"./vendor.2226ec98.js";import{_ as O}from"./index.7d888a97.js";const T={data(){return{types:{slots:{title:"\u63D2\u69FD",data:[{title:"\u540D\u79F0",key:"name"},{title:"\u8BF4\u660E",key:"desc"},{title:"\u8FD4\u56DE\u53C2\u6570",key:"params"}]},props:{title:"\u5C5E\u6027",data:[{title:"\u53C2\u6570",key:"name"},{title:"\u8BF4\u660E",key:"notes"},{title:"\u7C7B\u578B",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default"},{title:"\u5FC5\u586B",key:"required"}]},emits:{title:"\u4E8B\u4EF6",data:[{title:"\u4E8B\u4EF6",key:"name"},{title:"\u8BF4\u660E",key:"notes"},{title:"\u56DE\u8C03\u53C2\u6570",key:"params"}]},methods:{title:"\u65B9\u6CD5",data:[{title:"\u65B9\u6CD5\u540D",key:"name"},{title:"\u8BF4\u660E",key:"desc"},{title:"\u53C2\u6570: \u8BF4\u660E",key:"params"},{title:"\u8FD4\u56DE\u503C",key:"return"}]}},showDemo:!1,showSourceCode:!1,sourceCodeVisible:{},result:{name:"el-badge",props:[{name:"value",type:"string | number",default:"2",notes:""},{name:"max",type:"number",default:222,notes:""},{name:"is-dot",type:"boolean",notes:""},{name:"hidden",type:"boolean",default:"false",notes:""},{name:"array",type:"array",notes:""},{name:"obj",type:"array"},{name:"type",type:"string",default:"primary",notes:""}],emits:[{name:"update:value",notes:" \u66F4\u65B0 value"}],methods:[],desc:"\u7EC4\u4EF6\u63CF\u8FF0",navTitle:"\u7EC4\u4EF62",navOrder:"2",title:"\u7EC4\u4EF6\u540D\u79F01",slots:[{name:"default",desc:"\u6D4B\u8BD5\u63D2\u69FD\u4E00",params:[]}]}}},methods:{toggleSourceCodeVisible(l){this.sourceCodeVisible=C(f({},this.sourceCodeVisible),{[l]:!this.sourceCodeVisible[l]})}}},z={class:"component-desc"},G={class:"card"},I=e("h3",null,"demo\u540D\u79F0",-1),J=e("code",{class:"language-js"},`<template>\r
  <div>bage.demo.vuefsdfsdfd fdsfsd22211</div>\r
</template>\r
\r
<script>\r
/**\r
 * demo\u540D\u79F0\r
 * @describe demo \u63CF\u8FF0\r
 */\r
export default {\r
  name: "badge1.demo22",\r
}\r
<\/script>\r
\r
<style scoped>\r
.el-badge {\r
  margin-right: 30px;\r
}\r
</style>\r
`,-1),K=[J],M={class:"source-code"},P={style:{"text-align":"center"}},Q={class:"card"},R=e("h3",null,"Demo",-1),U=e("code",{class:"language-js"},`<template>\r
  <div>demo.vue22</div>\r
  <HelloWorld>slot \u5185\u5BB9</HelloWorld>\r
</template>\r
\r
<script>\r
import {HelloWorld} from '@xiangxin-element'\r
export default {\r
  name: "badge1.demo11",\r
  components: {HelloWorld}\r
}\r
<\/script>\r
\r
<style scoped>\r
.el-badge {\r
  margin-right: 30px;\r
}\r
</style>\r
`,-1),X=[U],Y={class:"source-code"},Z={style:{"text-align":"center"}},$=["id"],ee={key:0},te={key:0},oe={key:1},se={key:1};function le(l,s,r,re,n,h){const D=x("HelloWorld1badgeDemo"),S=x("HelloWorld1demo"),g=L("highlightjs");return o(),t("section",null,[e("h1",null,d(n.result.title)+"("+d(n.result.name)+")",1),e("p",z,d(n.result.desc),1),e("div",G,[I,_("",!0),H(D),W((o(),t("pre",null,K)),[[g],[V,n.sourceCodeVisible.HelloWorld1badgeDemo]]),e("div",M,[e("p",P,[e("span",{style:{cursor:"pointer"},onClick:s[0]||(s[0]=c=>h.toggleSourceCodeVisible("HelloWorld1badgeDemo"))},d(n.sourceCodeVisible.HelloWorld1badgeDemo?"\u6536\u8D77":"\u5C55\u5F00")+"\u4EE3\u7801 ",1)])])]),e("div",Q,[R,_("",!0),H(S),W((o(),t("pre",null,X)),[[g],[V,n.sourceCodeVisible.HelloWorld1demo]]),e("div",Y,[e("p",Z,[e("span",{style:{cursor:"pointer"},onClick:s[1]||(s[1]=c=>h.toggleSourceCodeVisible("HelloWorld1demo"))},d(n.sourceCodeVisible.HelloWorld1demo?"\u6536\u8D77":"\u5C55\u5F00")+"\u4EE3\u7801 ",1)])])]),(o(!0),t(a,null,u(n.types,(c,m)=>{var b;return o(),t(a,null,[(b=n.result[m])!=null&&b.length?(o(),t("div",{class:"card",key:m},[e("h3",{id:m},d(c.title),9,$),e("table",null,[e("thead",null,[e("tr",null,[(o(!0),t(a,null,u(c.data,(i,y)=>(o(),t("th",{key:y},d(i.title),1))),128))])]),e("tbody",null,[(o(!0),t(a,null,u(n.result[m],(i,y)=>(o(),t("tr",{key:y},[(o(!0),t(a,null,u(c.data,(p,j)=>(o(),t("td",{key:j},[Array.isArray(i[p.key])?(o(),t("div",ee,[i[p.key].length?(o(),t("div",te,[(o(!0),t(a,null,u(i[p.key],(w,B)=>(o(),t("div",{key:B},d(w),1))),128))])):(o(),t("span",oe,"-"))])):(o(),t("div",se,d(i[p.key]||"-"),1))]))),128))]))),128))])])])):_("",!0)],64)}),256))])}var ae=O(T,[["render",le]]);export{ae as default};
