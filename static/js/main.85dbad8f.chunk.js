(this.webpackJsonpshigatsuel__nwitter=this.webpackJsonpshigatsuel__nwitter||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(33),s=n.n(c),i=n(7),o=n.n(i),u=n(12),l=n(9),j=n(24),d=n(6),b=n(21),p=n(35),f=n(13),h=n(1),m=function(e){var t=e.user;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(h.jsx)("li",{children:Object(h.jsx)(j.b,{to:"/",style:{marginRight:10},children:Object(h.jsx)(f.a,{icon:b.c,color:"#04AAFF",size:"2x"})})}),Object(h.jsx)("li",{children:Object(h.jsxs)(j.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(h.jsx)(f.a,{icon:p.a,color:"#04AAFF",size:"2x"}),Object(h.jsx)("span",{style:{marginTop:10},children:(null===t||void 0===t?void 0:t.displayName)?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},x=n(23);n(53),n(59),n(60);x.a.initializeApp({apiKey:"AIzaSyD4Eq7OdSZRbmiMqXKcldiAUB9cMF1d0Ag",authDomain:"nwitter-6d3f5.firebaseapp.com",projectId:"nwitter-6d3f5",storageBucket:"nwitter-6d3f5.appspot.com",messagingSenderId:"702146766363",appId:"1:702146766363:web:aa8050311b7d7bd094babe"});var O=x.a,v=x.a.auth(),g=x.a.firestore(),w=x.a.storage(),y=function(e){var t=e.isCreateAccount,n=e.setIsCreateAccount,c=e.error,s=e.setError,i=Object(a.useState)(""),j=Object(l.a)(i,2),d=j[0],b=j[1],p=Object(a.useState)(""),f=Object(l.a)(p,2),m=f[0],x=f[1],O=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?b(a):"password"===n&&x(a)},g=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!t){e.next=7;break}return e.next=5,v.createUserWithEmailAndPassword(d,m);case 5:e.next=9;break;case 7:return e.next=9,v.signInWithEmailAndPassword(d,m);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),s(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:g,className:"container",children:[Object(h.jsx)("input",{type:"email",name:"email",value:d,placeholder:"Email",required:!0,onChange:O,className:"authInput"}),Object(h.jsx)("input",{type:"password",name:"password",value:m,placeholder:"Password",required:!0,onChange:O,className:"authInput"}),Object(h.jsx)("input",{type:"submit",value:t?"Create Account":"Log In",className:"authInput authSubmit"})]}),Object(h.jsx)("span",{className:"authError",children:c}),Object(h.jsx)("span",{onClick:function(){n((function(e){return!e}))},className:"authSwitch",children:t?"Sign In":"Create Account"})]})},N=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],j=s[1],d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"google"===(n=t.target).name?a=new O.auth.GoogleAuthProvider:"github"===n.name&&(a=new O.auth.GithubAuthProvider),e.next=5,v.signInWithPopup(a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"authContainer",children:[Object(h.jsx)(f.a,{icon:b.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(h.jsx)(y,{isCreateAccount:n,setIsCreateAccount:r,error:i,setError:j}),Object(h.jsxs)("div",{className:"authBtns",children:[Object(h.jsxs)("button",{name:"google",onClick:d,className:"authBtn",children:["Continue with Google ",Object(h.jsx)(f.a,{icon:b.b})]}),Object(h.jsxs)("button",{name:"github",onClick:d,className:"authBtn",children:["Continue with Github ",Object(h.jsx)(f.a,{icon:b.a})]})]})]})},k=n(37),I=n(22),C=function(e){var t=e.nweet,n=e.user,c=Object(a.useState)(!1),s=Object(l.a)(c,2),i=s[0],j=s[1],d=Object(a.useState)(t.text),b=Object(l.a)(d,2),p=b[0],m=b[1],x=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure want to delete this nweet?")){e.next=7;break}return e.next=4,g.doc("nweets/".concat(t.id)).delete();case 4:if(!t.fileUrl){e.next=7;break}return e.next=7,w.refFromURL(t.fileUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){j((function(e){return!e}))},v=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),g.doc("/nweets/".concat(t.id)).update({text:p}),j(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"nweet",children:i?Object(h.jsx)(r.a.Fragment,{children:(null===n||void 0===n?void 0:n.uid)===t.creatorId&&Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(h.jsx)("input",{type:"text",value:p,placeholder:"Edit your Nweet",required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;m(t)},className:"formInput"}),Object(h.jsx)("button",{className:"formBtn",children:"Update"})]}),Object(h.jsx)("button",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("h4",{children:t.text}),(null===n||void 0===n?void 0:n.uid)===t.creatorId&&Object(h.jsxs)("div",{className:"nweet__actions",children:[Object(h.jsx)("span",{onClick:O,children:Object(h.jsx)(f.a,{icon:I.a})}),Object(h.jsx)("span",{onClick:x,children:Object(h.jsx)(f.a,{icon:I.d})})]}),t.fileUrl&&Object(h.jsx)("img",{src:t.fileUrl,alt:t.id})]})})},S=n(36),A=function(e){var t=e.user,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),j=Object(l.a)(i,2),d=j[0],b=j[1],p=Object(a.useRef)(null),m=function(){var e=Object(u.a)(o.a.mark((function e(n){var a,r,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==c){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===d){e.next=12;break}return r=w.ref().child("".concat(null===t||void 0===t?void 0:t.uid,"/").concat(Object(S.v4)())),e.next=8,r.putString(d,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:c,createdAt:Date.now(),creatorId:null===t||void 0===t?void 0:t.uid,fileUrl:a},e.next=15,g.collection("nweets").add(u);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:m,className:"factoryForm",children:[Object(h.jsxs)("div",{className:"factoryInput__container",children:[Object(h.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(h.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(h.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(h.jsx)("span",{children:"Add photos"}),Object(h.jsx)(f.a,{icon:I.b})]}),Object(h.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t,n=e.target.files;t=n?n[0]:null;var a=new FileReader;a.onloadend=function(){b(a.result)},t?a.readAsDataURL(t):b("")},style:{opacity:0}}),d&&Object(h.jsxs)("div",{className:"factoryForm__attachment",children:[Object(h.jsx)("img",{src:d,style:{backgroundImage:d},alt:"file-img"}),Object(h.jsxs)("div",{className:"factoryForm__clear",onClick:function(){b(""),p.current&&(p.current.value="")},children:[Object(h.jsx)("span",{children:"Remove"}),Object(h.jsx)(f.a,{icon:I.c})]})]})]})},F=function(e){var t=e.user,n=Object(a.useState)([]),r=Object(l.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){g.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(k.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(A,{user:t}),Object(h.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(h.jsx)(C,{nweet:e,user:t},e.id)}))})]})},U=function(e){var t=e.user,n=e.refreshUser,r=Object(a.useState)(null===t||void 0===t?void 0:t.displayName),c=Object(l.a)(r,2),s=c[0],i=c[1],j=function(){var e=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!t||t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("form",{onSubmit:j,className:"profileForm",children:[Object(h.jsx)("input",{type:"text",placeholder:"Display Name",value:s,autoFocus:!0,onChange:function(e){var t=e.target.value;i(t)},className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update",className:"formBtn",style:{marginTop:10}})]}),Object(h.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){return v.signOut()},children:"Log Out"})]})},_=function(e){var t=e.isLoggedIn,n=e.user,a=e.refreshUser;return Object(h.jsxs)(j.a,{basename:"/nwitter",children:[t&&Object(h.jsx)(m,{user:n}),Object(h.jsxs)(d.d,{children:[t?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)(F,{user:n})}),Object(h.jsx)(d.b,{exact:!0,path:"/profile",children:Object(h.jsx)(U,{user:n,refreshUser:a})})]})}):Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)(N,{})}),Object(h.jsx)(d.a,{from:"*",to:"/"})]})]})};n(57);var B=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(l.a)(c,2),i=s[0],j=s[1],d=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===i||void 0===i||i.reloadUser();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v.onAuthStateChanged((function(e){e?(e.reloadUser=function(){j(null),j((function(){return v.currentUser}))},j(e)):j(null),r(!0)}))}),[]),Object(h.jsx)("div",{className:"App",children:n?Object(h.jsx)(_,{isLoggedIn:Boolean(i),user:i,refreshUser:d}):"Initailizing..."})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.85dbad8f.chunk.js.map