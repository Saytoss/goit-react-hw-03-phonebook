(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactLiBtn:"ContactListItem_contactLiBtn__3WUMP",contactLi:"ContactListItem_contactLi__1frhh",contactLiP:"ContactListItem_contactLiP__1OCsO"}},12:function(t,e,n){t.exports={title:"filter_title__3nR-i",input:"filter_input__11X79"}},15:function(t,e,n){t.exports=n(23)},2:function(t,e,n){t.exports={contactLabel:"ContactForm_contactLabel__YnNbK",contactInput:"ContactForm_contactInput__2ovZ0",contactBtn:"ContactForm_contactBtn__5I3Fv"}},23:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(1),r=n.n(o),l=n(11),i=n(5),u=n(6),s=n(7),m=n(9),b=n(8),d=n(2),h=n.n(d),p=n(27),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeHandler=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.submitHandler=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,o={id:Object(p.a)(),name:a,number:c};t.props.addContact(o),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.submitHandler},c.a.createElement("label",{htmlFor:"nameInput",className:h.a.contactLabel},"Name:",c.a.createElement("input",{type:"text",name:"name",value:e,placeholder:"enter name...",onChange:this.changeHandler,id:"nameInput",className:h.a.contactInput})),c.a.createElement("label",{htmlFor:"numberInput",className:h.a.contactLabel},"Number:",c.a.createElement("input",{className:h.a.contactInput,type:"tel",name:"number",value:n,placeholder:"enter number...",onChange:this.changeHandler,id:"numberInput"})),c.a.createElement("button",{type:"submit",disabled:!e.length||!n.length,className:h.a.contactBtn},"Add contact"))}}]),n}(a.Component),C=n(12),v=n.n(C),g={display:"block"},y=function(t){var e=t.onChange;return c.a.createElement("label",{htmlFor:"filterInput",className:v.a.title},"Find contacts by name",c.a.createElement("input",{className:v.a.input,type:"text",onChange:e,name:"filter",style:g,id:"filterInput"}))},E=n(10),_=n.n(E),I=function(t){var e=t.name,n=t.number,a=t.onDelete;return c.a.createElement("li",{className:_.a.contactLi},c.a.createElement("p",{className:_.a.contactLiP},e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:_.a.contactLiBtn},"delete"))},O=function(t){var e=t.contacts,n=t.onDelete;return c.a.createElement("ul",null,e.length?e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(I,{key:e,name:a,number:o,onDelete:function(){return n(e)}})})):c.a.createElement("p",null,"no contact with such name in your phone "))},L=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}},N=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}},w=n(4),j=(n(20),L),S=N,k=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeHandler=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.deleteContactbyId=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(l.a)(n)})},t.addContact=function(e){var n=e.name;t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase().trim())?(w.b.configure(),w.b.error("".concat(n," is already in contact list"),{position:w.b.POSITION.TOP_CENTER,autoClose:8e3,delay:200,transition:w.a})):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.filterContactsByName=function(){var e=t.state,n=e.contacts,a=e.filter;if(n.length)return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){S("contacts")&&this.setState({contacts:Object(l.a)(S("contacts"))})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&j("contacts",this.state.contacts)}},{key:"render",value:function(){var t=this.state.contacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(f,{addContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),t.length>1&&c.a.createElement(y,{onChange:this.changeHandler}),c.a.createElement(O,{contacts:this.filterContactsByName(),onDelete:this.deleteContactbyId}))}}]),n}(a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a6ae4975.chunk.js.map