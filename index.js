// Plain DOM programming
// let hello = document.createElement('h1');
// hello.textContent = 'Ello m8';

// jQuery
// let jqHello = $('<h1>', {
//     text: 'Ello'
// }); 

// React!!!!!
//alias for react.createElement
const h = React.createElement; //creates virtual DOM element

let kebabs = [
    'chicken hearts',
    'marinated mushrooms',
    'beef'
];

// let items = kebabs.map((item) => {
//     let virtualItem = h('li',null, item);
//     return virtualItem
// });
// let title = h('h1',null,'Kebabs!');
// let list = h('ul', null, items);
// let img = h('img', null, 'https://files.slack.com/files-pri/T0569RDC6-FBT1FCZMM/image.png');
let main = h('div', null, [
    h('h1', { className: 'header' }, 'Kebabs!'), 
    h('ul', null, kebabs.map(item => h('li', null, item))),
    h('img', { src: 'image.png', className: 'img' })
]);

JSX - short hand
let main2 = (<div>
    <h1 className='header'>Kebabs!</h1>
    <ul>
        {kebabs.map(item => h('li', null, item))}
    </ul>
    <img src='image.png' className='kebab-image'/>
    </div>);


ReactDOM.render(main, document.querySelector('[data-root]')); //converts virtual DOM elements to actual DOM elements