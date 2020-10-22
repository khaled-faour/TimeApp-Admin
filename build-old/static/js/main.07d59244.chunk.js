(this["webpackJsonptimeapp-admin"]=this["webpackJsonptimeapp-admin"]||[]).push([[1],{331:function(e,a,t){e.exports=t(528)},336:function(e,a,t){},528:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(336),t(20)),i=t(39),s=t(41),u=t(6),m=t(609),d=t(583),p=t(576),E=t(608),b=t(22),f=t(577),g=t(605),h=t(134),y=t.n(h),v=t(77),j=t(529),O=t(574),x=t(530),C=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function k(){var e=C(),a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],l=t[1],h=Object(n.useState)({fullname:"",email:"",password:"",error:""}),j=Object(u.a)(h,2),k=j[0],w=j[1],S=function(e){var a;w(Object(s.a)(Object(s.a)({},k),{},(a={},Object(i.a)(a,e.target.name,e.target.value),Object(i.a)(a,"error",""),a)))},N=Object(o.j)();return c?r.a.createElement(x.a,null):r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(m.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(!0),N.auth().createUserWithEmailAndPassword(k.email,k.password).then((function(e){e.user.updateProfile({displayName:k.fullname}),l(!1),N.auth().signOut()})).catch((function(e){w(Object(s.a)(Object(s.a)({},k),{},{error:e.message}))}))},className:e.form},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{autoComplete:"fullname",name:"fullname",variant:"outlined",required:!0,fullWidth:!0,id:"fullname",label:"Full Name",autoFocus:!0,onChange:S})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:S})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:S}))),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(b.b,{to:"/",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(g.a,{mt:5}))}var w=t(23),S=t(610),N=Object(j.a)((function(e){return Object(S.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},button:{margin:e.spacing(2)},placeholder:{height:40}})}));function I(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.placeholder},r.a.createElement(x.a,null)))}var T=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function A(){var e=T(),a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],l=t[1],h=Object(n.useState)({email:"",password:"",error:""}),j=Object(u.a)(h,2),x=j[0],C=j[1],k=function(e){var a;C(Object(s.a)(Object(s.a)({},x),{},(a={},Object(i.a)(a,e.target.name,e.target.value),Object(i.a)(a,"error",""),a)))},w=Object(o.j)();return c?r.a.createElement(I,null):r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(m.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(!0),w.auth().signInWithEmailAndPassword(x.email,x.password).then(l(!1)).catch((function(e){C(Object(s.a)(Object(s.a)({},x),{},{error:e.message}))}))},className:e.form},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:k}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:k}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(b.b,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(f.a,{item:!0},r.a.createElement(b.b,{to:"/Signup",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(g.a,{mt:8}))}var W=t(4),D=t(611),F=t(604),B=t(594),q=t(582),L=t(602),P=t(183),U=t(531),M=t(273),z=t(268),G=t.n(z),H=t(270),K=t.n(H),J=t(269),R=t.n(J),V=t(14),Y=t.n(V),$=t(21),X=t(584),Q=t(585),Z=t(586),_=t(246),ee=t.n(_),ae=t(247),te=t.n(ae),ne=t(253),re=t.n(ne),ce=t(248),le=t.n(ce),oe=t(249),ie=t.n(oe),se=t(137),ue=t.n(se),me=t(587),de=t(251),pe=t.n(de),Ee=t(252),be=t.n(Ee),fe=t(45),ge=t.n(fe),he=t(250),ye=t.n(he),ve=(t(113),t(199),function(){var e=Object(o.j)(),a=Object(n.useState)([]),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1],p=function(){var a=Object($.a)(Y.a.mark((function a(){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.functions().httpsCallable("getAllCategories")().then(function(){var e=Object($.a)(Y.a.mark((function e(a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.data),e.next=3,l(a.data);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),console.log(a.t0);case 8:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),r.a.createElement("div",null,r.a.createElement(X.a,{button:!0,component:b.b,to:"/dashboard"},r.a.createElement(Q.a,null,r.a.createElement(ee.a,null)),r.a.createElement(Z.a,{primary:"Dashboard"})),r.a.createElement(X.a,{button:!0,component:b.b,to:"/dashboard/users"},r.a.createElement(Q.a,null,r.a.createElement(te.a,null)),r.a.createElement(Z.a,{primary:"Users"})),r.a.createElement(X.a,{button:!0,onClick:function(){d(!m)}},r.a.createElement(Q.a,null,r.a.createElement(le.a,null)),r.a.createElement(Z.a,{primary:"Categories"}),m?r.a.createElement(ie.a,null):r.a.createElement(ue.a,null)),r.a.createElement(me.a,{in:m,timeout:"auto",unmountOnExit:!0},r.a.createElement(q.a,{component:"div",disablePadding:!0},r.a.createElement(X.a,{button:!0,style:{paddingLeft:32},component:b.b,to:"/dashboard/Category/Add"},r.a.createElement(Q.a,null,r.a.createElement(ge.a,null)),r.a.createElement(Z.a,{primary:"Add Categroy"})),r.a.createElement(X.a,{button:!0,style:{paddingLeft:32},component:b.b,to:"/dashboard/Categories"},r.a.createElement(Q.a,null,r.a.createElement(ye.a,null)),r.a.createElement(Z.a,{primary:"View All Categories"})),c.map((function(e){return r.a.createElement(X.a,{button:!0,key:e.id,style:{paddingLeft:32},component:b.b,to:"/dashboard/Category/".concat(e.name,"/").concat(e.id)},r.a.createElement(Q.a,null,r.a.createElement(pe.a,null)),r.a.createElement(Z.a,{primary:e.name}),r.a.createElement(be.a,null))})))),r.a.createElement(X.a,{button:!0,component:b.b,to:"/dashboard/tasks"},r.a.createElement(Q.a,null,r.a.createElement(re.a,null)),r.a.createElement(Z.a,{primary:"Tasks"})))}),je=(t(349),t(254)),Oe=t.n(je),xe=function(){var e=Object(o.j)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{button:!0,onClick:function(){e.auth().signOut()}},r.a.createElement(Q.a,null,r.a.createElement(Oe.a,null)),r.a.createElement(Z.a,{primary:"Logout"})))},Ce=t(593),ke=t(588),we=t(592),Se=t(591),Ne=t(589),Ie=t(590),Te=Object(j.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),Ae=function(e){var a=e.numberOfUsers,t=void 0===a?null:a,c=Te(),l=Object(w.h)(),i=Object(n.useState)([]),s=Object(u.a)(i,2),m=s[0],d=s[1],p=Object(o.j)();return Object(n.useEffect)((function(){var e=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.functions().httpsCallable("getAllUsers")().then(function(){var e=Object($.a)(Y.a.mark((function e(a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a.data);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.functions().httpsCallable("getAllCategories")().then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e(),a()}),[p]),r.a.createElement(r.a.Fragment,null,null===t?r.a.createElement("h3",null,"All Users"):r.a.createElement("h3",null,"Last ",t," Users"),r.a.createElement(ke.a,{size:"small"},r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Se.a,null,"Name"),r.a.createElement(Se.a,null,"Email"),r.a.createElement(Se.a,null,"Last Sign In"),r.a.createElement(Se.a,null,"Created"))),r.a.createElement(we.a,null,0===m.length?r.a.createElement(Ie.a,null,r.a.createElement(Se.a,{key:"CircularProgress"},r.a.createElement("p",null,"Loading users list..."))):m.slice(Math.max(m.length-(null==t?m.length:t),0)).map((function(e){return r.a.createElement(Ie.a,{key:e.uid},r.a.createElement(Se.a,null,e.displayName),r.a.createElement(Se.a,null,e.email),r.a.createElement(Se.a,null,e.metadata.lastSignInTime),r.a.createElement(Se.a,null,e.metadata.creationTime))})))),r.a.createElement("div",{className:c.seeMore},"/dashboard/users"===l.pathname?null:r.a.createElement(Ce.a,{color:"primary",component:b.b,to:"/dashboard/users"},"More...")))},We=t(595),De=t(599),Fe=t(597),Be=t(598),qe=t(596),Le=t(255),Pe=t(613),Ue=Object(j.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),Me=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(o.j)(),E=Ue(),b=Object(n.useState)([]),f=Object(u.a)(b,2),g=f[0],h=f[1],y=Object(w.g)(),v=Object(n.useState)(!1),j=Object(u.a)(v,2),O=j[0],C=j[1],k=Object(n.useState)(!1),S=Object(u.a)(k,2),N=S[0],I=S[1],T=function(){C(!O)},A=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{I(!0),s.map(function(){var e=Object($.a)(Y.a.mark((function e(a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.functions().httpsCallable("deleteCategory")({categoryId:a.id}).then((function(){return console.log("Category Deleted")})).catch((function(e){console.log(e)}));case 2:C(!1),W();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),W()}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,p.functions().httpsCallable("getAllCategories")().then(function(){var e=Object($.a)(Y.a.mark((function e(a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.data),e.next=3,h(a.data);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:c(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){W()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",paddingLeft:10}},r.a.createElement("h3",{style:{flexGrow:1}},"Categories"),0!==s.length?r.a.createElement(P.a,{onClick:T},r.a.createElement(Pe.a,null)):null,r.a.createElement(P.a,{onClick:function(){y.push("/dashboard/Category/Add")}},r.a.createElement(ge.a,null))),r.a.createElement("div",{style:{height:400,width:"100%"}},r.a.createElement(Le.a,{disableSelectionOnClick:!0,rows:g,columns:[{field:"id",headerName:"ID",width:200},{field:"name",headerName:"Category Name",width:200}],pageSize:5,checkboxSelection:!0,loading:t,onSelectionChange:function(e){m(e.rows)}})),r.a.createElement("div",{className:E.seeMore}),r.a.createElement(We.a,{open:O,onClose:T,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(qe.a,{id:"alert-dialog-title"},"Delete selected Categories?"),r.a.createElement(Fe.a,null,N?r.a.createElement(Be.a,{id:"alert-dialog-description"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(x.a,null),"Deleting category...")):r.a.createElement(Be.a,{id:"alert-dialog-description"},"You can't undo changes.")),r.a.createElement(De.a,null,r.a.createElement(d.a,{onClick:T,color:"primary"},"Cancel"),r.a.createElement(d.a,{onClick:A,color:"primary",autoFocus:!0},"Delete"))))},ze=t(614),Ge=t(600),He=t(601),Ke=t(603),Je=t(259),Re=t.n(Je),Ve=Object(j.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),Ye=function(){var e=Ve(),a=Object(o.j)(),t=Object(w.g)(),c=Object(n.useState)([]),l=Object(u.a)(c,2),i=l[0],s=(l[1],Object(n.useState)(!1)),m=Object(u.a)(s,2),p=m[0],E=m[1],b=Object(n.useState)(!1),f=Object(u.a)(b,2),g=f[0],h=f[1],y=Object(w.i)(),j=y.categoryName,O=y.categoryId,C=Object(n.useState)([]),k=Object(u.a)(C,2),S=k[0],N=k[1],I=Object(n.useState)(""),T=Object(u.a)(I,2),A=T[0],W=T[1],D=Object(n.useState)(""),F=Object(u.a)(D,2),B=F[0],q=F[1],U=function(){h(!g)},M=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,a.functions().httpsCallable("deleteTask")({categoryId:O,taskId:B}).then((function(){return console.log("Task Deleted")})).catch((function(e){console.log(e)}));case 4:h(!1),z(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.functions().httpsCallable("getAllTasks")({categoryId:O}).then((function(e){console.log(e.data),N(e.data)})).catch((function(e){console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){z()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h3",{style:{flexGrow:1}},j),0!==i.length?r.a.createElement(P.a,{onClick:U},r.a.createElement(Pe.a,null)):null,r.a.createElement(P.a,{onClick:function(){t.push("/dashboard/Category/".concat(j,"/").concat(O,"/Edit"))}},r.a.createElement(Re.a,null)),r.a.createElement(P.a,{onClick:function(){t.push("/dashboard/Category/".concat(j,"/").concat(O,"/Task/Add"))}},r.a.createElement(ge.a,null))),r.a.createElement("div",{style:{height:400,width:"100%"}},0===S.length?"No Tasks":S.map((function(a){return r.a.createElement(ze.a,{key:a.id},r.a.createElement(Ge.a,{expandIcon:r.a.createElement(ue.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},r.a.createElement(v.a,{className:e.heading},a.name)),r.a.createElement(He.a,null,r.a.createElement("div",null),r.a.createElement(v.a,{variant:"caption"},a.description)),r.a.createElement(L.a,null),r.a.createElement(Ke.a,null,r.a.createElement(d.a,{onClick:function(){W(a.name),q(a.id),U()},size:"small"},"Delete"),r.a.createElement(d.a,{onClick:function(){t.push("/dashboard/Category/".concat(j,"/").concat(O,"/Task/").concat(a.id,"/Edit"))},size:"small",color:"primary"},"Edit")))}))),r.a.createElement("div",{className:e.seeMore}),r.a.createElement(We.a,{open:g,onClose:U,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(qe.a,{id:"alert-dialog-title"},"Delete task ".concat(A,"?")),r.a.createElement(Fe.a,null,p?r.a.createElement(Be.a,{id:"alert-dialog-description"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(x.a,null),"Deleting...")):r.a.createElement(Be.a,{id:"alert-dialog-description"},"You can't undo changes.")),r.a.createElement(De.a,null,r.a.createElement(d.a,{onClick:U,color:"primary"},"Cancel"),r.a.createElement(d.a,{onClick:M,color:"primary",autoFocus:!0},"Delete"))))},$e=t(26),Xe=t(76),Qe=function(e,a){return{time:e,amount:a}},Ze=[Qe("00:00",0),Qe("03:00",300),Qe("06:00",600),Qe("09:00",800),Qe("12:00",1500),Qe("15:00",2e3),Qe("18:00",2400),Qe("21:00",2400),Qe("24:00",void 0)],_e=function(){var e=Object($e.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Today"),r.a.createElement(Xe.d,null,r.a.createElement(Xe.c,{data:Ze,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(Xe.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(Xe.f,{stroke:e.palette.text.secondary},r.a.createElement(Xe.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(Xe.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))},ea=t(607),aa=function(){var e=Object(w.g)(),a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],p=s[1],b=Object(o.j)(),f=function(){var a=Object($.a)(Y.a.mark((function a(){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,""!==c){a.next=4;break}return p("emptyName"),a.abrupt("return","");case 4:return a.next=6,b.functions().httpsCallable("addCategory")({name:c}).then((function(){console.log("Added"),e.push("/dashboard/Categories")})).catch((function(e){return p("error"),console.log(e)}));case 6:a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error adding Category: ".concat(a.t0)),console.log(c);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(c)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add Category"),"success"===m?r.a.createElement(ea.a,{severity:"success"},"Category Added Successfully!"):"emptyName"===m?r.a.createElement(ea.a,{severity:"error"},"Category name cannot be empty!"):"error"===m?r.a.createElement(ea.a,{severity:"error"},"Error!"):null,r.a.createElement(E.a,{id:"outlined-basic",label:"Category name",variant:"outlined",fullWidth:!0,onChange:function(e){l(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(d.a,{type:"submit",onClick:f,fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(ge.a,null)},"Add Category"))},ta=t(142),na=t.n(ta),ra=function(){var e=Object(w.g)(),a=Object(w.i)(),t=a.categoryName,c=a.categoryId,l=Object(n.useState)(t),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(""),b=Object(u.a)(p,2),f=b[0],h=b[1],y=Object(o.j)(),v=function(){var a=Object($.a)(Y.a.mark((function a(){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,""!==s){a.next=4;break}return h("emptyName"),a.abrupt("return","");case 4:return a.next=6,y.functions().httpsCallable("editCategory")({name:s,categoryId:c}).then((function(){console.log("Edited"),e.push("/dashboard/Categories")})).catch((function(e){return h("error"),console.log(e)}));case 6:a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error editing Category: ".concat(a.t0)),console.log(s);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(s)}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Edit Category"),"success"===f?r.a.createElement(ea.a,{severity:"success"},"Changes Saved Successfully!"):"emptyName"===f?r.a.createElement(ea.a,{severity:"error"},"Category name cannot be empty!"):"error"===f?r.a.createElement(ea.a,{severity:"error"},"Error!"):null,r.a.createElement(E.a,{id:"outlined-basic",label:"Category name",variant:"outlined",value:s,fullWidth:!0,onChange:function(e){m(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(d.a,{type:"submit",onClick:v,fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(na.a,null)},"Svae"))},ca=function(){var e=Object(w.g)(),a=Object(w.i)(),t=a.categoryName,c=a.categoryId,l=Object(n.useState)(""),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(""),b=Object(u.a)(p,2),f=b[0],h=b[1],y=Object(n.useState)(""),v=Object(u.a)(y,2),j=v[0],O=v[1],x=Object(o.j)(),C=function(){var a=Object($.a)(Y.a.mark((function a(){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,""!==s&&""!==f){a.next=4;break}return O("emptyField"),a.abrupt("return","");case 4:return a.next=6,x.functions().httpsCallable("addTask")({categoryId:c,name:s,description:f}).then((function(){console.log("Added"),e.push("/dashboard/Category/".concat(t,"/").concat(c))})).catch((function(e){return O("error"),console.log(e)}));case 6:a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error adding Category: ".concat(a.t0)),console.log(s);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log("Name: ",s),console.log("Description: ",f)}),[s,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add Task"),"success"===j?r.a.createElement(ea.a,{severity:"success"},"Task Added Successfully!"):"emptyField"===j?r.a.createElement(ea.a,{severity:"error"},"Task name/description cannot be empty!"):"error"===j?r.a.createElement(ea.a,{severity:"error"},"Error!"):null,r.a.createElement(E.a,{id:"outlined-basic",label:"Task name",variant:"outlined",fullWidth:!0,onChange:function(e){m(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(E.a,{id:"outlined-basic",label:"Description",variant:"outlined",fullWidth:!0,onChange:function(e){h(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(d.a,{type:"submit",onClick:C,fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(ge.a,null)},"Add Task"))},la=function(){var e=Object(w.g)(),a=Object(w.i)(),t=a.categoryName,c=a.categoryId,l=a.taskName,i=a.taskId,s=Object(n.useState)(""),m=Object(u.a)(s,2),p=m[0],b=m[1],f=Object(n.useState)(""),h=Object(u.a)(f,2),y=h[0],v=h[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),x=O[0],C=O[1],k=Object(o.j)(),S=function(){var a=Object($.a)(Y.a.mark((function a(){return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,""!==p&&""!==y){a.next=4;break}return C("emptyField"),a.abrupt("return","");case 4:return a.next=6,k.functions().httpsCallable("editTask")({name:p,description:y,categoryId:c,taskId:i}).then((function(){console.log("Edited"),e.push("/dashboard/Category/".concat(t,"/").concat(c))})).catch((function(e){return C("error"),console.log(e)}));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error editing Category: ".concat(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}(),N=function(){var e=Object($.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.functions().httpsCallable("getTask")({categoryId:c,taskId:i}).then((function(e){b(e.data.name),v(e.data.description),console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),C("error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Edit Task ",l),"success"===x?r.a.createElement(ea.a,{severity:"success"},"Changes Saved Successfully!"):"emptyField"===x?r.a.createElement(ea.a,{severity:"error"},"Category name/description cannot be empty!"):"error"===x?r.a.createElement(ea.a,{severity:"error"},"Error!"):null,r.a.createElement(E.a,{id:"outlined-basic",label:"Task name",variant:"outlined",value:p,fullWidth:!0,onChange:function(e){b(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(E.a,{id:"outlined-basic",label:"Task description",variant:"outlined",value:y,fullWidth:!0,onChange:function(e){v(e.target.value)},required:!0}),r.a.createElement(g.a,{pt:4}),r.a.createElement(d.a,{type:"submit",onClick:S,fullWidth:!0,variant:"contained",color:"primary",startIcon:r.a.createElement(na.a,null)},"Svae"))},oa=Object(j.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(i.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),ia=function(){var e=oa(),a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],l=t[1],o=function(){l(!c)};return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(F.a,{position:"absolute",className:Object(W.a)(e.appBar,c&&e.appBarShift)},r.a.createElement(B.a,{className:e.toolbar},r.a.createElement(P.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:o,className:Object(W.a)(e.menuButton,c&&e.menuButtonHidden)},r.a.createElement(G.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"TimeApp Admin Dashboard"),r.a.createElement(P.a,{color:"inherit"},r.a.createElement(U.a,{badgeContent:4,color:"secondary"},r.a.createElement(R.a,null))))),r.a.createElement(D.a,{variant:"permanent",classes:{paper:Object(W.a)(e.drawerPaper,!c&&e.drawerPaperClose)},open:c},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(P.a,{onClick:o},r.a.createElement(K.a,null))),r.a.createElement(L.a,null),r.a.createElement(q.a,null,r.a.createElement(ve,null)),r.a.createElement(L.a,null),r.a.createElement(q.a,null,r.a.createElement(xe,null))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(O.a,{maxWidth:"lg",className:e.container},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/dashboard"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(Ae,{numberOfUsers:2})))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/users"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(Ae,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/categories"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(Me,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/Category/:categoryName/:categoryId"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(Ye,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/Category/Add"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(aa,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/Category/:categoryName/:categoryId/Edit"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(ra,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/Category/:categoryName/:categoryId/Task/Add"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(ca,null)))),r.a.createElement(w.b,{exact:!0,path:"/dashboard/Category/:categoryName/:categoryId/Task/:taskId/Edit"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(la,null)))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(M.a,{className:e.paper},r.a.createElement(_e,null))),r.a.createElement(g.a,{pt:4}))))};var sa=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.c,{fallback:r.a.createElement(I,null)},r.a.createElement(b.a,null,r.a.createElement(w.b,{exact:!0,path:"/"},r.a.createElement(o.a,{fallback:r.a.createElement(A,null)},r.a.createElement(w.a,{to:"/dashboard"}))),r.a.createElement(w.b,{exact:!0,path:"/signup"},r.a.createElement(o.a,{fallback:r.a.createElement(k,null)},r.a.createElement(w.a,{to:"/dashboard"}))),r.a.createElement(w.b,{path:"/dashboard/:page?"},r.a.createElement(o.a,{fallback:r.a.createElement(A,null)},r.a.createElement(ia,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ua={apiKey:"AIzaSyCUnFS8G8h95ttHStW-eKv3VnDrLfsGJao",authDomain:"timetracker-cf86b.firebaseapp.com",databaseURL:"https://timetracker-cf86b.firebaseio.com",projectId:"timetracker-cf86b",storageBucket:"timetracker-cf86b.appspot.com",messagingSenderId:"599822167555",appId:"1:599822167555:web:b60a4cc46b24c0e3096836"};l.a.render(r.a.createElement(o.b,{firebaseConfig:ua},r.a.createElement(r.a.StrictMode,null,r.a.createElement(sa,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[331,2,3]]]);
//# sourceMappingURL=main.07d59244.chunk.js.map