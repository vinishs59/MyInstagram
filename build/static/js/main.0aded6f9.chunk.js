(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{45:function(e,t,a){},60:function(e,t,a){e.exports=a(87)},65:function(e,t,a){},66:function(e,t,a){},82:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(65),a(8)),s=(a(66),a(45),a(115)),i=a(27),u=a.n(i),m=u.a.initializeApp({apiKey:"AIzaSyBc5Ma7qqwtTAGjGPCUSW3thjKVYkH2NK4",authDomain:"instagram-dd93b.firebaseapp.com",databaseURL:"https://instagram-dd93b.firebaseio.com",projectId:"instagram-dd93b",storageBucket:"instagram-dd93b.appspot.com",messagingSenderId:"578914881154",appId:"1:578914881154:web:d4cb0301049aaa323fae9b",measurementId:"G-EK4M9FSKM0"}).firestore(),p=u.a.auth(),d=u.a.storage(),f=a(110),g=a(54),E=a.n(g),b=function(e){var t=e.postid,a=e.user,r=e.username,c=e.caption,i=e.image_url,p=e.likes,d=(e.setSelectedPost,e.selectedPost,Object(n.useState)([])),g=Object(o.a)(d,2),b=g[0],v=g[1],h=Object(n.useState)(""),y=Object(o.a)(h,2),j=y[0],_=y[1],O=Object(n.useState)(!1),k=Object(o.a)(O,2),N=k[0],C=k[1];Object(n.useEffect)((function(){var e;if(t&&(e=m.collection("post").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){v(e.docs.map((function(e){return e.data()})))}))),t)return function(){e()}}),[t]);return l.a.createElement("div",{className:"post",initial:{opacity:0},animate:{opacity:1}},l.a.createElement("div",{className:"post__header"},l.a.createElement(s.a,{className:"post_avatar",alt:r,src:""}),l.a.createElement("h3",null,r)),l.a.createElement("img",{className:"post__image",src:i,alt:""}),c&&l.a.createElement("h4",{className:"post__text"}," ",l.a.createElement("strong",null,r)," ",c),l.a.createElement("div",{className:"post__like"},l.a.createElement(f.a,{"aria-label":"like",type:"submit",onClick:function(e){e.preventDefault(),t&&(N?(m.collection("post").doc(t).update({likes:p-1}),C(!1)):(m.collection("post").doc(t).update({likes:p+1}),C(!0)))}},l.a.createElement(E.a,null),p),"}"),l.a.createElement("form",null,l.a.createElement("div",{className:"post__comments"},l.a.createElement("p",null,"comments ..."),b.map((function(e){return l.a.createElement("p",null,l.a.createElement("strong",null,e.username," ")," ",e.text)})))),l.a.createElement("form",{className:"post__commentbox"},l.a.createElement("input",{className:"post__input",type:"text",placeholder:"add comments",value:j,onChange:function(e){return _(e.target.value)}}),l.a.createElement("button",{disabled:!j,className:"post__button",type:"submit",onClick:function(e){e.preventDefault(),m.collection("post").doc(t).collection("comments").add({text:j,username:a.displayName,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),_("")}},"Post")),((null===a||void 0===a?void 0:a.displayName)?a.displayName===r:null)&&l.a.createElement("button",{className:"post__button",type:"submit",onClick:function(e){e.preventDefault(),t&&m.collection("post").doc(t).delete()}},"Delete"))},v=(a(82),a(24));var h=function(e){var t=e.username,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(null),f=Object(o.a)(i,2),g=f[0],E=f[1],b=Object(n.useState)(0),h=Object(o.a)(b,2),y=h[0],j=h[1];return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"imageUpload"},g&&l.a.createElement(v.a.div,{className:"imageUpload__progress",initial:{width:0},animate:{width:y+"%"}}),g&&l.a.createElement("input",{type:"text",placeholder:"Enter the caption",onChange:function(e){return s(e.target.value)},value:c}),!g&&l.a.createElement("label",null,l.a.createElement("input",{type:"file",style:{display:"none"},onChange:function(e){e.target.files[0]?E(e.target.files[0]):E(null)}}),l.a.createElement("span",null,"+")))),l.a.createElement("center",null,g&&l.a.createElement("div",null,g.name),g&&l.a.createElement("button",{onClick:function(){d.ref("images/"+g.name).put(g).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);j(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(g.name).getDownloadURL().then((function(e){var a=p.currentUser;m.collection("post").add({uid:a.uid,timestamp:u.a.firestore.FieldValue.serverTimestamp(),caption:c,imageUrl:e,username:t,likes:0}),j(0),s(""),E(null)}))}))}},"Upload")))},y=a(111),j=a(113),_=a(114),O=a(112),k=a(39),N=a(42),C=a.n(N),S=function(e){e.postid;var t=e.setSelectedPost,a=e.image_url;e.selectedPost;return l.a.createElement("div",null,l.a.createElement(v.a.div,{className:"backdrop",onClick:function(e){e.preventDefault(),console.log("reached here"),e.target.classList.contains("backdrop")&&(t(null),null)},initial:{opacity:0},animate:{opacity:1}},l.a.createElement(v.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))};function w(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var x=Object(y.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var P=function(){var e=x(),t=Object(n.useState)(w),a=Object(o.a)(t,1)[0],r=Object(n.useState)(!1),c=Object(o.a)(r,2),s=c[0],i=c[1],u=Object(n.useState)([]),d=Object(o.a)(u,2),f=d[0],g=d[1],E=Object(n.useState)([]),y=Object(o.a)(E,2),N=y[0],P=y[1],U=Object(n.useState)(""),D=Object(o.a)(U,2),B=D[0],I=D[1],A=Object(n.useState)(""),L=Object(o.a)(A,2),M=L[0],W=L[1],K=Object(n.useState)(""),F=Object(o.a)(K,2),T=F[0],G=F[1],H=Object(n.useState)(null),R=Object(o.a)(H,2),V=R[0],q=R[1],z=Object(n.useState)(""),J=Object(o.a)(z,2),Y=J[0],Z=J[1],Q=Object(n.useState)(null),X=Object(o.a)(Q,2),$=X[0],ee=X[1],te=Object(n.useState)(""),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){q(e||null)}));return function(){e()}}),[V,B]),Object(n.useEffect)((function(){console.log(p.currentUser),m.collection("post").orderBy("timestamp","desc").onSnapshot((function(e){g(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),l.a.createElement(k.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(j.a,{open:ne,onClose:function(){return le(!1)}},l.a.createElement("div",{style:a,className:e.paper},l.a.createElement("form",{className:"app__signup"},l.a.createElement(_.a,{type:"text",placeholder:"email",value:T,onChange:function(e){return G(e.target.value)}}),l.a.createElement(O.a,{type:"submit",onClick:function(e){e.preventDefault(),p.sendPasswordResetEmail(T).catch((function(e){return alert(e.message)})),le(!1)}},"reset")))),l.a.createElement(j.a,{open:Y,onClose:function(){return Z(!1)}},l.a.createElement("div",{style:a,className:e.paper},l.a.createElement("form",{className:"app__signup"},l.a.createElement(_.a,{type:"text",placeholder:"email",value:T,onChange:function(e){return G(e.target.value)}}),l.a.createElement(_.a,{type:"password",placeholder:"password",value:M,onChange:function(e){return W(e.target.value)}}),l.a.createElement(O.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(T,M).catch((function(e){return alert(e.message)})),Z(!1)}},"Sign in "),l.a.createElement(O.a,{onClick:function(){return le(!0)}},"Forgot password")))),l.a.createElement(j.a,{open:s,onClose:function(){return i(!1)}},l.a.createElement("div",{style:a,className:e.paper},l.a.createElement("form",{className:"app__signup"},l.a.createElement(_.a,{type:"text",placeholder:"username",value:B,onChange:function(e){return I(e.target.value)}}),l.a.createElement(_.a,{type:"text",placeholder:"email",value:T,onChange:function(e){return G(e.target.value)}}),l.a.createElement(_.a,{type:"password",placeholder:"password",value:M,onChange:function(e){return W(e.target.value)}}),l.a.createElement(O.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(T,M).then((function(e){return console.log(B),e.user.updateProfile({displayName:B})})).catch((function(e){return alert(e.message)})),i(!1)}},"Sign up ")))),l.a.createElement("div",{className:"app__testing"},l.a.createElement(k.b,{to:"/"}," Home"),l.a.createElement("img",{className:"app__headerimage",src:"https://static.dribbble.com/users/2246631/screenshots/6586825/photo_2.jpg",alt:""}),V?l.a.createElement("div",{className:"app__loginContainer"},l.a.createElement(O.a,{onClick:function(){return p.signOut()}},"Logout"),l.a.createElement(k.b,{to:"/myPhotos",onClick:function(){var e=p.currentUser;e&&console.log("current user is "+e.uid),m.collection("post").where("uid","==",e.uid).orderBy("timestamp","desc").onSnapshot((function(e){P(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}}," MyPhotos")):l.a.createElement("div",{className:"app__loginContainer"},l.a.createElement(O.a,{onClick:function(){return Z(!0)}},"Log in"),l.a.createElement(O.a,{onClick:function(){return i(!0)}},"Sign up"))),(null===V||void 0===V?void 0:V.displayName)?l.a.createElement(h,{username:V.displayName}):l.a.createElement("h3",null,"Please login to upload"),l.a.createElement("center",null,l.a.createElement("h1",null,"Welcome to my instagram pics")),l.a.createElement(C.a,{path:"/",exact:!0,strict:!0,render:function(){return l.a.createElement("div",{className:"app__post"},l.a.createElement("center",null,f.map((function(e){var t=e.id,a=e.post;return l.a.createElement(b,{key:t,postid:t,user:V,username:a.username,caption:a.caption,image_url:a.imageUrl,likes:a.likes})}))))}}),l.a.createElement(C.a,{path:"/myPhotos",exact:!0,strict:!0,render:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"img-grid"},N&&N.map((function(e){var t=e.id,a=e.post;return l.a.createElement(v.a.div,{className:"img-wrap",key:t,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return ee(a)}},l.a.createElement(v.a.img,{src:a.imageUrl,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))}))),$&&l.a.createElement(S,{className:"post",key:$.id,postid:$.id,image_url:$.imageUrl,setSelectedPost:ee,selectedPost:$}))}})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0aded6f9.chunk.js.map