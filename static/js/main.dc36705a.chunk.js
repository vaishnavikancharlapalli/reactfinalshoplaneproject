(this.webpackJsonpreactshoplanewebsite=this.webpackJsonpreactshoplanewebsite||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(18),i=c.n(n),r=(c(60),c(61),c(14)),a=c(8),l=(c(65),c(1)),j=Object(a.b)((function(e){return{cart:e.cart,total:e.Total}}),null)((function(e){return console.log(e.cart),console.log(e.total),Object(l.jsxs)("div",{className:"topbar",children:[Object(l.jsx)(r.b,{to:"/",className:"text",children:Object(l.jsxs)("h1",{className:"head1",children:["SHOP",Object(l.jsx)("span",{className:"head2",children:"LANE"})]})}),Object(l.jsxs)("div",{className:"aitems",children:[Object(l.jsx)(r.b,{to:"/",className:"text",children:Object(l.jsx)("a",{href:"",className:"item",children:"HOME"})}),Object(l.jsx)(r.b,{to:"/cloths",className:"text",children:Object(l.jsx)("a",{href:"",className:"item",children:"CLOTHINGS"})}),Object(l.jsx)(r.b,{to:"/accessories",className:"text",children:Object(l.jsx)("a",{href:"",className:"item",children:"ACCESSORIES"})})]}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{class:"fas fa-search"})}),Object(l.jsx)(r.b,{to:"/bookcart",style:{textDecoration:"none"},children:Object(l.jsxs)("span",{className:"icon",children:[Object(l.jsx)("i",{class:"fas fa-shopping-cart"}),Object(l.jsx)("span",{className:"cardcount",children:e.cart.length})]})}),Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{class:"fas fa-user-circle"})})]})]})})),o=c(5),d=c(10),h=c(51),b=c.n(h),O=(c(83),c(84),function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(b.a,Object(d.a)(Object(d.a)({},{dots:!0,infinite:!0,speed:300,autoplay:!0,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"caimg",src:"https://shoplane.netlify.app/img/img1.png"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"caimg",src:"https://shoplane.netlify.app/img/img2.png"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"caimg",src:"https://shoplane.netlify.app/img/img3.png"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"caimg",src:"https://shoplane.netlify.app/img/img4.png"})})]}))})}),x=(c(85),function(){return Object(l.jsxs)("div",{className:"services",children:[Object(l.jsx)("div",{class:"imgwrap",children:Object(l.jsx)("div",{class:"img",children:Object(l.jsx)("img",{class:"image",src:"https://shoplane.netlify.app/img/icon1.png"})})}),Object(l.jsx)("div",{class:"imgwrap",children:Object(l.jsx)("div",{class:"img",children:Object(l.jsx)("img",{class:"image",src:"https://shoplane.netlify.app/img/icon2.png"})})}),Object(l.jsx)("div",{class:"imgwrap",children:Object(l.jsx)("div",{class:"img",children:Object(l.jsx)("img",{class:"image",src:"https://shoplane.netlify.app/img/icon3.png"})})}),Object(l.jsx)("div",{class:"imgwrap",children:Object(l.jsx)("div",{class:"img",children:Object(l.jsx)("img",{class:"image",src:"https://shoplane.netlify.app/img/icon4.png"})})})]})}),p="GETPRODUCTS",u="ADDPRODUCTSTOCART",m="CLEARCART",f=c(31),g=c.n(f),v=c(134),y=c(140),N=c(139),T=c(138),w=c(137),C=c(141),S=Object(v.a)({root:{maxWidth:345}}),A=function(e){var t=e.id,c=e.name,s=e.preview,n=e.brand,i=e.price,a=S();return Object(l.jsx)(y.a,{className:a.root,style:{width:"200px",marginRight:"13px",height:"410px",marginBottom:"30px"},children:Object(l.jsx)(r.b,{to:"/product/".concat(t),style:{textDecoration:"none"},children:Object(l.jsxs)(N.a,{className:"oncardhover",children:[Object(l.jsx)(w.a,{component:"img",alt:n,image:s,title:c}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(C.a,{gutterBottom:!0,variant:"h5",component:"h3",className:"stylesofname",style:{fontSize:"16px"},children:c}),Object(l.jsx)(C.a,{gutterBottom:!0,variant:"h5",component:"h4",className:"brandstyles",style:{fontSize:"12px",marginTop:"5px"},children:n}),Object(l.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",style:{color:"teal",fontSize:"18px",marginTop:"5px"},children:i})]})]})})})},k=Object(a.b)((function(e){return{products:e.products}}),null)((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Clothing for Men and Women"}),Object(l.jsx)("div",{className:"cards",children:e.products.length&&e.products.slice(0,5).map((function(e){return Object(l.jsx)(A,Object(d.a)({},e))}))})]})})),P=Object(a.b)((function(e){return{products:e.products}}),null)((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Accessories  for Men and Women"}),Object(l.jsx)("div",{className:"cards",children:e.products.length&&e.products.slice(5,10).map((function(e){return Object(l.jsx)(A,Object(d.a)({},e))}))})]})})),R=Object(a.b)((function(e){return{products:e.products}}),(function(e){return{sendproductstostore:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))((function(e){return Object(s.useEffect)((function(){g.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){return e.sendproductstostore(t.data)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(x,{}),Object(l.jsx)(k,{}),Object(l.jsx)(P,{})]})})),D=c(35),E=(c(108),Object(a.b)(null,(function(e){return{addcart:function(t){return e(function(e){return{type:u,payload:e}}(t))}}}))((function(e){var t,c=Object(s.useState)([]),n=Object(D.a)(c,2),i=n[0],r=n[1],a=Object(s.useState)("0"),j=Object(D.a)(a,2),d=j[0],h=j[1],b=Object(o.f)().id;Object(s.useEffect)((function(){g.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/".concat(b)).then((function(e){r(e.data),u(e.data.preview)}))}),[]);var O=Object(s.useState)(null),x=Object(D.a)(O,2),p=x[0],u=x[1];return console.log(i.photos),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"mainpage",children:[Object(l.jsx)("div",{className:"leftpart",children:Object(l.jsx)("img",{className:"thumbnail",src:p})}),Object(l.jsxs)("div",{className:"rightpreview",children:[Object(l.jsxs)("div",{className:"product-description",children:[Object(l.jsx)("h1",{children:i.name}),Object(l.jsx)("h4",{className:"cardbrand",children:i.brand}),Object(l.jsxs)("h3",{children:["Price: Rs ",Object(l.jsx)("span",{id:"price",children:i.price})]}),Object(l.jsxs)("div",{class:"description",children:[Object(l.jsx)("h3",{children:"Description"}),Object(l.jsx)("p",{id:"description",children:i.description})]}),Object(l.jsxs)("div",{className:"product-preview",children:[Object(l.jsx)("h3",{children:"Product Review"}),Object(l.jsx)("div",{class:"previewImg",children:null===(t=i.photos)||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("img",{id:t,src:e,className:d==t?"active":"",onClick:function(){u(e),h(t)}})}))})]})]}),Object(l.jsx)("div",{class:"btn",children:Object(l.jsx)("button",{id:"add-to-cart",onClick:function(){return e.addcart(i)},children:"Add to Cart"})})]})]})})}))),F=(c(109),Object(a.b)((function(e){return{showcarts:e.Total,cart:e.cart}}),(function(e){return{setempty:function(){return e({type:m,payload:t});var t}}}))((function(e){var t,c;return Object(l.jsxs)("section",{id:"cart",children:[Object(l.jsx)("h1",{children:"CheckOut"}),Object(l.jsxs)("div",{class:"cart-container",children:[Object(l.jsxs)("div",{class:"left-side",children:[Object(l.jsxs)("p",{children:["Total Items: ",Object(l.jsx)("span",{id:"number-of-item",children:e.cart.length})]}),Object(l.jsx)("div",{class:"cart-items",id:"cart-item-container",children:null===(t=e.showcarts)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("div",{class:"itemscard",children:[Object(l.jsx)("img",{src:e.preview}),Object(l.jsxs)("div",{class:"detail",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("p",{children:["x",e.quantity]}),Object(l.jsx)("p",{children:e.price})]})]})}))})]}),Object(l.jsx)("div",{class:"right-side",children:Object(l.jsxs)("div",{class:"total-amount",children:[Object(l.jsx)("h2",{children:"Total Amount"}),Object(l.jsxs)("p",{children:["Total Amount: Rs ",Object(l.jsx)("span",{id:"total-amount",children:null===(c=e.showcarts)||void 0===c?void 0:c.reduce((function(e,t){return e+t.price*t.quantity}),0)})]}),Object(l.jsx)(r.b,{to:"/orderplaced",style:{textDecoration:"none"},children:Object(l.jsx)("button",{id:"place-order",onClick:function(){return e.setempty()},children:"Place Order"})})]})})]})]})}))),L=(c(110),function(){return Object(l.jsxs)("div",{class:"order-confirm",children:[Object(l.jsx)("img",{src:"https://shoplane.netlify.app/img/img_confirm.png",alt:""}),Object(l.jsx)("h3",{children:"Order Placed Successfully!!"}),Object(l.jsx)("p",{children:"We have sent you an email with the order details"})]})}),I=(c(111),function(){return Object(l.jsxs)("footer",{children:[Object(l.jsxs)("ul",{class:"online-store",children:[Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:"Online Store"})}),Object(l.jsx)("li",{children:"Men Clothing"}),Object(l.jsx)("li",{children:"Women Clothing"}),Object(l.jsx)("li",{children:"Men Accessories"}),Object(l.jsx)("li",{children:"Women Accessories"})]}),Object(l.jsxs)("ul",{class:"helpful-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:"Helpful Links"})}),Object(l.jsx)("li",{children:"Home"}),Object(l.jsx)("li",{children:"About"}),Object(l.jsx)("li",{children:"Contact"})]}),Object(l.jsxs)("ul",{class:"patners",children:[Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:"Patners"})}),Object(l.jsx)("li",{children:"Zara"}),Object(l.jsx)("li",{children:"Pantaloons"}),Object(l.jsx)("li",{children:"Levis"}),Object(l.jsx)("li",{children:"Ucb"}),Object(l.jsx)("li",{children:"+ Many More"})]}),Object(l.jsxs)("ul",{class:"address",children:[Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:"Address"})}),Object(l.jsx)("li",{children:"Building 101"}),Object(l.jsx)("li",{children:"Central Avenue"}),Object(l.jsx)("li",{children:"LA - 902722"}),Object(l.jsx)("li",{children:"United States"})]})]})});var M=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:R}),Object(l.jsx)(o.a,{path:"/cloths",component:k}),Object(l.jsx)(o.a,{path:"/accessories",component:P}),Object(l.jsx)(o.a,{path:"/product/:id",component:E}),Object(l.jsx)(o.a,{path:"/bookcart",component:F}),Object(l.jsx)(o.a,{path:"/orderplaced",component:L})]}),Object(l.jsx)(I,{})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,143)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))},W=c(53),q=c(41),H={products:[],cart:[],Total:[]},U=Object(W.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case p:return Object(d.a)(Object(d.a)({},e),{},{products:s});case u:var n=e.Total.length>0&&e.Total.findIndex((function(e){return e.id===s.id}));return e.Total.length&&-1!==n?e.Total[n].quantity=e.Total[n].quantity+1:(s.quantity=1,e.Total=[].concat(Object(q.a)(e.Total),[s])),Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(q.a)(e.cart),[s])});case m:return Object(d.a)(Object(d.a)({},e),{},{cart:[],Total:[]});default:return e}}));i.a.render(Object(l.jsx)(a.a,{store:U,children:Object(l.jsx)(M,{})}),document.getElementById("root")),B()},60:function(e,t,c){},61:function(e,t,c){},65:function(e,t,c){},85:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.dc36705a.chunk.js.map