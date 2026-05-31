const form = document.querySelector('form');

const fruits = document.querySelector('.fruits');


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