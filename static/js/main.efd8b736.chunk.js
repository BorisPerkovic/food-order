(this["webpackJsonpfood-order"]=this["webpackJsonpfood-order"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1ynEL",summary:"CartItem_summary__15wX8",price:"CartItem_price__2u4tq",amount:"CartItem_amount__WqciV",actions:"CartItem_actions__1_QmK"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1y9yc",total:"Cart_total__2LAOI",actions:"Cart_actions__1WI32","button--alt":"Cart_button--alt__2WIAx",button:"Cart_button__3J9Wh"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3BjUy",icon:"HeaderCartButton_icon__gO1XA",badge:"HeaderCartButton_badge__2RwRJ",bump:"HeaderCartButton_bump__1GGfc"}},,function(e,t,n){e.exports={meal:"MealItem_meal__UWJfk",description:"MealItem_description__26ZHw",price:"MealItem_price__20WiJ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__22jKJ",modal:"Modal_modal__xsIXF","slide-down":"Modal_slide-down__I_M9-"}},,function(e,t,n){e.exports={header:"Header_header__2lbg1","main-image":"Header_main-image__13yqf"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1bvzk"}},function(e,t,n){e.exports={input:"Input_input__2nCVe"}},function(e,t,n){e.exports={form:"MealItemForm_form__V36Xh"}},function(e,t,n){e.exports={card:"Card_card__3exHY"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__fhxZ_","meals-appear":"AvailableMeals_meals-appear__3knms"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(2)),r=n(1),o=n.n(r),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(8),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(d).items,m=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(s.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(s.jsx)("span",{className:u.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Your Cart"}),Object(s.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),O=n.n(x),h=function(e){return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsxs)("header",{className:O.a.header,children:[Object(s.jsx)("h1",{children:"Food Order - ReactMeals"}),Object(s.jsx)(j,{onClick:e.onShowCart})]}),Object(s.jsx)("div",{className:O.a["main-image"],children:Object(s.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(15),f=n.n(p),_=function(){return Object(s.jsxs)("section",{className:f.a.summary,children:[Object(s.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(s.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(s.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(3),C=n(16),A=n.n(C),g=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:A.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(v.a)({ref:t},e.input))]})})),y=n(17),I=n.n(y),N=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(s.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||n<1||n>5?c(!1):e.onAddToCart(a)},children:[Object(s.jsx)(g,{ref:o,label:"Amount",input:{id:"Amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:"+ Add"}),!a&&Object(s.jsx)("p",{children:"Please enter a valid amount ( 1-5 )"})]})},w=n(10),M=n.n(w),k=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:M.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("div",{className:M.a.description,children:e.description}),Object(s.jsx)("div",{className:M.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(N,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(18),F=n.n(H),B=function(e){return Object(s.jsx)("div",{className:F.a.card,children:e.children})},R=n(19),S=n.n(R),E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],D=function(){var e=E.map((function(e){return Object(s.jsx)(k,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(s.jsx)("section",{className:S.a.meals,children:Object(s.jsx)(B,{children:Object(s.jsx)("ul",{children:e})})})},J=function(){return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(D,{})]})},T=n(11),V=n.n(T),W=function(e){return Object(s.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},z=function(e){return Object(s.jsx)("div",{className:V.a.modal,children:Object(s.jsx)("div",{className:V.a.content,children:e.children})})},q=document.getElementById("overlay"),P=function(e){return Object(s.jsxs)(o.a.Fragment,{children:[c.a.createPortal(Object(s.jsx)(W,{onClose:e.onClose}),q),c.a.createPortal(Object(s.jsx)(z,{children:e.children}),q)]})},X=n(4),G=n.n(X),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:G.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:G.a.summary,children:[Object(s.jsx)("span",{className:G.a.price,children:t}),Object(s.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:G.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),K=n.n($),L=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(e)},o=Object(s.jsx)("ul",{className:K.a["cart-items"],children:t.items.map((function(e){return Object(s.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(s.jsxs)(P,{onClose:e.onClose,children:[o,Object(s.jsxs)("div",{className:K.a.total,children:[Object(s.jsx)("span",{children:"Total Amount"}),Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:K.a.actions,children:[Object(s.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(s.jsx)("button",{className:K.a.button,children:"Order"})]})]})},U=n(14),Z={items:[],totalAmount:0},Q=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(v.a)(Object(v.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(U.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(o=Object(U.a)(e.items))[s]=m}return{items:o,totalAmount:d}}return Z},ee=function(e){var t=Object(r.useReducer)(Q,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(s.jsx)(d.Provider,{value:o,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(ee,{children:[n&&Object(s.jsx)(L,{onClose:function(){a(!1)}}),Object(s.jsx)(h,{onShowCart:function(){a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(J,{})})]})};c.a.render(Object(s.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.efd8b736.chunk.js.map