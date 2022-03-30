var O=Object.defineProperty,q=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var H=(s,l,n)=>l in s?O(s,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[l]=n,W=(s,l)=>{for(var n in l||(l={}))F.call(l,n)&&H(s,n,l[n]);if(C)for(var n of C(l))P.call(l,n)&&H(s,n,l[n]);return s},x=(s,l)=>q(s,A(l));import{b as t,i as e,t as d,g,v as b,x as k,s as V,F as c,n as m,f as D,r as v,y as T,o}from"./vendor.2226ec98.js";import{_ as L}from"./index.7d888a97.js";const z={data(){return{types:{slots:{title:"\u63D2\u69FD",data:[{title:"\u540D\u79F0",key:"name"},{title:"\u8BF4\u660E",key:"desc"},{title:"\u8FD4\u56DE\u53C2\u6570",key:"params"}]},props:{title:"\u5C5E\u6027",data:[{title:"\u53C2\u6570",key:"name"},{title:"\u8BF4\u660E",key:"notes"},{title:"\u7C7B\u578B",key:"type"},{title:"\u9ED8\u8BA4\u503C",key:"default"},{title:"\u5FC5\u586B",key:"required"}]},emits:{title:"\u4E8B\u4EF6",data:[{title:"\u4E8B\u4EF6",key:"name"},{title:"\u8BF4\u660E",key:"notes"},{title:"\u56DE\u8C03\u53C2\u6570",key:"params"}]},methods:{title:"\u65B9\u6CD5",data:[{title:"\u65B9\u6CD5\u540D",key:"name"},{title:"\u8BF4\u660E",key:"desc"},{title:"\u53C2\u6570: \u8BF4\u660E",key:"params"},{title:"\u8FD4\u56DE\u503C",key:"return"}]}},showDemo:!1,showSourceCode:!1,sourceCodeVisible:{},result:{name:"el-badge",props:[{name:"value",type:"string | number",default:"2",notes:""},{name:"max",type:"99 | 22",default:"99",notes:"\u6700\u5927\u503C"},{name:"is-dot",type:"boolean",notes:""},{name:"hidden",type:"boolean",default:"false",required:"true",notes:""},{name:"array",type:"array",notes:""},{name:"obj",type:"array",default:"{a:1}",notes:"\u5BF9\u8C61"},{name:"type",type:"primary | success | warning | info | danger",default:"primary",notes:"\u7C7B\u578B"}],emits:[{name:"click",notes:" \u6CA1\u6709\u9A8C\u8BC1\u51FD\u6570"},{name:"submit",notes:"\u5E26\u6709\u9A8C\u8BC1\u51FD\u6570 \u8BE6\u7EC6\u8BF4\u660E\u8BE6\u7EC6\u8BF4\u660E\u8BE6\u7EC6\u8BF4\u660E\u8BE6\u7EC6\u8BF4\u660E\u8BE6\u7EC6\u8BF4\u660E",params:["payload\uFF0C\u7C7B\u578B\uFF1AObjectProperty\uFF0C\u8BF4\u660E\uFF1A\u53C2\u6570\u4E00","test\uFF0C\u7C7B\u578B\uFF1AObjectProperty\uFF0C\u8BF4\u660E\uFF1A\u53C2\u6570\u4E8C","test1\uFF0C\u8BF4\u660E\uFF1A\u53C2\u6570\u4E09"]}],methods:[],desc:"\u7EC4\u4EF6\u63CF\u8FF0",navTitle:"\u7EC4\u4EF6",navOrder:"1",title:"\u7EC4\u4EF6\u540D\u79F0",slots:[{name:"default",desc:"\u6D4B\u8BD5\u63D2\u69FD\u4E00",params:[]}]}}},methods:{toggleSourceCodeVisible(s){this.sourceCodeVisible=x(W({},this.sourceCodeVisible),{[s]:!this.sourceCodeVisible[s]})}}},G={class:"component-desc"},I={class:"card"},J=e("h3",null,"Demo",-1),K=e("code",{class:"language-js"},`<template>\r
  <div>demo</div>\r
</template>\r
\r
<script>\r
import ElBadge from "./index.vue";\r
export default {\r
  name: "badge.demo",\r
  title: "\u6253\u53D1\u6253\u53D1",\r
  components: { ElBadge },\r
}\r
<\/script>\r
\r
<style scoped>\r
.el-badge {\r
  margin-right: 30px;\r
}\r
</style>\r
`,-1),M=[K],Q={class:"source-code"},R={style:{"text-align":"center"}},U={class:"card"},X=e("h3",null,"demo\u540D\u79F0111111",-1),Y={key:0,class:"demo-desc"},Z=e("code",{class:"language-js"},`<template>\r
  <div>bage.demo.vue</div>\r
</template>\r
\r
<script>\r
/**\r
 * demo\u540D\u79F0111111\r
 * @desc demo\u63CF\u8FF0\r
 */\r
export default {\r
  name: "badge.demo2",\r
  title: "\u6253\u53D1\u6253\u53D12",\r
}\r
<\/script>\r
\r
<style scoped>\r
.el-badge {\r
  margin-right: 30px;\r
}\r
</style>\r
`,-1),$=[Z],ee={class:"source-code"},te={style:{"text-align":"center"}},oe={class:"card"},le=e("h3",null,"Demo",-1),se=e("code",{class:"language-js"},`<template>\r
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
`,-1),re=[se],ne={class:"source-code"},de={style:{"text-align":"center"}},ie=["id"],ae={key:0},ce={key:0},me={key:1},ue={key:1},pe=e("div",null,[e("h1",null,"\u989D\u5916\u7684\u8BF4\u660E"),e("p",null,"\u8BF4\u660E\u5185\u5BB9"),e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-built_in"},"console"),D(".log("),e("span",{class:"hljs-string"},"'hello'"),D(`)
`)])])],-1);function _e(s,l,n,ye,r,_){const j=v("HelloWorldDemo"),S=v("HelloWorldbadgeDemo"),w=v("HelloWorlddemo"),y=T("highlightjs");return o(),t("section",null,[e("h1",null,d(r.result.title)+"("+d(r.result.name)+")",1),e("p",G,d(r.result.desc),1),e("div",I,[J,g(j),b((o(),t("pre",null,M)),[[y],[k,r.sourceCodeVisible.HelloWorldDemo]]),e("div",Q,[e("p",R,[e("span",{style:{cursor:"pointer"},onClick:l[0]||(l[0]=i=>_.toggleSourceCodeVisible("HelloWorldDemo"))},d(r.sourceCodeVisible.HelloWorldDemo?"\u6536\u8D77":"\u5C55\u5F00")+"\u4EE3\u7801 ",1)])])]),e("div",U,[X,(o(),t("p",Y,"demo\u63CF\u8FF0")),g(S),b((o(),t("pre",null,$)),[[y],[k,r.sourceCodeVisible.HelloWorldbadgeDemo]]),e("div",ee,[e("p",te,[e("span",{style:{cursor:"pointer"},onClick:l[1]||(l[1]=i=>_.toggleSourceCodeVisible("HelloWorldbadgeDemo"))},d(r.sourceCodeVisible.HelloWorldbadgeDemo?"\u6536\u8D77":"\u5C55\u5F00")+"\u4EE3\u7801 ",1)])])]),e("div",oe,[le,V("",!0),g(w),b((o(),t("pre",null,re)),[[y],[k,r.sourceCodeVisible.HelloWorlddemo]]),e("div",ne,[e("p",de,[e("span",{style:{cursor:"pointer"},onClick:l[2]||(l[2]=i=>_.toggleSourceCodeVisible("HelloWorlddemo"))},d(r.sourceCodeVisible.HelloWorlddemo?"\u6536\u8D77":"\u5C55\u5F00")+"\u4EE3\u7801 ",1)])])]),(o(!0),t(c,null,m(r.types,(i,u)=>{var f;return o(),t(c,null,[(f=r.result[u])!=null&&f.length?(o(),t("div",{class:"card",key:u},[e("h3",{id:u},d(i.title),9,ie),e("table",null,[e("thead",null,[e("tr",null,[(o(!0),t(c,null,m(i.data,(a,h)=>(o(),t("th",{key:h},d(a.title),1))),128))])]),e("tbody",null,[(o(!0),t(c,null,m(r.result[u],(a,h)=>(o(),t("tr",{key:h},[(o(!0),t(c,null,m(i.data,(p,B)=>(o(),t("td",{key:B},[Array.isArray(a[p.key])?(o(),t("div",ae,[a[p.key].length?(o(),t("div",ce,[(o(!0),t(c,null,m(a[p.key],(N,E)=>(o(),t("div",{key:E},d(N),1))),128))])):(o(),t("span",me,"-"))])):(o(),t("div",ue,d(a[p.key]||"-"),1))]))),128))]))),128))])])])):V("",!0)],64)}),256)),pe])}var ke=L(z,[["render",_e]]);export{ke as default};
