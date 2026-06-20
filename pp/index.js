

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

const existingFruit = document.querySelectorAll('.fruit')


const button = form.querySelector('button');
const description = document.createElement('input');
description.type = 'text';
description.placeholder = 'Enter Fruit description...';

form.insertBefore(description, button);



for(let i = 0; i < existingFruit.length; i++){

    const edit = document.createElement('button');
    edit.className = 'edit-btn';
    edit.textContent = 'Edit'
    existingFruit[i].appendChild(edit);
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const addToFruit = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.className = 'fruit'
    const newLiText = document.createTextNode(addToFruit.value);

    newLi.appendChild(newLiText);
    console.log(newLi);

    const p = document.createElement('p');
    const italic = document.createElement('i');

    italic.textContent = description.value;

    p.appendChild(italic);
    newLi.appendChild(p);
    description.value = '';


    const deleteBtn = document.createElement('button')
    const deteteBtnText = document.createTextNode('x');

    deleteBtn.appendChild(deteteBtnText);
    deleteBtn.className = 'delete-btn'

    newLi.appendChild(deleteBtn)

    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');

    editBtn.className = 'edit-btn';

    editBtn.appendChild(editBtnText);
    newLi.appendChild(editBtn)


    fruits.appendChild(newLi);

    addToFruit.value = '';

})

fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('delete-btn')){

        const fruitToDelete = event.target.parentElement;

        fruits.removeChild(fruitToDelete);
    }
})

fruits.addEventListener('click', function(event){

    if (event.target.classList.contains('edit-btn')) {

        const fruitItem = event.target.parentElement;

        const oldFruitName = fruitItem.firstChild.textContent;

        document.getElementById('fruit-to-add').value = oldFruitName;

        fruits.removeChild(fruitItem);
    }
})



const filter = document.getElementById('filter');

filter.addEventListener('keyup', function(event){

    const textEntered = event.target.value.toLowerCase();

    const fruitItem = document.getElementsByClassName('fruit');

    for(let i = 0; i < fruitItem.length; i++){

        const currentFruitText = fruitItem[i].firstChild.textContent.toLowerCase();

        if(currentFruitText.indexOf(textEntered) === -1){
            fruitItem[i].style.display = 'none';
        }
        else{
            fruitItem[i].style.display = 'flex';
        }
    }
})