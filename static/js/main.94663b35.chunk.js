(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a.n(i),r=a(28),c=a.n(r),o=(a(37),a(3)),l=a(4),u=a(6),d=a(5),h=a(29),b=a(7),m=(a(24),a(19)),j=(a(25),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showInfo:!1},n}return Object(l.a)(a,[{key:"toggle",value:function(e){this.setState({showInfo:e})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"question",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h4",{children:this.props.title}),Object(n.jsx)("button",{className:"btn",onClick:function(){return e.toggle(!e.state.showInfo)},children:this.state.showInfo?Object(n.jsx)(m.a,{}):Object(n.jsx)(m.b,{})})]}),this.state.showInfo&&Object(n.jsx)("p",{children:this.props.info})]})}}]),a}(s.a.Component)),p=[{id:1,title:"how to login?",info:"go to login page"},{id:2,title:"how to signup?",info:"go to signup page"},{id:3,title:"how to crack JEE ?",info:"Work hard"}],f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"questions and answers about login"}),Object(n.jsx)("section",{className:"info",children:p.map((function(e){return Object(n.jsx)(j,{title:e.title,info:e.info},e.id)}))})]})})}}]),a}(s.a.Component),g=(a(38),a(12)),x=[{id:1,url:"/",text:"Home"},{id:2,url:"/experience",text:"Experience"},{id:3,url:"/FAQS",text:"FAQS"},{id:4,url:"/reviews",text:"Reviews"},{id:5,url:"/tours",text:"Tours"},{id:6,url:"/menu",text:"Menu"},{id:7,url:"/birthdaytoday",text:"Birthday today"}],O=(g.d,g.g,g.e,g.c,a.p+"static/media/logo.6ce24c58.svg"),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showLinks:!1},n}return Object(l.a)(a,[{key:"toggle",value:function(e){this.setState({showLinks:e})}},{key:"render",value:function(){var e=this,t=this.state.showLinks,a=t?"nav-links-container show-nav-container":"nav-links-container";return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-center",children:[Object(n.jsxs)("div",{className:"nav-header",children:[Object(n.jsx)("img",{className:"nav-logo",src:O,alt:"logo"}),Object(n.jsx)("button",{className:"nav-toggle",onClick:function(){return e.toggle(!t)},children:Object(n.jsx)(g.b,{})})]}),Object(n.jsx)("div",{className:a,children:Object(n.jsx)("ul",{className:"nav-links",children:x.map((function(e){var t=e.id,a=e.url,i=e.text;return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/Learning-React.js"+a,children:i})},t)}))})})]})})}}]),a}(s.a.Component),y=a(20),k=(a(39),[{id:1,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png",name:"Deepak Kumar",title:"Software developer",quotes:"Very happy aftre taking this course.Amazing teachers and faculty support Got a chance to lean a lot from awesome people like yu=ou guys"},{id:2,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png",name:"Abhishek Kumar",title:"Web developer",quotes:"Very happy aftre taking this course.Amazing teachers and faculty support Got a chance to lean a lot from awesome people like yu=ou guys"},{id:3,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png",name:"Vineet Kumar",title:"Android developer",quotes:"Very happy aftre taking this course.Amazing teachers and faculty support Got a chance to lean a lot from awesome people like yu=ou guys"},{id:4,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png",name:"Ashutosh Verma",title:"Data scientist",quotes:"Very happy aftre taking this course.Amazing teachers and faculty support Got a chance to lean a lot from awesome people like yu=ou guys"}]),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currIndex:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.autoSlide=setInterval((function(){return e.setIndex(e.state.currIndex+1)}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.autoSlide)}},{key:"setIndex",value:function(e){e>=k.length?e=0:e<0&&(e=k.length-1),this.setState({currIndex:e})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("section",{className:"slider-section",children:[Object(n.jsx)("div",{className:"slider-title",children:Object(n.jsxs)("h2",{children:[Object(n.jsx)("span",{children:"/"}),"reviews"]})}),Object(n.jsxs)("div",{className:"slider-section-center",children:[k.map((function(t,a){var i=t.id,s=t.image,r=t.name,c=t.title,o=t.quotes,l="singleSlide nextSlide";return a===e.state.currIndex&&(l="singleSlide activeSlide"),(a===e.state.currIndex-1||0===e.state.currIndex&&a===k.length-1)&&(l="singleSlide lastSlide"),Object(n.jsxs)("div",{className:l,children:[Object(n.jsx)("img",{src:s,alt:"profile",className:"slider-person-img"}),Object(n.jsx)("h4",{children:r}),Object(n.jsx)("p",{className:"slider-title",children:c}),Object(n.jsx)("p",{className:"slider-text",children:o}),Object(n.jsx)(g.f,{className:"slider-icon"})]},i)})),Object(n.jsx)("button",{className:"slider-prev",onClick:function(){return e.setIndex(e.state.currIndex-1)},children:Object(n.jsx)(y.a,{})}),Object(n.jsx)("button",{className:"slider-next",onClick:function(){return e.setIndex(e.state.currIndex+1)},children:Object(n.jsx)(y.b,{})})]})]})}}]),a}(s.a.Component),N=(a(40),[{order:3,title:"Full Stack Web Developer",dates:"December 2015 - Present",duties:["Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.","Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.","Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."],company:"TCS"},{order:2,title:"Front-End Engineer",dates:"May 2015 - December 2015",duties:["Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.","Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester","Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1","Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"],company:"FLIPKART"},{order:1,title:"Engineering Intern",dates:"May 2014 - September 2015",duties:["I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.","YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.","Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."],company:"AMAZON"}]),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={value:0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=N[this.state.value],a=t.title,i=t.dates,s=t.duties,r=t.company;return Object(n.jsxs)("section",{className:"tab-section",children:[Object(n.jsxs)("div",{className:"tab-title",children:[Object(n.jsx)("h2",{children:"my expierence"}),Object(n.jsx)("div",{className:"tab-underline"})]}),Object(n.jsxs)("div",{className:"jobs-center",children:[Object(n.jsx)("div",{className:"tab-btn-container",children:N.map((function(t,a){return Object(n.jsx)("button",{onClick:function(){return e.setState({value:a})},className:"job-btn ".concat(a===e.state.value&&"active-btn"),children:t.company},t.id)}))}),Object(n.jsxs)("div",{className:"job-info",children:[Object(n.jsx)("h3",{children:a}),Object(n.jsx)("h4",{children:r}),Object(n.jsx)("p",{className:"job-date",children:i}),s.map((function(e,t){return Object(n.jsxs)("div",{className:"job-desc",children:[Object(n.jsx)(g.a,{className:"job-icon"}),Object(n.jsx)("p",{children:e})]},t)}))]})]}),Object(n.jsx)("button",{type:"button",className:"tab-info-btn",children:"more info"})]})}}]),a}(s.a.Component),M=[{id:1,name:"Lily Verma",age:19,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png"},{id:2,name:"Shreya Pandey",age:22,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png"},{id:3,name:"Deepak Kumar",age:21,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png"},{id:4,name:"Christopher Nolan",age:38,image:"https://cdn3.iconfinder.com/data/icons/online-user-1/120/user-2-512.png"}],I=function(e){var t=e.people;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){var t=e.id,a=e.name,i=e.age,s=e.image;return Object(n.jsxs)("div",{className:"bithday-person",children:[Object(n.jsx)("img",{src:s,alt:a}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:a}),Object(n.jsxs)("p",{children:[i," years"]})]})]},t)}))})},H=(a(41),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={people:M},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("main",{className:"birthday-main",children:Object(n.jsxs)("section",{className:"birthday-container",children:[Object(n.jsxs)("h3",{children:[this.state.people.length," birthdays today"]}),Object(n.jsx)("br",{}),Object(n.jsx)(I,{people:this.state.people}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){return e.setState({people:[]})},children:"clear all"})]})})}}]),a}(s.a.Component)),S=a(23),C=a(14),G=(a(26),[{id:1,name:"Udaipur Tourism",image:"https://www.holidify.com/images/bgImages/UDAIPUR.jpg",info:'Udaipur, also known as the City of Lakes, is the crown jewel of the state of Rajasthan. It is surrounded by the beautiful Aravalli Hills in all directions, making this city as lovely as it is. This "Venice of the East" has an abundance of natural beauty, mesmerising temples and breathtaking architecture which makes it a must-visit destination in India.  A boat ride through the serene waters of Lake Pichola will be enough to prove to you why Udaipur is the pride of Rajasthan.',price:"5,228"},{id:2,name:"Goa Tourism",image:"https://www.holidify.com/images/bgImages/GOA.jpg",info:"Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24x7. The laid-backness (susegad) of Goa attracts as many international tourists as it does Indians, or even more so.",price:"4,100"},{id:3,name:"Delhi Tourism",image:"https://www.holidify.com/images/bgImages/DELHI.jpg",info:"The capital of India, Delhi is a cosmopolitan city with a historic old Delhi and the modern New Delhi. From historical monuments to crowded shopping malls, from an extensive network of the modern metro system to Delhi University campus, Dilli has multiple personalities and is considered to be the city with a heart.",price:"7,000"}]),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={readMore:!1},n}return Object(l.a)(a,[{key:"setReadMore",value:function(e){this.setState({readMore:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,i=t.name,s=t.image,r=t.info,c=t.price;return Object(n.jsxs)("div",{className:"single-tour",children:[Object(n.jsx)("img",{src:s,alt:i}),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("div",{className:"tour-info",children:[Object(n.jsx)("h4",{children:i}),Object(n.jsxs)("h4",{className:"tour-price",children:["\u20b9 ",c]})]}),Object(n.jsxs)("p",{children:[this.state.readMore?r:"".concat(r.substring(0,200),"..."),Object(n.jsx)("button",{onClick:function(){return e.setReadMore(!e.state.readMore)},children:this.state.readMore?"show less":"  read more"})]}),Object(n.jsx)("button",{className:"delete-btn",onClick:function(){return e.props.update(a)},children:"not interested"})]})]})}}]),a}(s.a.Component);function B(e){var t=this.state.tourData;this.setState({tourData:t.filter((function(t){return t.id!==e}))})}var L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tourData:G},B=B.bind(Object(C.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("main",{className:"tour-main",children:Object(n.jsxs)("section",{className:"tour-section",children:[Object(n.jsxs)("div",{className:"tour-title",children:[Object(n.jsx)("h2",{children:"my tours"}),Object(n.jsx)("div",{className:"tour-underline"})]}),Object(n.jsx)("div",{children:0===this.state.tourData.length?Object(n.jsx)("center",{children:Object(n.jsx)("button",{className:"tour-reload-btn",onClick:function(){return e.setState({tourData:G})},children:"Refresh"})}):this.state.tourData.map((function(e){return Object(n.jsx)(A,Object(S.a)(Object(S.a)({},e),{},{update:B}),e.id)}))})]})})}}]),a}(s.a.Component),q=a(31),V=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=842&q=80",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"https://images.unsplash.com/photo-1546241126-da278b8ec3ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],R=(a(18),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"menu-cat-container",children:this.props.categories.map((function(t,a){return Object(n.jsx)("button",{type:"button",className:"menu-filter-btn",onClick:function(){return e.props.filterItems({category:t})},children:t},a)}))})}}]),a}(s.a.Component)),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"menu-section-center",children:this.props.items.map((function(e){var t=e.id,a=e.title,i=e.img,s=e.desc,r=e.price;return Object(n.jsxs)("div",{className:"menu-item",children:[Object(n.jsx)("img",{src:i,alt:a,className:"menu-item-photo"}),Object(n.jsxs)("div",{className:"menu-item-info",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h4",{children:a}),Object(n.jsxs)("h4",{className:"menu-item-price",children:["$",r]})]}),Object(n.jsx)("p",{className:"menu-item-text",children:s})]})]},t)}))})}}]),a}(s.a.Component),P=["all"].concat(Object(q.a)(new Set(V.map((function(e){return e.category})))));function W(e){var t=e.category;if("all"!==t){var a=V.filter((function(e){return e.category===t}));this.setState({menuData:a})}else this.setState({menuData:V})}var X=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={menuData:V},W=W.bind(Object(C.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("section",{className:"menu",children:[Object(n.jsxs)("div",{className:"menu-title",children:[Object(n.jsx)("h2",{children:"My menu"}),Object(n.jsx)("div",{className:"menu-underline"})]}),Object(n.jsx)(R,{categories:P,filterItems:W}),Object(n.jsx)(F,{items:this.state.menuData})]})}}]),a}(s.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(v,{}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.b,{path:"/Learning-React.js/",exact:!0,children:Object(n.jsx)(b.a,{to:"/Learning-React.js/tours"})}),Object(n.jsx)(b.b,{path:"/Learning-React.js/birthdaytoday",exact:!0,component:H}),Object(n.jsx)(b.b,{path:"/Learning-React.js/FAQS",exact:!0,component:f}),Object(n.jsx)(b.b,{path:"/Learning-React.js/experience",exact:!0,component:D}),Object(n.jsx)(b.b,{path:"/Learning-React.js/reviews",exact:!0,component:w}),Object(n.jsx)(b.b,{path:"/Learning-React.js/tours",exact:!0,component:L}),Object(n.jsx)(b.b,{path:"/Learning-React.js/menu",exact:!0,component:X})]})]})}}]),a}(s.a.Component),Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(T,{}),document.getElementById("root")),Y()}},[[47,1,2]]]);
//# sourceMappingURL=main.94663b35.chunk.js.map