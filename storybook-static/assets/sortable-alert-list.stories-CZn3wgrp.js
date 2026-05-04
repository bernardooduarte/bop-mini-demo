import{j as e}from"./jsx-runtime-D_zvdyIk.js";const B={"alta-temperatura":"border-l-red-500 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100","falha-do-sensor":"border-l-yellow-500 bg-yellow-50 text-yellow-800 hover:border-yellow-300 hover:bg-yellow-100","pressao-critica":"border-l-orange-500 bg-orange-50 text-orange-700 hover:border-orange-300 hover:bg-orange-100","baixa-pressao":"border-l-blue-500 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100"};function C({label:P,variant:T="alta-temperatura",disabled:q=!1,loading:n=!1,onClick:L,className:k=""}){return e.jsxs("button",{type:"button",onClick:L,disabled:q||n,className:`
        group flex w-full items-center gap-3 rounded-lg border border-slate-200 border-l-4 px-4 py-3 text-left
        font-medium shadow-sm transition duration-200
        focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${B[T]}
        ${k}
      `,children:[e.jsx("span",{"aria-hidden":"true",className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm ring-1 ring-inset ring-slate-200 transition group-hover:bg-white",children:e.jsx("svg",{className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})})}),e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col items-start",children:[e.jsx("span",{className:"truncate text-sm font-semibold text-slate-900",children:P}),e.jsx("span",{className:"mt-0.5 text-xs text-slate-500",children:"Arraste para reorganizar os alertas"})]}),n&&e.jsxs("svg",{className:"h-4 w-4 animate-spin text-slate-500",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]})]})}C.__docgenInfo={description:"",methods:[],displayName:"SortableAlertList",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'alta-temperatura' | 'falha-do-sensor' | 'pressao-critica' | 'baixa-pressao'",elements:[{name:"literal",value:"'alta-temperatura'"},{name:"literal",value:"'falha-do-sensor'"},{name:"literal",value:"'pressao-critica'"},{name:"literal",value:"'baixa-pressao'"}]},description:"",defaultValue:{value:"'alta-temperatura'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const R={title:"BOP Monitoring/Alerts/Sortable Alert List",component:C,argTypes:{variant:{control:"select",options:["alta-temperatura","falha-do-sensor","pressao-critica","baixa-pressao"]},disabled:{control:"boolean"},loading:{control:"boolean"},label:{control:"text"},onClick:{action:"clicked"}},args:{label:"Alerta de Alta Temperatura",variant:"alta-temperatura",disabled:!1,loading:!1},tags:["autodocs"]},a={},r={args:{label:"Falha do Sensor",variant:"falha-do-sensor"}},s={args:{label:"Pressão Crítica",variant:"pressao-critica"}},t={args:{label:"Baixa Pressão",variant:"baixa-pressao"}},o={args:{loading:!0,label:"Atualizando alerta..."}},l={args:{disabled:!0,label:"Alerta indisponível"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Falha do Sensor',
    variant: 'falha-do-sensor'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Pressão Crítica',
    variant: 'pressao-critica'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Baixa Pressão',
    variant: 'baixa-pressao'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,w,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Atualizando alerta...'
  }
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,S,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Alerta indisponível'
  }
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Z=["Default","SensorFailure","CriticalPressure","LowPressure","Loading","Disabled"];export{s as CriticalPressure,a as Default,l as Disabled,o as Loading,t as LowPressure,r as SensorFailure,Z as __namedExportsOrder,R as default};
