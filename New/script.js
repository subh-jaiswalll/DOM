


const form = document.querySelector('form');

const fruits = document.querySelector('.fruits');


const existingFruits = document.querySelectorAll('.fruit');

for (let i = 0; i < existingFruits.length; i++){

    const editBtn = document.createElement('button');

    editBtn.textContent = 'Edit';

    editBtn.className = 'edit-btn';

    existingFruits[i].appendChild(editBtn);
}
form.addEventListener('submit', function(event){
    event.preventDefault();


    const fruitToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.className = 'fruit'

    const newLiText = document.createTextNode(fruitToAdd.value);

    newLi.appendChild(newLiText);


    const editButton = document.createElement('button');
    const editButtonText = document.createTextNode('Edit');

    editButton.className = "edit-btn";

    editButton.appendChild(editButtonText);
    newLi.appendChild(editButton);

    const deleteButton = document.createElement('button');
    const deleteButtonText = document.createTextNode('X');

    deleteButton.className = 'delete-btn';

    deleteButton.appendChild(deleteButtonText);

    newLi.appendChild(deleteButton);

    fruits.appendChild(newLi);

    console.log(newLi);
})


fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('delete-btn')){

        const deleteItem = event.target.parentElement;

        fruits.removeChild(deleteItem);
    }
})

fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('edit-btn')){

        const fruitItem = event.target.parentElement;

        const oldFruitName = fruitItem.firstChild.textContent;

        document.getElementById('fruit-to-add').value = oldFruitName;

        fruits.removeChild(fruitItem);
    }
})