(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/logo.f8918331.png"},30:function(e,a,t){},44:function(e,a,t){e.exports=t(77)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),o=(t(49),t(50),t(51),t(52),t(11)),i=t(12),c=t(14),m=t(13),u=t(20),d=t(5),p=t(16),b=(t(30),t(24)),h=t.n(b),f=t(18);var g=function(){var e=this.props,a=e.label,t=e.type,n=e.id,l=e.val,s=e.className,o=e.placeholder,i=e.password1,c=e.password2;return r.a.createElement("div",{className:"a"},r.a.createElement("label",null,a),r.a.createElement("input",{id:n,type:t,value:l,className:s,password1:i,password2:c,onChange:this.fnChange.bind(this),placeholder:o,name:""}))},E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"fnChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.props.fnPrepareData(t,n)}},{key:"render",value:function(){return g.call(this)}}]),t}(r.a.Component),v=t(88);var O=function(){var e=this.state.dataObj,a=e.first_name,t=e.last_name,n=e.email,l=e.password1,s=e.password2,o=null,i=null,c=null,m=null,u=null;return this.props.email_link&&(u=r.a.createElement("span",null,"Click on link to activate Account :",this.props.email_link.detail)),this.props.regis&&(o=r.a.createElement("span",null,this.props.regis.response.data.email),i=r.a.createElement("span",null," ",this.props.regis.response.data.password1),c=r.a.createElement("span",null,this.props.regis.response.data.password2),m=r.a.createElement("span",null,this.props.regis.response.data.non_field_errors)),r.a.createElement("div",{className:"body-container"},this.props.loading?r.a.createElement(v.a,{color:"secondary"}):r.a.createElement("div",{className:"admin-entry-section"},r.a.createElement("div",{className:"inner-admin"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-6 p-0 order-md-12 animated slideInLeft"},r.a.createElement("div",{className:"inner-section register-section"},r.a.createElement("img",{src:h.a,className:"logo",alt:""}),r.a.createElement("div",{className:"message-conntainer"},r.a.createElement("h2",{className:"text-center"},"Get started"),r.a.createElement("h4",{className:"text-center"},"It's free to signup and only takes a minute.")),r.a.createElement("p",null,"You have an account?",r.a.createElement(f.b,{to:"/"},"Sign In")))),r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInRight"},r.a.createElement("div",{className:"form-section"},r.a.createElement("h2",null,"Sign up"),r.a.createElement("div",{className:"alert alert-warning",style:{padding:0,margin:0,border:0}},i,u),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{label:"First name",type:"text",className:"form-control",id:"first_name",val:a,placeholder:"First name",fnPrepareData:this.fnPrepareData})),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{label:"Last name",type:"text",className:"form-control",id:"last_name",val:t,placeholder:"Last name",fnPrepareData:this.fnPrepareData}))),r.a.createElement(E,{span:{errorMessage:o},label:"Email Address",type:"text",className:"form-control",id:"email",val:n,placeholder:"Email Address",fnPrepareData:this.fnPrepareData}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{span:{errorMessage2:c},label:"Password",type:"Password",className:"form-control",id:"password1",val:l,placeholder:"Password",fnPrepareData:this.fnPrepareData})),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{span:{errorMessage3:m},label:"Confirm Password",type:"Password",className:"form-control",id:"password2",val:s,placeholder:"Confirm Password",fnPrepareData:this.fnPrepareData}))),r.a.createElement("div",{className:"form-group required-alert-box"},r.a.createElement("label",null,"Role"),r.a.createElement("select",{className:"form-control",name:"mySelect",onChange:this.handleChange},r.a.createElement("option",{value:""},"Select role"),r.a.createElement("option",{value:"is_admin"},"Admin"),r.a.createElement("option",{value:"is_miner"},"Miner"),r.a.createElement("option",{value:"read_only"},"Read Only"))),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Sign Up"))))))))))},j=t(27),w=t.n(j),N=function(){return console.log("start"),{type:"AUTH_START"}},y=function(e){return console.log("sucess"),{type:"AUTH_SUCCESS",token:e}},_=function(){return console.log("logout"),localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},k=function(e){return console.log("authchecktime"),function(a){setTimeout((function(){a(_())}),1e3*e)}},A=function(e,a){return function(t){t(N()),w.a.post("http://127.0.0.1:8000/rest-auth/login/",{email:e,password:a}).then((function(e){var a=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",a),localStorage.setItem("expirationDate",n),t(y(a)),t(k(3600))})).catch((function(e){var a;t((a=e,console.log("fail"),{type:"AUTH_FAIL",error:a}))}))}},D=t(8),P=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChange=function(a){console.log(a),"is_admin"===a.target.value&&e.setState({dataObj:Object(d.a)(Object(d.a)({},e.state.dataObj),{},{is_admin:a.target.value})}),"is_miner"===a.target.value&&e.setState({dataObj:Object(d.a)(Object(d.a)({},e.state.dataObj),{},{is_miner:a.target.value})}),"read_only"===a.target.value&&e.setState({dataObj:Object(d.a)(Object(d.a)({},e.state.dataObj),{},{read_only:a.target.value})})},e.state={dataObj:{first_name:"",last_name:"",email:"",password1:"",password2:"",is_admin:"",is_miner:"",read_only:""}},e.toggle=e.toggle.bind(Object(p.a)(e)),e.fnPrepareData=e.fnPrepareData.bind(Object(p.a)(e)),e.submit=e.submit.bind(Object(p.a)(e)),e}return Object(i.a)(t,[{key:"toggle",value:function(){this.props.app(!1)}},{key:"fnPrepareData",value:function(e,a){this.setState({dataObj:Object(d.a)(Object(d.a)({},this.state.dataObj),{},Object(u.a)({},e,a))})}},{key:"submit",value:function(){this.props.onAuth(this.state.dataObj.first_name,this.state.dataObj.last_name,this.state.dataObj.email,this.state.dataObj.password1,this.state.dataObj.password2,this.state.dataObj.is_admin,this.state.dataObj.is_miner,this.state.dataObj.read_only)}},{key:"render",value:function(){return O.call(this)}}]),t}(r.a.Component),S=Object(D.b)((function(e){return{loading:e.loading,error:e.error,regis:e.regis,email_link:e.email_link}}),(function(e){return{onAuth:function(a,t,n,r,l,s,o,i){return e(function(e,a,t,n,r,l,s,o){return function(i){i(N()),w.a.post("http://127.0.0.1:8000/rest-auth/registration/",{first_name:e,last_name:a,email:t,password1:n,password2:r,is_admin:l,is_miner:s,read_only:o}).then((function(e){var a=e.data;i(function(e){return{type:"registration",email_link:e}}(a))})).catch((function(e){i({type:"reg_error",regis:e})}))}}(a,t,n,r,l,s,o,i))}}}))(P);t(75),t(76);var x=function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Logout"))},C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).submit=function(){e.props.logout()},e}return Object(i.a)(t,[{key:"render",value:function(){return x.call(this)}}]),t}(r.a.Component),T=Object(D.b)((function(e){return{token:e.token,isAuthenticated:e.isAuthenticated}}),(function(e){return{logout:function(){return e(_())}}}))(C),I=t(2);var U=function(){var e=this.state.dataObj,a=e.email,t=e.password,n=null,l=null;return this.props.error&&(r.a.createElement("span",null,this.props.error.response.data.non_field_errors),n=r.a.createElement("span",null,this.props.error.response.data.password),l=r.a.createElement("span",null,this.props.error.response.data.email)),this.props.isAuthenticated?(console.log("isAuthenticated"),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.b,null,r.a.createElement(I.b,{exact:!0,path:"/dashboard",component:T}),r.a.createElement(I.a,{to:"/dashboard"})))):r.a.createElement("div",null,this.props.loading?r.a.createElement(v.a,{color:"secondary"}):r.a.createElement("div",{className:"admin-entry-section"},r.a.createElement("div",{className:"inner-admin"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInRight"},r.a.createElement("div",{className:"inner-section"},r.a.createElement("img",{src:h.a,className:"logo",alt:""}),r.a.createElement("div",{className:"message-conntainer"},r.a.createElement("h2",{className:"text-center"},"Welcome back!"),r.a.createElement("h4",{className:"text-center"},"Please sign in to continue.")),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(f.b,{to:"/signup"},"Create an account")))),r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInLeft"},r.a.createElement("div",{className:"form-section"},r.a.createElement("h2",null,"Sign in"),r.a.createElement("div",{className:"form-group required-alert-box"},n),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group required-alert-box"},r.a.createElement(E,{label:"Email Address",type:"text",className:"form-control",id:"email",val:a,required:"required",placeholder:"Email Address",fnPrepareData:this.fnPrepareData}),l),r.a.createElement("div",{className:"form-group required-alert-box"},r.a.createElement(E,{label:"Password",type:"password",className:"form-control",id:"password",val:t,required:!0,placeholder:"Password",fnPrepareData:this.fnPrepareData}),n),r.a.createElement(E,{label:"Password",type:"password",className:"form-control",id:"password",val:t,required:!0,placeholder:"Password",fnPrepareData:this.fnPrepareData}),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("div",{className:"row mx-0 justify-content-between align-items-center"},r.a.createElement("span",{className:"checkbox-custom"},r.a.createElement("input",{type:"checkbox",name:"",id:"remember"}),r.a.createElement("label",{htmlFor:"remember"},"Remember me")),r.a.createElement("a",{href:"reset-password.html"},"Forgot password?"))),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Sign In"))))))))))},L=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={dataObj:{email:"",password:""}},e.submit=e.submit.bind(Object(p.a)(e)),e.fnPrepareData=e.fnPrepareData.bind(Object(p.a)(e)),e}return Object(i.a)(t,[{key:"fnPrepareData",value:function(e,a){this.setState({dataObj:Object(d.a)(Object(d.a)({},this.state.dataObj),{},Object(u.a)({},e,a))})}},{key:"submit",value:function(){this.props.onAuth(this.state.dataObj.email,this.state.dataObj.password)}},{key:"render",value:function(){return U.call(this)}}]),t}(r.a.Component),q=Object(D.b)((function(e){return{loading:e.loading,error:e.error,token:e.token,isAuthenticated:e.isAuthenticated}}),(function(e){return{onAuth:function(a,t){return e(A(a,t))}}}))(L),H=Object(D.b)((function(e){return{isAuthenticated:e.isAuthenticated}}))((function(){return r.a.createElement("div",null,r.a.createElement(I.b,{exact:!0,path:"/signup/",component:S}),r.a.createElement(I.b,{exact:!0,path:"/",component:q}),r.a.createElement(I.b,{exact:!0,path:"/dashboard",component:T}))})),R=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(H,null)))}}]),t}(n.Component),F=Object(D.b)(null,(function(e){return{onTryAutoSignup:function(){return e((console.log("authcheck"),function(e){var a=localStorage.getItem("token");if(void 0===a)e(_());else{var t=new Date(localStorage.getItem("expirationDate"));t<=new Date?e(_()):(e(y(a)),e(k((t.getTime()-(new Date).getTime())/1e3)))}}))}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(21),G=t(41),W=function(e,a){return Object(d.a)(Object(d.a)({},e),a)},B={token:null,error:null,loading:!1,regis:null,email_link:null,isAuthenticated:!1},J=function(e,a){return W(e,{error:null,loading:!0})},X=function(e,a){return W(e,{token:a.token,error:null,loading:!1,isAuthenticated:!0})},V=function(e,a){return W(e,{error:a.error,loading:!1})},Y=function(e,a){return W(e,{token:null})},$=function(e,a){return W(e,{email_link:a.email_link,error:null,loading:!1})},z=function(e,a){return W(e,{regis:a.regis,loading:!1})},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_START":return J(e);case"AUTH_SUCCESS":return X(e,a);case"AUTH_FAIL":return V(e,a);case"AUTH_LOGOUT":return Y(e);case"registration":return $(e,a);case"reg_error":return z(e,a);default:return e}},Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,Z=Object(M.d)(K,Q(Object(M.a)(G.a)));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,{store:Z},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.73329cbb.chunk.js.map