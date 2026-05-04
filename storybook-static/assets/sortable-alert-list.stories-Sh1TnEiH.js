import{j as e}from"./jsx-runtime-D_zvdyIk.js";const Z={"alta-temperatura":"border-l-red-500 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100","falha-do-sensor":"border-l-yellow-500 bg-yellow-50 text-yellow-800 hover:border-yellow-300 hover:bg-yellow-100","pressao-critica":"border-l-orange-500 bg-orange-50 text-orange-700 hover:border-orange-300 hover:bg-orange-100","baixa-pressao":"border-l-blue-500 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100"};function T({label:D,variant:q="alta-temperatura",disabled:L=!1,loading:i=!1,onClick:B,className:M=""}){return e.jsxs("button",{type:"button",onClick:B,disabled:L||i,className:`
        group flex w-full items-center gap-3 rounded-lg border border-slate-200 border-l-4 px-4 py-3 text-left
        font-medium shadow-sm transition duration-200
        focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${Z[q]}
        ${M}
      `,children:[e.jsx("span",{"aria-hidden":"true",className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm ring-1 ring-inset ring-slate-200 transition group-hover:bg-white",children:e.jsx("svg",{className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})})}),e.jsxs("span",{className:"flex min-w-0 flex-1 flex-col items-start",children:[e.jsx("span",{className:"truncate text-sm font-semibold text-slate-900",children:D}),e.jsx("span",{className:"mt-0.5 text-xs text-slate-500",children:"Arraste para reorganizar os alertas"})]}),i&&e.jsxs("svg",{className:"h-4 w-4 animate-spin text-slate-500",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]})]})}T.__docgenInfo={description:"",methods:[],displayName:"SortableAlertList",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'alta-temperatura' | 'falha-do-sensor' | 'pressao-critica' | 'baixa-pressao'",elements:[{name:"literal",value:"'alta-temperatura'"},{name:"literal",value:"'falha-do-sensor'"},{name:"literal",value:"'pressao-critica'"},{name:"literal",value:"'baixa-pressao'"}]},description:"",defaultValue:{value:"'alta-temperatura'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const F={title:"BOP Monitoring/Alerts/Sortable Alert List",component:T,parameters:{docs:{description:{component:"Exemplo de referência para implementação de drag and drop com dnd-kit: https://dndkit.com/"}}},argTypes:{variant:{control:"select",options:["alta-temperatura","falha-do-sensor","pressao-critica","baixa-pressao"]},disabled:{control:"boolean"},loading:{control:"boolean"},label:{control:"text"},onClick:{action:"clicked"}},args:{label:"Alerta de Alta Temperatura",variant:"alta-temperatura",disabled:!1,loading:!1},tags:["autodocs"]},a={},r={args:{label:"Falha do Sensor",variant:"falha-do-sensor"}},s={args:{label:"Pressão Crítica",variant:"pressao-critica"}},t={args:{label:"Baixa Pressão",variant:"baixa-pressao"}},o={args:{loading:!0,label:"Atualizando alerta..."}},l={args:{disabled:!0,label:"Alerta indisponível"}},n={parameters:{docs:{description:{story:"Referência oficial do dnd-kit: https://dndkit.com/"}}}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Falha do Sensor',
    variant: 'falha-do-sensor'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Pressão Crítica',
    variant: 'pressao-critica'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,v,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Baixa Pressão',
    variant: 'baixa-pressao'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,S,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Atualizando alerta...'
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,k,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Alerta indisponível'
  }
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,P,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Referência oficial do dnd-kit: https://dndkit.com/'
      }
    }
  }
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const V=["Default","SensorFailure","CriticalPressure","LowPressure","Loading","Disabled","DocsDndKitReference"];export{s as CriticalPressure,a as Default,l as Disabled,n as DocsDndKitReference,o as Loading,t as LowPressure,r as SensorFailure,V as __namedExportsOrder,F as default};
