
const main = document.getElementById('main-heading');
main.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketheading= document.querySelector('h2')
basketheading.style.color ='brown';
basketheading.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');

for(let i = 0 ; i < fruitItems.length; i++){
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.borderRadius = '5px';
}

const oddsFruitsItme = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i = 0 ; i < oddsFruitsItme.length; i++){
    oddsFruitsItme[i].style.backgroundColor = 'lightgrey';
}

const evenFruitsItme = document.querySelectorAll('.fruit:nth-child(even)');
for(let i = 0 ; i < evenFruitsItme.length; i++){
    evenFruitsItme[i].style.backgroundColor = 'brown';
    evenFruitsItme[i].style.color = 'white';
}