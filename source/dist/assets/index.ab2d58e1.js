import{p as a,a as e,r as s,c as l,o as n,b as c,d as i,F as o,e as t,u as d,t as u,f as p,g as r,C as v}from"./vendor.87e93a77.js";!function(a=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const l=new URL(a,location),n=a=>{URL.revokeObjectURL(a.src),a.remove()};self[e]=a=>new Promise(((s,c)=>{const i=new URL(a,l);if(self[e].moduleMap[i])return s(self[e].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),t=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){c(new Error(`Failed to import: ${a}`)),n(t)},onload(){s(self[e].moduleMap[i]),n(t)}});document.head.appendChild(t)})),self[e].moduleMap={}}}("/assets/");a("data-v-29d7154e");const m={class:"container"},g={class:"fn-container"},b=i("div",{class:"msg"}," 由原数组中的每一项的id作为key,本身作为value形成对象结构 ",-1),f={class:"mapContainer"},h={class:"map-value"},j={class:"language-javascript"},k=i("div",{class:"msg"}," 遍历原数组使用每一项中的pid去map对象中寻找自己的父节点(pid === id) ",-1),y={class:"mapContainer"},L={class:"map-value"},w={class:"language-javascript"},x={class:"operate-container"},C=i("div",{class:"msg"},"处理过后的树形数组",-1),R={class:"treeList-box"},U={class:"language-javascript"},_=i("div",{class:"msg"},"遍历父节点(先寻找根据寻找结果处理不同逻辑)",-1),M={class:"btn-box"},E={key:0,class:"tip"};e();const $={expose:[],setup(a){const e=s([{id:1,pid:null,children:[]},{id:2,pid:1,children:[]},{id:3,pid:2,children:[]}]),r=s([]),v=l((()=>{const a={};return e.value.forEach((e=>{a[e.id]=e})),a})),$=s([]);let B=s(-1);e.value.forEach((a=>{$.value.push((()=>{v.value[a.pid]?v.value[a.pid].children.push(a):r.value.push(a)}))}));const F=()=>{B.value++},O=s(!1),P=()=>{console.log(),$.value[B.value](),B.value===e.value.length-1&&(O.value=!0)};return(a,s)=>(n(),c("div",m,[i("div",g,[b,i("div",f,[(n(!0),c(o,null,t(d(v),((a,s,l)=>(n(),c("div",{key:l,class:"mapBox"},[i("span",{class:["map-key",{active:-1!==d(B)&&s==e.value[d(B)].pid}]},u(s),3),i("span",h,[i("pre",null,[i("code",j,u(a),1)])])])))),128))]),k,i("div",y,[(n(!0),c(o,null,t(e.value,((a,e)=>(n(),c("div",{key:e,class:["mapBox",{active:d(B)===e}]},[i("span",L,[i("pre",null,[i("code",w,u(a),1)])])],2)))),128))])]),i("div",x,[C,i("div",R,[i("pre",null,[i("code",U,u(r.value),1)])]),_,i("div",M,[i("button",{onClick:F,disabled:O.value},"寻找父节点",8,["disabled"]),i("button",{onClick:P,disabled:O.value},"节点添加",8,["disabled"])]),O.value?(n(),c("div",E,"恭喜,已全部处理完毕,树形结构已生成~")):p("",!0)])]))},__scopeId:"data-v-29d7154e"};r($).use(v.vuePlugin).mount("#app");
