// Plain DOM programming
// let hello = document.createElement('h1');
// hello.textContent = 'Ello m8';

// jQuery
// let jqHello = $('<h1>', {
//     text: 'Ello'
// }); 

// React!!!!!
let hello = React.createElement('h1',null,'Ello React!');
ReactDOM.render(hello, document.querySelector('[data-root]'));