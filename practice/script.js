
// const mainHeading = document.getElementById('main-heading');

// mainHeading.textContent = "Fruit World";
// mainHeading.style.color = 'orange';


// const header = document.getElementById('header');
// header.style.backgroundColor = 'green';
// header.style.borderBottom = '3px solid yellow'

// const ele = document.createElement('p');
// ele.textContent = "WELCOME BACK TO FOOD WORLD";

// header.append(ele)

// const basketHeading = document.getElementById('basket-heading');
// basketHeading.style.color = 'green';

// const fruits = document.getElementById('fruits');

// const li = document.createElement('li');
// li.textContent = 'Mongo';
// li.className = 'fruit'

// fruits.append(li);


// const fruit = document.getElementsByClassName('fruit');

// for(let item of fruit){
//     item.style.color = 'red'
// }



// const thanks = document.getElementById('thanks')

// const p = document.createElement('p');
// p.textContent = 'Please visit us again';
// thanks.append(p);



//  Second Class

// const fruit = document.getElementsByClassName('fruit');

// fruit[2].style.color = 'yellow';

// for(let i = 0; i < fruit.length; i++){
//     fruit[i].style.fontWeight = 'bold'
// }


// Third Class 

// const li = document.getElementsByTagName('li');

// li[5].style.color = 'red'

// for(let item of li){
//     item.style.fontStyle = 'italic'
// }


//  Fourth Class

// const mainHeading = document.querySelector('#main-heading');

// mainHeading.style.textAlign = 'center';

// const fruits = document.querySelector('.fruits');

// fruits.style.backgroundColor = 'grey';
// fruits.style.margin = '30px';
// fruits.style.padding = '30px';
// fruits.style.width = '50%';
// fruits.style.borderRadius = '5px';
// fruits.style.listStyleType = 'none';

// const basketHeading = document.querySelector('h2');

// basketHeading.style.marginLeft = '30px';
// basketHeading.style.color = 'brown';

// const fruit = document.querySelectorAll('.fruit');
// for(let item of fruit){
//     item.style.backgroundColor = 'white';
//     item.style.padding = '10px';
//     item.style.margin = '10px';
//     item.style.borderRadius = '5px';
// }

// const oddItems = document.querySelectorAll('.fruit:nth-child(odd)');

// for(let item of oddItems){
//     item.style.backgroundColor = 'lightgrey';
// }

// const evenItems = document.querySelectorAll('.fruit:nth-child(even)');

// for(let item of evenItems){
//     item.style.backgroundColor = 'brown';
//     item.style.color = 'white';
// }


//  Fifth Class


// const divs = document.getElementsByTagName('div');

// const firstDiv = divs[0];
// const h1 = firstDiv.querySelector('h1');

// const h3 = document.createElement('h3');
// h3.innerText = "Buy high quality organic fruits online";
// h3.style.fontStyle = 'italic';
// firstDiv.append(h3)

// const secondDiv = divs[1];

// const p = document.createElement('p');

// p.innerText = "Total fruits: 4";
// p.id = "fruits-total";

// const ul = secondDiv.querySelector('ul');

// secondDiv.insertBefore(p, ul);


//  Six Class

const form = document.querySelector('form');

const fruits = document.querySelector('.fruits');

const addBtn = form.querySelector('button');

const descInput = document.createElement('input');

descInput.type = 'text';
descInput.placeholder = 'Enter fruit description';

form.insertBefore(descInput, addBtn);


const existingFruits = document.querySelectorAll('.fruit');

for (let i = 0; i < existingFruits.length; i++){

    const editBtn = document.createElement('button');

    editBtn.textContent = 'Edit';

    editBtn.className = 'edit-btn';

    existingFruits[i].appendChild(editBtn);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();


    const fruitsToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');

    const newLiText = document.createTextNode(fruitsToAdd.value);

    newLi.appendChild(newLiText);
    newLi.className = 'fruit';

    // Description
    const p = document.createElement('p');
    const italic = document.createElement('i');

    italic.textContent = descInput.value;

    p.appendChild(italic);
    newLi.appendChild(p);
    descInput.value = '';



    const editBtn = document.createElement('button');

    const editBtnText = document.createTextNode('Edit');

    editBtn.appendChild(editBtnText);

    editBtn.className = 'edit-btn';

    newLi.appendChild(editBtn)


    const deleteBtn = document.createElement('button');

    const deleteBtnText = document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);

    deleteBtn.className = 'delete-btn';

    newLi.appendChild(deleteBtn);

    fruits.appendChild(newLi);

    fruitsToAdd.value = '';



});

fruits.addEventListener('click', function (event) {

    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})



fruits.addEventListener('click', function (event) {


    if (event.target.classList.contains('edit-btn')) {

        const fruitItem = event.target.parentElement;

        const oldFruitName = fruitItem.firstChild.textContent;

        document.getElementById('fruit-to-add').value = oldFruitName;

        fruits.removeChild(fruitItem);
    }
})



const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {

    const textEntered = event.target.value.toLowerCase();

    const fruitItmes = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruitItmes.length; i++){
        const currentFruitText = fruitItmes[i].firstChild.textContent.toLowerCase();

        const descriptionTag = fruitItmes[i].querySelector('p');

        const currentFruitDescription = descriptionTag ? descriptionTag.textContent.toLowerCase() : '';        

        if(currentFruitText.indexOf(textEntered) === -1 && currentFruitDescription.indexOf(textEntered) === -1) {
            fruitItmes[i].style.display = 'none';
        }
        else {
            fruitItmes[i].style.display = 'flex';
        }
    }
})


