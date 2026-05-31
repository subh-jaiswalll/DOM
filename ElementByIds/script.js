
const mainheading = document.getElementById('main-heading');
mainheading.textContent = 'Fruit World';
mainheading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';

header.style.borderBottom = '3px solid orange';

const basketFruit = document.getElementById('basket-heading');
basketFruit.style.color = 'green';

const thanks = document.getElementById('thanks');

const p = document.createElement('p');
p.textContent = 'Please visit us again!';
thanks.appendChild(p);