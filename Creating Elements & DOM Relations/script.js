
const divs = document.getElementsByTagName('div');

const firstDivs = divs[0];

const h1 = firstDivs.querySelector('h1');

const h3 = document.createElement('h3');
h3.innerText = 'Buy high quality organic fruits online';
h3.style.fontStyle = 'italic';

firstDivs.append(h3);



const secondDivs = divs[1];

const para = document.createElement('p');
para.innerText = 'Total fruits: 4';
para.id = 'fruits-total';

const ul = secondDivs.querySelector('ul');

secondDivs.insertBefore(para, ul);

// <!-- 
// Using DOM manipulation, do the following (Don’t modify the HTML file):

// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

// 2. Make the sub-heading text italic.

// 2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total". -->