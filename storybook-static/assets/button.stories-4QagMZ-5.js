import{j as e}from"./jsx-runtime-D_zvdyIk.js";const G={primary:"bg-blue-600 text-white hover:bg-blue-500",secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300",danger:"bg-red-600 text-white hover:bg-red-500"},$={sm:"px-3 py-1.5 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};function a({label:_,variant:M="primary",size:O="md",disabled:A=!1,loading:c=!1,onClick:E}){return e.jsxs("button",{onClick:E,disabled:A||c,className:`
        inline-flex items-center justify-center rounded-md font-semibold
        transition focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${G[M]}
        ${$[O]}
      `,children:[c&&e.jsxs("svg",{className:"mr-2 h-4 w-4 animate-spin",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]}),_]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"BOP Monitoring/Controls/Button",component:a,argTypes:{label:{control:"text",description:"Texto exibido dentro do botão."},variant:{control:"select",options:["primary","secondary","danger"],description:"Define a intenção visual do botão na interface BOP."},size:{control:"radio",options:["sm","md","lg"],description:"Define o tamanho do botão."},loading:{control:"boolean",description:"Mostra estado de carregamento e desabilita o botão."},disabled:{control:"boolean",description:"Desabilita o botão manualmente."},onClick:{action:"clicked"}},args:{label:"Clique aqui",variant:"primary",size:"md"},tags:["autodocs"]},r={},s={args:{variant:"secondary",label:"Secundário"}},o={args:{variant:"danger",label:"Deletar"}},n={args:{size:"sm",label:"Pequeno"}},t={args:{size:"lg",label:"Grande"}},i={args:{disabled:!0}},l={args:{loading:!0,label:"Salvando..."}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{label:"Primário",variant:"primary"}),e.jsx(a,{label:"Secundário",variant:"secondary"}),e.jsx(a,{label:"Perigo",variant:"danger"})]})};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Secundário'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Deletar'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,h,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Pequeno'
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var q,w,P;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Grande'
  }
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,B,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var C,T,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Salvando...'
  }
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var V,k,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <Button label="Primário" variant="primary" />\r
      <Button label="Secundário" variant="secondary" />\r
      <Button label="Perigo" variant="danger" />\r
    </div>
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const W=["Primary","Secondary","Danger","Small","Large","Disabled","Loading","AllVariants"];export{d as AllVariants,o as Danger,i as Disabled,t as Large,l as Loading,r as Primary,s as Secondary,n as Small,W as __namedExportsOrder,R as default};
