(this["webpackJsonpKch-react-admin-dashboard"]=this["webpackJsonpKch-react-admin-dashboard"]||[]).push([[14],{483:function(e,s,t){},488:function(e,s,t){"use strict";var a=t(12),c=t(32),l=t(26),r=t(127),i=t(1),n=t(2),o=t.n(n),j=t(531),d=t(530),b=t(88),m=t(9),h=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],x=Object(i.forwardRef)((function(e,s){var t,n=e.label,x=e.hideIcon,O=e.showIcon,u=e.visible,f=e.className,p=e.htmlFor,g=e.placeholder,v=e.iconSize,N=e.inputClassName,y=e.invalid,w=Object(r.a)(e,h),C=Object(i.useState)(u),k=Object(l.a)(C,2),F=k[0],E=k[1];return Object(m.jsxs)(i.Fragment,{children:[n?Object(m.jsx)(b.t,{className:"form-label",for:p,children:n}):null,Object(m.jsxs)(b.r,{className:o()((t={},Object(c.a)(t,f,f),Object(c.a)(t,"is-invalid",y),t)),children:[Object(m.jsx)(b.q,Object(a.a)(Object(a.a)({ref:s,invalid:y,type:!1===F?"password":"text",placeholder:g||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(c.a)({},N,N))},n&&p?{id:p}:{}),w)),Object(m.jsx)(b.s,{className:"cursor-pointer",onClick:function(){return E(!F)},children:function(){var e=v||14;return!1===F?x||Object(m.jsx)(j.a,{size:e}):O||Object(m.jsx)(d.a,{size:e})}()})]})]})}));s.a=x,x.defaultProps={visible:!1}},707:function(e,s,t){"use strict";t.r(s);var a=t(12),c=t(1),l=t(466),r=t(465),i=t(476),n=t(137),o=t(126),j=t(215),d=t(477),b=t(523),m=t(532),h=t(565),x=t(502),O=t(536),u=t(131),f=t(130),p=t(468),g=t(488),v=t(467),N=t(88),y=(t(483),t(9)),w=function(e){var s=e.name,t=e.role;return Object(y.jsxs)(c.Fragment,{children:[Object(y.jsx)("div",{className:"toastify-header",children:Object(y.jsxs)("div",{className:"title-wrapper",children:[Object(y.jsx)(p.a,{size:"sm",color:"success",icon:Object(y.jsx)(b.a,{size:12})}),Object(y.jsxs)("h6",{className:"toast-title fw-bold",children:["Welcome, ",s]})]})}),Object(y.jsx)("div",{className:"toastify-body",children:Object(y.jsxs)("span",{children:["You have successfully logged in as an ",t," user to Kch. Now you can start to explore. Enjoy!"]})})]})},C={password:"admin",loginEmail:"admin@demo.com"};s.default=function(){var e=Object(i.a)().skin,s=Object(o.b)(),b=Object(l.g)(),p=Object(c.useContext)(f.a),k=Object(d.b)({defaultValues:C}),F=k.control,E=k.setError,L=k.handleSubmit,P=k.formState.errors,z="dark"===e?"login-v2-dark.svg":"login-v2.svg",G=t(479)("./".concat(z)).default;return Object(y.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(y.jsxs)(N.A,{className:"auth-inner m-0",children:[Object(y.jsxs)(r.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(y.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(y.jsxs)("defs",{children:[Object(y.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(y.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(y.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(y.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(y.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(y.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(y.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(y.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(y.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(y.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(y.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(y.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(y.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Kch"})]}),Object(y.jsx)(N.h,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(y.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(y.jsx)("img",{className:"img-fluid",src:G,alt:"Login Cover"})})}),Object(y.jsx)(N.h,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(y.jsxs)(N.h,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(y.jsx)(N.g,{tag:"h2",className:"fw-bold mb-1",children:"Welcome to Khan Copper's! \ud83d\udc4b\ud83c\udffb"}),Object(y.jsx)(N.f,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(y.jsxs)(N.n,{className:"auth-login-form mt-2",onSubmit:L((function(e){if(Object.values(e).every((function(e){return e.length>0})))n.a.login({email:e.loginEmail,password:e.password}).then((function(e){var t=Object(a.a)(Object(a.a)({},e.data.userData),{},{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken});s(Object(u.b)(t)),p.update(e.data.userData.ability),b.push(Object(v.a)(t.role)),j.c.success(Object(y.jsx)(w,{name:t.fullName||t.username||"John Doe",role:t.role||"admin"}),{icon:!1,transition:j.a,hideProgressBar:!0,autoClose:2e3})})).catch((function(e){return console.log(e)}));else for(var t in e)0===e[t].length&&E(t,{type:"manual"})})),children:[Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsx)(N.t,{className:"form-label",for:"login-email",children:"Email"}),Object(y.jsx)(d.a,{id:"loginEmail",name:"loginEmail",control:F,render:function(e){var s=e.field;return Object(y.jsx)(N.q,Object(a.a)({autoFocus:!0,type:"email",placeholder:"john@example.com",invalid:P.loginEmail&&!0},s))}})]}),Object(y.jsxs)("div",{className:"mb-1",children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(y.jsx)(N.t,{className:"form-label",for:"login-password",children:"Password"}),Object(y.jsx)(r.b,{to:"/forgot-password",children:Object(y.jsx)("small",{children:"Forgot Password?"})})]}),Object(y.jsx)(d.a,{id:"password",name:"password",control:F,render:function(e){var s=e.field;return Object(y.jsx)(g.a,Object(a.a)({className:"input-group-merge",invalid:P.password&&!0},s))}})]}),Object(y.jsxs)("div",{className:"form-check mb-1",children:[Object(y.jsx)(N.q,{type:"checkbox",id:"remember-me"}),Object(y.jsx)(N.t,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(y.jsx)(N.b,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(y.jsxs)("p",{className:"text-center mt-2",children:[Object(y.jsx)("span",{className:"me-25",children:"New on our platform?"}),Object(y.jsx)(r.b,{to:"/register",children:Object(y.jsx)("span",{children:"Create an account"})})]}),Object(y.jsx)("div",{className:"divider my-2",children:Object(y.jsx)("div",{className:"divider-text",children:"or"})}),Object(y.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(y.jsx)(N.b,{color:"facebook",children:Object(y.jsx)(m.a,{size:14})}),Object(y.jsx)(N.b,{color:"twitter",children:Object(y.jsx)(h.a,{size:14})}),Object(y.jsx)(N.b,{color:"google",children:Object(y.jsx)(x.a,{size:14})}),Object(y.jsx)(N.b,{className:"me-0",color:"github",children:Object(y.jsx)(O.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=14.0a1a58cd.chunk.js.map