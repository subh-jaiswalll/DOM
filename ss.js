// const mainContainer = document.getElementById('main-container');
// mainContainer.style.border = '2px solid red'; // Puts a red border around the main div
// mainContainer.style.padding = '20px'
// mainContainer.style.margin = '20px';

// const itemList = document.getElementById('item-list');
// console.log(itemList);


// const tagName = document.getElementsByTagName('p');

// for(let i = 0; i < tagName.length; i++){
//     tagName[i].style.color = 'red';
// }

// const container = document.getElementsByClassName('container');

// for(let i = 0; i < container.length; i++){
//     container[i].style.background = 'yellow';
// }
// const containers = document.getElementsByClassName('container');

// for(let i = 0; i < containers.length; i++) {
//     containers[i].style.color = 'green';
// }

// const container = document.querySelector('.container');
// container.style.color = 'green';

// // const mainContainer = document.querySelectorAll('#main-container');
// // mainContainer.style.backgroundColor = 'green';

// // const product = document.getElementById('product-card');
// // console.log(product);

// // const desc = document.getElementById('description');
// // console.log(desc.textContent);
// // Output: "These headphones have noise-cancelling features."
// // Notice the <strong> tags are gone.

// // const productName = document.getElementById('product-name');
// // console.log(productName.textContent);
// // // Output: "Smart Headphones SALE"
// // // It includes text from hidden elements but ignores comments.


// // const desc = document.getElementById('description');

// // // Let's try to inject some HTML
// // desc.textContent = "Click <a href='#'>here</a> to win!";
// // console.log(desc.innerHTML);

// // The browser will display the literal text, not a clickable link:
// // "Click <a href='#'>here</a> to win!"

// const desc = document.getElementById('description');

// // This is powerful and useful for creating new elements.
// desc.innerHTML = "Updated features: <strong>Active Noise Cancelling</strong> and <em>Bluetooth 5.0</em>.";
// The browser will correctly render the bold and italic text.

// SECURITY RISK: What if the string comes from a malicious user?
// let userInput = `<img src="x" onerror="alert('You have been hacked!')">`;
// desc.innerHTML = userInput; // This would execute the malicious script!


// desc.textContent = "Hello World"

// Step 1: Select the Target Element
const myButton = document.getElementById('action-button');
const statusText = document.getElementById('status-text');

// // Step 2: Define the Handler Function (the "action plan")
// // This function will be executed when the event occurs.
// function onButtonClick() {
//   console.log("Button was clicked!");
//   statusText.textContent = "Action Performed!";
//   statusText.style.color = 'green';
// }

// // Step 3: Attach the Listener
// // We tell the button: "Hey, start listening for a 'click' event.
// // When you hear one, execute the `onButtonClick` function."
// myButton.addEventListener('click', onButtonClick);

myButton.addEventListener('mouseover', () =>{
    console.log("Button was clicked");
    statusText.textContent = "Action Performed";
    statusText.style.color = 'green'
})

// const intervalId = setInterval(() => {
//     console.log("Hello");
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped");
// }, 5000);

// const time = setTimeout(() =>{
//     console.log("Hello")
// }, 1000)
// const set = setInterval(() =>{
//     console.log("interval")
// }, 1000)

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });

// The function says "Here's a Promise, use .then()"
// const promise = fetch('/api/data');

// promise.then(result => {
//   console.log('Result!', result);  // Called later
// });

// JavaScript never waits, .then() callback called later

// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // At this moment: Promise is PENDING

    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Success!"); // → Promise becomes FULFILLED
        } else {
            reject("Failed!");   // → Promise becomes REJECTED
        }
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
// myPromise is PENDING for 2 seconds
// Then becomes FULFILLED with value "Success!"

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve({ data: "Some data" });
            } else {
                reject("Network error");
            }
        }, 1000);
    });
}

// Consuming the promise:
fetchData()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Request completed");
    });
