(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{111:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),i=n.n(r),o=(n(86),n(11)),c=n(12),s=n(14),u=n(13),m=n(15),d=n(69),p=n(46),h=n(151),g=n(153),f=n(38),b=n(166),E=n(148),y=n(17),v=n(62),k=n.n(v),j=n(154),O=n(155),x=Object(E.a)((function(e){return{root:{flexGrow:1},color:{background:e.palette.grey[800]},menuButton:{marginRight:e.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function w(){var e=x(),t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],i=n[1];Object(a.useEffect)((function(){""!=r?o():window.x=[]}),[r]);var o=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchWord:r})};fetch("https://onedolah.herokuapp.com/findblogposts",e).then((function(e){return e.json()})).then((function(e){return window.x=e}))};return l.a.createElement("div",{className:e.root},l.a.createElement(h.a,{position:"fixed",className:e.color},l.a.createElement(g.a,null,l.a.createElement(f.a,{className:e.title,variant:"h6",noWrap:!0},l.a.createElement(j.a,{style:{display:"table-cell",color:"inherit",textDecoration:"none"},href:"https://onedolah.herokuapp.com/"},"OneDolah")),l.a.createElement(O.a,{color:"inherit",onClick:function(){sessionStorage.setItem("login","false"),window.location.reload()}},"Logout"),l.a.createElement(O.a,{color:"inherit",href:"/login"},"Login"),l.a.createElement("div",{className:e.search},l.a.createElement("div",{className:e.searchIcon},l.a.createElement(k.a,null)),l.a.createElement(b.a,{onChange:function(e){i(e.target.value)},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})))))}var I={paperContainer:{height:"80vh",backgroundRepeat:"no-repeat",marginTop:10,objectFit:"cover",overflow:"hidden",width:"100%"}},L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{style:I.paperContainer,src:n(91),alt:"cannot display"}))}}]),t}(l.a.Component),D=n(161),P=n(70),C=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchBlogDataFromBackend",value:function(e){fetch("https://onedolah.herokuapp.com/blogposts").then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){return console.log(e)}))}},{key:"fetchUserDataFromBackend",value:function(){fetch("https://onedolah.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"fetchTest",value:function(){fetch("https://onedolah.herokuapp.com/test").then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}}]),t}(l.a.Component),R=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"postBlogDataToBackend",value:function(e,t,n,a,l){var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,date:t,imageURL:n,description:a,content:l})};fetch("https://onedolah.herokuapp.com/blogposts",r).then((function(e){return e.json()}))}},{key:"deleteBlogDataFromBackend",value:function(e){var t="https://onedolah.herokuapp.com/blogposts/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()}))}},{key:"login",value:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};fetch("https://onedolah.herokuapp.com/login",n).then((function(e){return e.json()})).then((function(e){!0===e?sessionStorage.setItem("login","true"):sessionStorage.setItem("login","false")}))}}]),t}(l.a.Component),S=n(31),T=n(156),B=n(157),F=n(158),N=n(165),W=new R,U=new Date,A=U.getDate()+"/"+parseInt(U.getMonth()+1)+"/"+U.getFullYear(),M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){W.postBlogDataToBackend(this.titleInput.value,A,this.imageInput.value,this.descriptionInput.value,this.contentInput.value),e.preventDefault()}},{key:"insertImage",value:function(){document.getElementById("titleImage").src=this.imageInput}},{key:"dynamicUrl",value:function(){var e=this.imageInput,t=document.createElement("titleImage");t.src=e,document.body.appendChild(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{style:{maxWidth:1500,paddingTop:10,marginTop:40,marginLeft:35,marginRight:35}},l.a.createElement(T.a,null,l.a.createElement(N.a,{style:{marginLeft:35,paddingRight:80,marginTop:10},name:"title",fullWidth:!0,InputLabelProps:{shrink:!0},maxLength:"255",inputProps:{maxLength:255},label:"Title",type:"text",inputRef:function(t){return e.titleInput=t}}),l.a.createElement(N.a,{style:{marginLeft:35,paddingRight:80,marginTop:10},name:"Image URL",fullWidth:!0,InputLabelProps:{shrink:!0},multiline:!0,maxLength:"255",inputProps:{maxLength:255},label:"Image URL",type:"text",inputRef:function(t){return e.imageInput=t}}),l.a.createElement("img",{id:"titleImage",style:{height:"100%",display:"block",paddingTop:10,backgroundSize:"cover",backgroundPosition:"center",width:"100%"}}),l.a.createElement(B.a,{style:{textAlign:"center"}}),l.a.createElement(F.a,null,l.a.createElement(N.a,{style:{marginLeft:20,paddingRight:50},name:"description",fullWidth:!0,InputLabelProps:{shrink:!0},multiline:!0,label:"Description",maxLength:"255",inputProps:{maxLength:255},type:"text",inputRef:function(t){return e.descriptionInput=t}})),l.a.createElement(F.a,null,l.a.createElement(N.a,{style:{marginLeft:20,paddingRight:50},name:"content",label:"Content",fullWidth:!0,InputLabelProps:{shrink:!0},multiline:!0,type:"text",maxLength:"255",inputProps:{maxLength:255},inputRef:function(t){return e.contentInput=t}}),l.a.createElement("div",{style:{textAlign:"center",marginTop:30}},l.a.createElement(O.a,{type:"submit",value:"submit",variant:"contained"},"Submit"))))))}}]),t}(l.a.Component),J=n(159),G=n(63),z=n.n(G),V=n(160),H=n(64),Y=n.n(H),_=n(65),K=n.n(_),q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).index=0,n.likes=0,n.dislikes=0,n.state={blogPostData:null},n.expand={expanded:!1,setExpanded:!1},n.httpFetch=new C,n.httpPost=new R,n.loginData=sessionStorage.getItem("login"),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){void 0===window.x||0===window.x.length||null===window.x||"undefined"===typeof window.x||window.x===[]?e.httpFetch.fetchBlogDataFromBackend((function(t){e.index=t.length-1,e.setState({blogPostData:t})})):e.setState({blogPostData:window.x})}),3e3)}},{key:"deletePost",value:function(e){this.httpPost.deleteBlogDataFromBackend(e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"changeGreen",value:function(){document.getElementById("thumbUp").style.color="green"}},{key:"changeRed",value:function(){document.getElementById("thumbDown").style.color="red"}},{key:"isDisabled",value:function(){return"true"!==this.loginData}},{key:"render",value:function(){var e=this,t=this.state.blogPostData;return null===this.state.blogPostData||0===Object.keys(this.state.blogPostData).length||null===t||"undefined"===typeof t[this.props.arrayIndex]?null:l.a.createElement("div",{className:"root"},l.a.createElement(T.a,null,l.a.createElement(J.a,{className:"addIcon",disabled:this.isDisabled(),onClick:function(){return e.deletePost(t[e.props.arrayIndex].id)}},l.a.createElement(z.a,null)),l.a.createElement(B.a,{className:"cardHeader",title:t[this.props.arrayIndex].title,subheader:t[this.props.arrayIndex].date}),l.a.createElement("img",{id:"inputImage",className:"media",src:t[this.props.arrayIndex].imageURL}),l.a.createElement(F.a,null,l.a.createElement(f.a,{variant:"body1",color:"textSecondary"},t[this.props.arrayIndex].description)),l.a.createElement(V.a,{disableSpacing:!0},l.a.createElement(J.a,{id:"thumbUp",onClick:this.changeGreen},l.a.createElement(Y.a,null)),l.a.createElement(f.a,null,this.likes),l.a.createElement(J.a,{id:"thumbDown",onClick:this.changeRed},l.a.createElement(K.a,null)),l.a.createElement(f.a,null,this.dislikes)),l.a.createElement(F.a,null,l.a.createElement(f.a,{style:{wordWrap:"break-word"}},t[this.props.arrayIndex].content))))}}]),t}(l.a.Component),Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).httpPost=new R,n.httpFetch=new C,n.element=null,n.today=new Date,n.index=0,n.data=0,n.state={blogPostData:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.httpFetch.fetchBlogDataFromBackend((function(t){e.data=t,e.index=t.length,e.setState({blogPostData:t})}))}),5e3)}},{key:"render",value:function(){var e=this;return null===this.data||0===Object.keys(this.data).length?l.a.createElement("div",null,l.a.createElement(M,null)):l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(a.Suspense,{fallback:l.a.createElement("h1",null," Loading...")},l.a.createElement("div",null,Object(P.a)(Array(this.index)).map((function(t,n){return l.a.createElement("div",{key:n},l.a.createElement(q,{key:n,arrayIndex:e.index-n-1}))})))))}}]),t}(l.a.Component),X=n(71),Z={root:{backgroundColor:"white",height:"100%"},first:{marginRight:50,marginTop:50,marginLeft:50,padding:0},afterFirst:{marginRight:50,marginTop:50,marginLeft:50,paddingBottom:10}};function $(){return l.a.createElement("div",{style:Z.root},l.a.createElement(X.a,{style:Z.first},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Recent likes"),l.a.createElement(f.a,null,"Jack liked your post! ",l.a.createElement("br",null),"Sarah liked your post! ",l.a.createElement("br",null),"Jukka liked your post! ",l.a.createElement("br",null),"Sebastian liked your post!"))),l.a.createElement("div",null,l.a.createElement(X.a,{style:Z.afterFirst},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Recent comments"),l.a.createElement(f.a,null,"John: WOW, that is a really good photo! ",l.a.createElement("br",null),"Anna: Where was this taken? Looks so cool! ",l.a.createElement("br",null),"Veeti: OmG! Et s\xc4 PaReMpAAN pystNy??? ",l.a.createElement("br",null)))),l.a.createElement(X.a,{style:Z.afterFirst},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Most liked posts!"),l.a.createElement(f.a,null,'1. "I took this photo from the airport!" ',l.a.createElement("br",null),'2. "My first blog post!" ',l.a.createElement("br",null),'3. "My favourite food!" ',l.a.createElement("br",null)))),l.a.createElement(X.a,{style:Z.afterFirst},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Most commented post!"),l.a.createElement(f.a,null,'1. "Why Donald Trump is such a good president" ',l.a.createElement("br",null),'2. "COVID-19 IS NOT REAL! WAKE UP PEOPLE" ',l.a.createElement("br",null),'3. "Okay, COVID-19 might be real" ',l.a.createElement("br",null))))))}var ee=n(66),te=n.n(ee),ne=(n(111),{PaperRight:{marginTop:10,marginBottom:10},PaperLeft:{marginLeft:30,padding:10,marginTop:10,marginBottom:10}});function ae(){return l.a.createElement(D.a,{container:!0,spacing:0},l.a.createElement(D.a,{item:!0,xs:12,sm:12,md:8,lg:8,xl:8},l.a.createElement(Q,{style:ne.PaperLeft}),l.a.createElement("div",{className:"loader"},l.a.createElement(te.a,{type:"Puff",color:"#00BFFF",height:200,width:200,timeout:8e3}))),l.a.createElement(D.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4},l.a.createElement($,{style:ne.PaperRight})))}var le=n(164),re=n(162),ie=n(163);function oe(){return l.a.createElement(f.a,{variant:"body2",style:{color:"white"}},"Copyright \xa9 ","Samu Willman & Lassi Markkinen"," ",(new Date).getFullYear(),".")}var ce=Object(E.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"10vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:e.palette.grey[800]}}}));function se(){var e=ce();return l.a.createElement("div",{className:e.root},l.a.createElement(re.a,null),l.a.createElement("footer",{className:e.footer},l.a.createElement(ie.a,{maxWidth:"sm",style:{alignContent:"center",textAlign:"center"}},l.a.createElement(oe,null))))}var ue=n(67),me=n(26),de=new C,pe=new R,he=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),pe.login(this.usernameInput.value,this.passwordInput.value)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{style:{maxWidth:500,paddingTop:10,marginTop:40,marginLeft:35,marginRight:35}},l.a.createElement(T.a,null,l.a.createElement(N.a,{id:"standard-multiline-flexible",style:{marginLeft:35,paddingRight:50,justifyItems:"center",justifyContent:"center",display:"flex",marginTop:30},name:"Username",size:"medium",label:"Username",type:"text",inputRef:function(t){return e.usernameInput=t}}),l.a.createElement(N.a,{id:"standard-password-input",style:{marginLeft:35,paddingRight:50,justifyItems:"center",justifyContent:"center",display:"flex",marginTop:30},name:"Password",size:"medium",label:"Password",type:"password",inputRef:function(t){return e.passwordInput=t}}),l.a.createElement(B.a,{style:{textAlign:"center"}}),l.a.createElement(F.a,null,l.a.createElement("div",{style:{textAlign:"center",marginTop:30}},l.a.createElement(O.a,{type:"submit",value:"submit",onClick:de.fetchBlogDataFromBackend,variant:"contained"},"Login")))))))}}]),t}(l.a.Component),ge={backgroundColor:le.a},fe=function(){return l.a.createElement("div",{style:ge},l.a.createElement(L,null),l.a.createElement(ae,null),l.a.createElement(se,null))},be=function(){return l.a.createElement(he,null)},Ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(ue.a,null,l.a.createElement(w,null),l.a.createElement(me.c,null,l.a.createElement(me.a,{path:"/",exact:!0,component:fe}),l.a.createElement(me.a,{path:"/login",exact:!0,component:be})))}}]),t}(a.Component);i.a.render(l.a.createElement(Ee,null),document.getElementById("root"))},81:function(e,t,n){e.exports=n(114)},86:function(e,t,n){},91:function(e,t,n){e.exports=n.p+"static/media/panorama.1fae6530.jpg"}},[[81,1,2]]]);
//# sourceMappingURL=main.8a0a0935.chunk.js.map