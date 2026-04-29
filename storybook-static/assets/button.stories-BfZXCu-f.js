import{j as e}from"./jsx-runtime-D_zvdyIk.js";const $={primary:"bg-blue-600 text-white hover:bg-blue-500",secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300",danger:"bg-red-600 text-white hover:bg-red-500"},M={sm:"px-3 py-1.5 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};function a({label:_,variant:A="primary",size:E="md",disabled:G=!1,loading:c=!1,onClick:I}){return e.jsxs("button",{onClick:I,disabled:G||c,className:`
        inline-flex items-center justify-center rounded-md font-semibold
        transition focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${$[A]}
        ${M[E]}
      `,children:[c&&e.jsxs("svg",{className:"mr-2 h-4 w-4 animate-spin",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]}),_]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"UI/Button",component:a,argTypes:{variant:{control:"select",options:["primary","secondary","danger"],description:"Visual style do botão"},size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},label:{control:"text"},onClick:{action:"clicked"}},args:{label:"Clique aqui",variant:"primary",size:"md"}},r={},s={args:{variant:"secondary",label:"Secundário"}},n={args:{variant:"danger",label:"Deletar"}},o={args:{size:"sm",label:"Pequeno"}},t={args:{size:"lg",label:"Grande"}},l={args:{disabled:!0}},i={args:{loading:!0,label:"Salvando..."}},d={render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{label:"Primary",variant:"primary"}),e.jsx(a,{label:"Secondary",variant:"secondary"}),e.jsx(a,{label:"Danger",variant:"danger"})]})};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Secundário'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Deletar'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,h,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Pequeno'
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var q,z,w;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Grande'
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,B,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var N,T,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Salvando...'
  }
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var P,k,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">\r
      <Button label="Primary" variant="primary" />\r
      <Button label="Secondary" variant="secondary" />\r
      <Button label="Danger" variant="danger" />\r
    </div>
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const U=["Primary","Secondary","Danger","Small","Large","Disabled","Loading","AllVariants"];export{d as AllVariants,n as Danger,l as Disabled,t as Large,i as Loading,r as Primary,s as Secondary,o as Small,U as __namedExportsOrder,R as default};
