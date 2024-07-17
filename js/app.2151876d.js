(function(){"use strict";var e={137:function(e,t,a){var o=a(751),s=a(641);const l={id:"app"};function n(e,t,a,o,n,r){const i=(0,s.g2)("router-link"),d=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("nav",null,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1}),(0,s.bF)(i,{to:"/about"},{default:(0,s.k6)((()=>[(0,s.eW)("About")])),_:1}),(0,s.bF)(i,{to:"/video"},{default:(0,s.k6)((()=>[(0,s.eW)("Video")])),_:1})]),(0,s.bF)(d)])}var r={name:"App"},i=a(262);const d=(0,i.A)(r,[["render",n]]);var u=d,x=a(166),m=a(33);const c=(0,s.Lk)("h1",null,"Home Page",-1),b=(0,s.Lk)("p",null,"Welcome to the home page!",-1),p=(0,s.Lk)("hr",null,null,-1),h=(0,s.Lk)("h1",null,"User List",-1),_={key:0},v={key:1};function f(e,t,a,o,l,n){return(0,s.uX)(),(0,s.CE)("div",null,[c,b,p,(0,s.Lk)("div",null,[h,l.users.length?((0,s.uX)(),(0,s.CE)("ul",_,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.users,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id},(0,m.v_)(e.name)+" "+(0,m.v_)(e.surname),1)))),128))])):((0,s.uX)(),(0,s.CE)("p",v,"No users found."))])])}var k=JSON.parse('{"V":[{"id":1,"name":"John Doe","surname":"John Doe 666"},{"id":2,"name":"Jane Smith"}],"s":{"06035b1c-67b9-4ddc-8e79-ab2d384900fb":{"uid":"06035b1c-67b9-4ddc-8e79-ab2d384900fb","ms_title":"xxxxx","ms_description":"xxxxx","ms_video_url":"xxxxx","ms_video_preview_img_url":"https://img.youtube.com/vi/r_8Xm3XosswCM/maxresdefault.jpg","ms_category":"xxxxx","ms_tags":["xxxxx"],"ms_created_at":"xxxxx","ms_created_by":"xxxxx","ms_updated_at":"xxxxx","ms_updated_by":"xxxxx"},"acaf16c3-23c9-4d0c-ad7f-4f1bb3b5c5a2":{"ms_title":"xxxxx1","ms_description":"xxxxx2","ms_video_url":"xxxxx3","ms_video_preview_img_url":"https://img.youtube.com/vi/<videoId>/maxresdefault.jpg","ms_category":"xxxxx4","ms_tags":["xxxxx5"],"ms_created_at":"xxxxx6","ms_created_by":"xxxxx7","ms_updated_at":"xxxxx8","ms_updated_by":"xxxxx9"},"3c5bf0d2-895f-4059-a85e-3b5c7c21bb27":{"uid":"3c5bf0d2-895f-4059-a85e-3b5c7c21bb27","ms_title":"xxxxx","ms_description":"xxxxx","ms_video_url":"xxxxx","ms_video_preview_img_url":"https://img.youtube.com/vi/<videoId>/maxresdefault.jpg","ms_category":"xxxxx","ms_tags":["xxxxx"],"ms_created_at":"xxxxx","ms_created_by":"xxxxx","ms_updated_at":"xxxxx","ms_updated_by":"xxxxx"},"c5579c56-ded8-4265-b957-89df657466f2":{"uid":"c5579c56-ded8-4265-b957-89df657466f2","ms_title":"xxxxx","ms_description":"xxxxx","ms_video_url":"xxxxx","ms_video_preview_img_url":"https://img.youtube.com/vi/<videoId>/maxresdefault.jpg","ms_category":"xxxxx","ms_tags":["xxxxx"],"ms_created_at":"xxxxx","ms_created_by":"xxxxx","ms_updated_at":"xxxxx","ms_updated_by":"xxxxx"}}}'),g={name:"HomePage",data(){return{users:k.V}}};const y=(0,i.A)(g,[["render",f]]);var L=y;const w=(0,s.Lk)("h1",null,"About Page",-1),C=(0,s.Lk)("p",null,"This is the about page.",-1),E=(0,s.Lk)("hr",null,null,-1),X={key:0},j={key:1},I=(0,s.Lk)("hr",null,null,-1),O=(0,s.Lk)("h1",null,"Add New User",-1),P=(0,s.Lk)("label",{for:"name"},"Name:",-1),F=(0,s.Lk)("label",{for:"email"},"Email:",-1),U=(0,s.Lk)("button",{type:"submit"},"Submit",-1),A={key:0},M=(0,s.Lk)("hr",null,null,-1);function D(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",null,[w,C,(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.fetchUsers&&r.fetchUsers(...e))},"Click Me fetch data"),E,n.users.length?((0,s.uX)(),(0,s.CE)("ul",X,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.users,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id},(0,m.v_)(e.name),1)))),128))])):((0,s.uX)(),(0,s.CE)("p",j,"Loading...")),I,(0,s.Lk)("div",null,[O,(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>r.submitForm&&r.submitForm(...e)),["prevent"]))},[(0,s.Lk)("div",null,[P,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>n.name=e),required:""},null,512),[[o.Jo,n.name]])]),(0,s.Lk)("div",null,[F,(0,s.bo)((0,s.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>n.email=e),required:""},null,512),[[o.Jo,n.email]])]),U],32),n.message?((0,s.uX)(),(0,s.CE)("p",A,(0,m.v_)(n.message),1)):(0,s.Q3)("",!0)]),M])}var W={name:"AboutPage",data(){return{users:[],name:"",email:"",message:""}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.users=t}catch(e){console.error("There was an error fetching the users:",e)}},async submitForm(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email})}),t=await e.json();this.message="User added successfully!",console.log(t)}catch(e){console.error("There was an error adding the user:",e),this.message="Failed to add user."}}}};const J=(0,i.A)(W,[["render",D]]);var N=J;const S=(0,s.Lk)("h1",null,"Home Page",-1),T=(0,s.Lk)("p",null,"Welcome to the home page!",-1),V=(0,s.Lk)("button",{type:"button",class:"btn btn-primary"},"Primary",-1),H=(0,s.Lk)("hr",null,null,-1),K={key:0},q=(0,s.Lk)("strong",null,"UID:",-1),B=(0,s.Lk)("br",null,null,-1),Q=(0,s.Lk)("strong",null,"UID2:",-1),R=(0,s.Lk)("br",null,null,-1),Z=(0,s.Lk)("strong",null,"UID3:",-1),$=(0,s.Lk)("br",null,null,-1),z=(0,s.Lk)("strong",null,"UID4:",-1),G=(0,s.Lk)("br",null,null,-1),Y={key:1},ee={class:"album py-5 bg-body-tertiary"},te={class:"container"},ae={key:0,class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},oe={class:"card shadow-sm"},se=["src"],le={class:"card-body"},ne={class:"card-text"},re={class:"card-text truncate-text"},ie=["onClick"],de={key:1},ue=(0,s.Lk)("hr",null,null,-1),xe=(0,s.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#itemModal"}," Launch demo modal ",-1),me={class:"modal fade",id:"itemModal",tabindex:"-1","aria-labelledby":"itemModalLabel","aria-hidden":"true"},ce={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},be={class:"modal-content"},pe=(0,s.Lk)("div",{class:"modal-header"},[(0,s.Lk)("h1",{class:"modal-title fs-5",id:"itemModalLabel"},"Modal title"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),he={class:"modal-body"},_e=(0,s.Lk)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/4RDP-LZoNmU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),ve=(0,s.Lk)("div",{class:"modal-footer"},[(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),(0,s.Lk)("button",{type:"button",class:"btn btn-primary"},"Save changes")],-1);function fe(e,t,a,o,l,n){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",null,[S,T,V,H,(0,s.Lk)("div",null,[l.videoList.length?((0,s.uX)(),(0,s.CE)("ul",K,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.videoList,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:t},[q,(0,s.eW)(" "+(0,m.v_)(e.uid)+" ",1),B,Q,(0,s.eW)(" "+(0,m.v_)(e.ms_video_preview_img_url)+" ",1),R,Z,(0,s.eW)(" "+(0,m.v_)(e.uid)+" ",1),$,z,(0,s.eW)(" "+(0,m.v_)(e.uid)+" ",1),G])))),128))])):((0,s.uX)(),(0,s.CE)("p",Y,"No video data found."))])]),(0,s.Lk)("div",ee,[(0,s.Lk)("div",te,[l.videoList.length?((0,s.uX)(),(0,s.CE)("div",ae,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.videoList,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"col",key:t},[(0,s.Lk)("div",oe,[(0,s.Lk)("img",{src:e.ms_video_preview_img_url,class:"",width:"100%",height:"225"},null,8,se),(0,s.Lk)("div",le,[(0,s.Lk)("p",ne,(0,m.v_)(e.ms_title),1),(0,s.Lk)("p",re,(0,m.v_)(e.ms_description),1),(0,s.Lk)("button",{class:"btn btn-primary",onClick:t=>n.showModal(e)},"Play Video",8,ie)])])])))),128))])):((0,s.uX)(),(0,s.CE)("p",de,"No video data found."))])]),ue,xe,(0,s.Lk)("div",me,[(0,s.Lk)("div",ce,[(0,s.Lk)("div",be,[pe,(0,s.Lk)("div",he,[_e,(0,s.eW)(" "+(0,m.v_)(l.selectedItem.ms_title),1)]),ve])])])],64)}var ke={name:"HomePage",data(){return{videoList:[],selectedItem:{},modal:null}},created(){this.parseJsonData()},mounted(){this.modal=new window.bootstrap.Modal(document.getElementById("itemModal"))},methods:{parseJsonData(){this.videoList=Object.values(k.s)},showModal(e){this.selectedItem=e,this.modal.show()},show(){this.modal.show()},hide(){this.modal.hide()}}};const ge=(0,i.A)(ke,[["render",fe]]);var ye=ge;const Le=[{path:"/",name:"HomePage",component:L},{path:"/about",name:"AboutPage",component:N},{path:"/video",name:"VideoPage",component:ye}],we=(0,x.aE)({history:(0,x.LA)("/vue-test/"),routes:Le});var Ce=we;(0,o.Ef)(u).use(Ce).mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,l){if(!o){var n=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],l=e[u][2];for(var r=!0,i=0;i<o.length;i++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(r=!1,l<n&&(n=l));if(r){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,s,l]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,l,n=o[0],r=o[1],i=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(i)var u=i(a)}for(t&&t(o);d<n.length;d++)l=n[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(137)}));o=a.O(o)})();
//# sourceMappingURL=app.2151876d.js.map