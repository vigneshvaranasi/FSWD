// Access Head
let head = document.head;
console.log('head: ', head);

// Access Body
let body = document.body;
console.log('body: ', body);

// Access Other Elements
let headingByQuerySelector = document.querySelector('h1');
console.log('headingByQuerySelector: ', headingByQuerySelector);

let paraClass = document.querySelector('.para');
console.log('paraClass: ', paraClass);

let paraId = document.querySelector('#paragraph');
console.log('paraId: ', paraId);

// Access Childrens of an Element
let div = document.querySelector('div');
console.log('div: ', div.children);
console.log('Child 1: ', div.children[0]);
console.log('Child 2: ', div.children[1]);
console.log('Child 3: ', div.children[2]);

// Access Parent of an Element
let parentOfDiv = div.parentElement;
console.log('parentOfDiv: ', parentOfDiv);

