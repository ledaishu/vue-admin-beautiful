/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-10-22 20:42:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a2c9556"],{"479f":function(e,t,r){"use strict";var o=r("dc52"),s=r.n(o);s.a},d5c2:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-container"},["development"!==e.nodeEnv?r("el-alert",{staticStyle:{position:"fixed"},attrs:{title:"beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319",type:"success",closable:!1}}):e._e(),r("el-row",[r("el-col",{attrs:{xs:24,sm:24,md:12,lg:16,xl:16}},[r("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),r("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[r("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.form,rules:e.registerRules,size:"mini"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticStyle:{"margin-top":"20px"},attrs:{type:"text",placeholder:"请输入用户名","auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}},[r("vab-icon",{attrs:{slot:"prefix",icon:["fas","user-alt"]},slot:"prefix"})],1)],1),r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11","show-word-limit":"",autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}},[r("vab-icon",{attrs:{slot:"prefix",icon:["fas","mobile-alt"]},slot:"prefix"})],1)],1),r("el-form-item",{staticStyle:{position:"relative"},attrs:{prop:"phoneCode"}},[r("el-input",{attrs:{type:"text",placeholder:"手机验证码"},model:{value:e.form.phoneCode,callback:function(t){e.$set(e.form,"phoneCode","string"===typeof t?t.trim():t)},expression:"form.phoneCode"}},[r("vab-icon",{attrs:{slot:"prefix",icon:["fas","envelope-open"]},slot:"prefix"})],1),r("el-button",{staticClass:"show-pwd phone-code",attrs:{type:"primary",disabled:e.isGetphone},on:{click:e.getPhoneCode}},[e._v(" "+e._s(e.phoneCode)+" ")])],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"设置密码",autocomplete:"new-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}},[r("vab-icon",{attrs:{slot:"prefix",icon:["fas","unlock"]},slot:"prefix"})],1)],1),r("el-form-item",[r("el-button",{staticClass:"register-btn",attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleReister(t)}}},[e._v(" 注册 ")]),r("router-link",{attrs:{to:"/login"}},[r("div",{staticStyle:{"margin-top":"20px"}},[e._v("登录")])])],1)],1)],1)],1)],1)},s=[],n=(r("96cf"),r("1da1")),i=r("61f7"),a=r("c24f"),l={username:"Register",directives:{focus:{inserted:function(e){e.querySelector("input").focus()}}},data:function(){var e=function(e,t,r){""==t?r(new Error("用户名不能为空")):r()},t=function(e,t,r){Object(i["isPassword"])(t)?r():r(new Error("密码不能少于6位"))},r=function(e,t,r){Object(i["isPhone"])(t)?r():r(new Error("请输入正确的手机号"))};return{isGetphone:!1,getPhoneIntval:null,phoneCode:"获取验证码",showRegister:!1,nodeEnv:"production",title:this.$baseTitle,form:{},registerRules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"},{max:20,trigger:"blur",message:"最多不能超过20个字"},{validator:e,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:"请输入手机号码"},{validator:r,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{validator:t,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:"请输入手机验证码"}]},loading:!1,passwordType:"password"}},created:function(){document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow="auto",this.getPhoneIntval=null,clearInterval(this.getPhoneIntval)},methods:{getPhoneCode:function(){var e=this;if(Object(i["isPhone"])(this.form.phone)){this.isGetphone=!0;var t=60;this.getPhoneIntval=setInterval((function(){t>0?(t--,e.phoneCode="重新获取("+t+"s)"):(e.getPhoneIntval=null,clearInterval(e.getPhoneIntval),e.phoneCode="获取验证码",e.isGetphone=!1)}),1e3)}else this.$refs["registerForm"].validateField("phone")},handleReister:function(){var e=this;this.$refs["registerForm"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var o,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return o={username:e.form.username,phone:e.form.phone,password:e.form.password,phoneCode:e.form.phoneCode},t.next=4,Object(a["register"])(o);case 4:s=t.sent,n=s.msg,e.$baseMessage(n,"success");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},c=l,p=(r("479f"),r("9ca4")),u=Object(p["a"])(c,o,s,!1,null,"354906d6",null);t["default"]=u.exports},dc52:function(e,t,r){}}]);