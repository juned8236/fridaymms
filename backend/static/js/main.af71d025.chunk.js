(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.f8918331.png"},30:function(e,t,a){},44:function(e,t,a){e.exports=a(77)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),l=a.n(s),o=(a(49),a(50),a(51),a(52),a(11)),i=a(12),c=a(14),m=a(13),u=a(20),d=a(6),p=a(15),h=(a(30),a(24)),b=a.n(h),f=a(18);var g=function(){var e=this.props,t=e.label,a=e.type,n=e.id,s=e.val,l=e.className,o=e.placeholder,i=e.password1,c=e.password2,m=e.span;return r.a.createElement("div",{className:"form-group required-alert-box"},r.a.createElement("label",null,t),r.a.createElement("input",{id:n,type:a,value:s,className:l,password1:i,password2:c,onChange:this.fnChange.bind(this),placeholder:o,name:""}),r.a.createElement("span",null,m))},E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"fnChange",value:function(e){var t=e.target,a=t.id,n=t.value;this.props.fnPrepareData(a,n)}},{key:"render",value:function(){return g.call(this)}}]),a}(r.a.Component),v=a(88);var O=function(){var e=this.state.dataObj,t=e.first_name,a=e.last_name,n=e.email,s=e.password1,l=e.password2,o=null,i=null,c=null;return this.props.regis&&(i=r.a.createElement("span",null,this.props.regis.response.data.first_name),c=r.a.createElement("span",null,this.props.regis.response.data.last_name),o=r.a.createElement("span",null,this.props.regis.response.data.email)),r.a.createElement("div",{className:"body-container"},this.props.loading?r.a.createElement(v.a,{color:"secondary"}):r.a.createElement("div",{className:"admin-entry-section"},r.a.createElement("div",{className:"inner-admin"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-6 p-0 order-md-12 animated slideInLeft"},r.a.createElement("div",{className:"inner-section register-section"},r.a.createElement("img",{src:b.a,className:"logo",alt:""}),r.a.createElement("div",{className:"message-conntainer"},r.a.createElement("h2",{className:"text-center"},"Get started"),r.a.createElement("h4",{className:"text-center"},"It's free to signup and only takes a minute.")),r.a.createElement("p",null,"You have an account? ",r.a.createElement(f.b,{to:"/"},"Sign In")))),r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInRight"},r.a.createElement("div",{className:"form-section"},r.a.createElement("h2",null,"Sign up"),this.props&&this.props.email_link&&this.props.email_link.detail&&r.a.createElement("div",{className:"form-group required-alert-box",style:{height:50}},r.a.createElement("span",null,"Thanks for Registration"),r.a.createElement("span",null,this.props.email_link.detail+": Click on that link to activate Account")),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{span:i,label:"First name",type:"text",className:"form-control",id:"first_name",val:t,placeholder:"First name",fnPrepareData:this.fnPrepareData})),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{span:c,label:"Last name",type:"text",className:"form-control",id:"last_name",val:a,placeholder:"Last name",fnPrepareData:this.fnPrepareData}))),r.a.createElement(E,{span:o,label:"Email Address",type:"text",className:"form-control",id:"email",val:n,placeholder:"Email Address",fnPrepareData:this.fnPrepareData}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{label:"Password",type:"Password",className:"form-control",id:"password1",val:s,placeholder:"Password",fnPrepareData:this.fnPrepareData})),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(E,{label:"Confirm Password",type:"Password",className:"form-control",id:"password2",val:l,placeholder:"Confirm Password",fnPrepareData:this.fnPrepareData}))),this.props&&this.props.regis&&this.props.regis.response.data&&this.props.regis.response.data.password1&&r.a.createElement("div",{className:"form-group required-alert-box",style:{height:10}},r.a.createElement("span",null,"Password : "+this.props.regis.response.data.password1)),this.props&&this.props.regis&&this.props.regis.response.data&&this.props.regis.response.data.password2&&r.a.createElement("div",{className:"form-group required-alert-box",style:{height:10}},r.a.createElement("span",null,"Confirm Password : "+this.props.regis.response.data.password2)),r.a.createElement("div",{className:"form-group required-alert-box"},r.a.createElement("label",null,"Role"),r.a.createElement("select",{className:"form-control",onChange:this.handleChange},r.a.createElement("option",{value:""},"Select role"),r.a.createElement("option",{value:"True"},"Miner"),r.a.createElement("option",{value:"True"},"Read Only"))),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Sign Up")),this.props&&this.props.regis&&this.props.regis.response.data&&this.props.regis.response.data.non_field_errors&&r.a.createElement("div",{className:"form-group required-alert-box",style:{height:10}},r.a.createElement("span",null,this.props.regis.response.data.non_field_errors))))))))))},j=a(27),w=a.n(j),N=function(){return console.log("start"),{type:"AUTH_START"}},y=function(e){return console.log("sucess"),{type:"AUTH_SUCCESS",token:e}},_=function(){return console.log("logout"),localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},k=function(e){return console.log("authchecktime"),function(t){setTimeout((function(){t(_())}),1e3*e)}},A=function(e,t){return function(a){a(N()),w.a.post("http://localhost:1337/rest-auth/login/",{email:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(y(t)),a(k(3600))})).catch((function(e){var t;a((t=e,console.log("fail"),{type:"AUTH_FAIL",error:t}))}))}},D=a(8),P=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){"is_miner"===t.target.value&&e.setState({dataObj:Object(d.a)(Object(d.a)({},e.state.dataObj),{},{is_miner:t.target.value})}),"read_only"===t.target.value&&e.setState({dataObj:Object(d.a)(Object(d.a)({},e.state.dataObj),{},{read_only:t.target.value})})},e.state={dataObj:{first_name:"",last_name:"",email:"",password1:"",password2:"",is_miner:"False",read_only:"False",is_admin:"False"}},e.toggle=e.toggle.bind(Object(p.a)(e)),e.fnPrepareData=e.fnPrepareData.bind(Object(p.a)(e)),e.submit=e.submit.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(i.a)(a,[{key:"toggle",value:function(){this.props.app(!1)}},{key:"fnPrepareData",value:function(e,t){this.setState({dataObj:Object(d.a)(Object(d.a)({},this.state.dataObj),{},Object(u.a)({},e,t))})}},{key:"submit",value:function(){this.props.onAuth(this.state.dataObj.first_name,this.state.dataObj.last_name,this.state.dataObj.email,this.state.dataObj.password1,this.state.dataObj.password2,this.state.dataObj.is_miner,this.state.dataObj.read_only,this.state.dataObj.is_admin)}},{key:"render",value:function(){return O.call(this)}}]),a}(r.a.Component),S=Object(D.b)((function(e){return{loading:e.loading,error:e.error,regis:e.regis,email_link:e.email_link}}),(function(e){return{onAuth:function(t,a,n,r,s,l,o,i){return e(function(e,t,a,n,r,s,l,o){return function(i){i(N()),w.a.post("http://localhost:1337/rest-auth/registration/",{first_name:e,last_name:t,email:a,password1:n,password2:r,is_miner:s,read_only:o,is_admin:l}).then((function(e){var t=e.data;i(function(e){return{type:"registration",email_link:e}}(t))})).catch((function(e){i({type:"reg_error",regis:e})}))}}(t,a,n,r,s,o,i,l))}}}))(P);a(75),a(76);var x=function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Logout"))},C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).submit=function(){e.props.logout()},e}return Object(i.a)(a,[{key:"render",value:function(){return x.call(this)}}]),a}(r.a.Component),T=Object(D.b)((function(e){return{token:e.token,isAuthenticated:e.isAuthenticated}}),(function(e){return{logout:function(){return e(_())}}}))(C),I=a(2);var U=function(){var e=this.state.dataObj,t=e.email,a=e.password,n=null,s=null,l=null;return this.props.error&&(n=r.a.createElement("div",{className:"form-group required-alert-box",style:{height:0}},r.a.createElement("span",null,this.props.error.response.data.non_field_errors)),s=r.a.createElement("span",null,this.props.error.response.data.password),l=r.a.createElement("span",null,this.props.error.response.data.email)),this.props.isAuthenticated?(console.log("isAuthenticated"),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.b,null,r.a.createElement(I.b,{exact:!0,path:"/dashboard",component:T}),r.a.createElement(I.a,{to:"/dashboard"})))):r.a.createElement("div",{className:"root-login"},this.props.loading?r.a.createElement(v.a,{color:"secondary"}):r.a.createElement("div",{className:"admin-entry-section"},r.a.createElement("div",{className:"inner-admin"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInRight"},r.a.createElement("div",{className:"inner-section"},r.a.createElement("img",{src:b.a,className:"logo",alt:""}),r.a.createElement("div",{className:"message-conntainer"},r.a.createElement("h2",{className:"text-center"},"Welcome back!"),r.a.createElement("h4",{className:"text-center"},"Please sign in to continue.")),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(f.b,{to:"/signup"},"Create an account")))),r.a.createElement("div",{className:"col-12 col-md-6 p-0 animated slideInLeft"},r.a.createElement("div",{className:"form-section"},r.a.createElement("h2",null,"Sign in"),r.a.createElement("form",null,r.a.createElement(E,{span:l,label:"Email Address",type:"text",className:"form-control",id:"email",val:t,required:"required",placeholder:"Email Address",fnPrepareData:this.fnPrepareData}),r.a.createElement(E,{span:s,label:"Password",type:"password",className:"form-control",id:"password",val:a,required:!0,placeholder:"Password",fnPrepareData:this.fnPrepareData}),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("div",{className:"row mx-0 justify-content-between align-items-center"},r.a.createElement("span",{className:"checkbox-custom"},r.a.createElement("input",{type:"checkbox",name:"",id:"remember"}),r.a.createElement("label",{htmlFor:"remember"},"Remember me")),r.a.createElement("a",{href:"/password-reset/"},"Forgot password?"))),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-green btn-block",onClick:this.submit.bind(this)},"Sign In"))),n)))))))},q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={dataObj:{email:"",password:""}},e.submit=e.submit.bind(Object(p.a)(e)),e.fnPrepareData=e.fnPrepareData.bind(Object(p.a)(e)),e}return Object(i.a)(a,[{key:"fnPrepareData",value:function(e,t){this.setState({dataObj:Object(d.a)(Object(d.a)({},this.state.dataObj),{},Object(u.a)({},e,t))})}},{key:"submit",value:function(){this.props.onAuth(this.state.dataObj.email,this.state.dataObj.password)}},{key:"render",value:function(){return U.call(this)}}]),a}(r.a.Component),F=Object(D.b)((function(e){return{loading:e.loading,error:e.error,token:e.token,isAuthenticated:e.isAuthenticated}}),(function(e){return{onAuth:function(t,a){return e(A(t,a))}}}))(q),L=Object(D.b)((function(e){return{isAuthenticated:e.isAuthenticated}}))((function(){return r.a.createElement("div",null,r.a.createElement(I.b,{exact:!0,path:"/signup/",component:S}),r.a.createElement(I.b,{exact:!0,path:"/",component:F}),r.a.createElement(I.b,{exact:!0,path:"/dashboard",component:T}))})),R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(L,null)))}}]),a}(n.Component),H=Object(D.b)(null,(function(e){return{onTryAutoSignup:function(){return e((console.log("authcheck"),function(e){var t=localStorage.getItem("token");if(void 0===t)e(_());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(_()):(e(y(t)),e(k((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(21),G=a(41),W=function(e,t){return Object(d.a)(Object(d.a)({},e),t)},B={token:null,error:null,loading:!1,regis:null,email_link:null,isAuthenticated:!1},J=function(e,t){return W(e,{error:null,loading:!0})},X=function(e,t){return W(e,{token:t.token,error:null,loading:!1,isAuthenticated:!0})},V=function(e,t){return W(e,{error:t.error,loading:!1})},Y=function(e,t){return W(e,{token:null})},$=function(e,t){return W(e,{email_link:t.email_link,error:null,loading:!1})},z=function(e,t){return W(e,{regis:t.regis,loading:!1})},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return J(e);case"AUTH_SUCCESS":return X(e,t);case"AUTH_FAIL":return V(e,t);case"AUTH_LOGOUT":return Y(e);case"registration":return $(e,t);case"reg_error":return z(e,t);default:return e}},Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,Z=Object(M.d)(K,Q(Object(M.a)(G.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,{store:Z},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.af71d025.chunk.js.map