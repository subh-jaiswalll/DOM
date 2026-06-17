

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


