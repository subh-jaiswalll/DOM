// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;

    const email = event.target.email.value;

    const phone = event.target.phone.value;

    localStorage.setItem(email, `${username} - ${email} - ${phone}`);

    const ul = document.querySelector('ul');

    const li = document.createElement('li');

    li.textContent = `${username} - ${email} - ${phone}`;

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';

    deleteBtn.className = 'delete-btn';

    deleteBtn.onclick = function () {
        localStorage.removeItem(email);

        ul.removeChild(li);
    };

    li.appendChild(deleteBtn);

    ul.appendChild(li);

}

window.handleFormSubmit = handleFormSubmit;