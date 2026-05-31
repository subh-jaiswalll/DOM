let form = document.getElementsByTagName('form')[0];


let descriptionInput = document.createElement('input');

descriptionInput.type = 'text';
descriptionInput.id = 'description';

descriptionInput.placeholder = 'Enter fruit description';

let button = form.querySelector('button');

form.insertBefore(descriptionInput, button);

let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }

    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.

    let fruitName = document.getElementById('fruit-to-add').value;

    let li = document.createElement('li');

    li.className = 'fruit';

    li.appendChild(document.createTextNode(fruitName));

    let p = document.createElement('p');

    p.textContent = fruitDescription;

    p.style.fontStyle = 'italic';

    li.appendChild(p);

    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    li.appendChild(deleteBtn);

    fruititems.appendChild(li);



    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.



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