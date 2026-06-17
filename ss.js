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
// const myButton = document.getElementById('action-button');
// const statusText = document.getElementById('status-text');

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

// myButton.addEventListener('mouseover', () =>{
//     console.log("Button was clicked");
//     statusText.textContent = "Action Performed";
//     statusText.style.color = 'green'
// })

// // const intervalId = setInterval(() => {
// //     console.log("Hello");
// // }, 1000);

// // setTimeout(() => {
// //     clearInterval(intervalId);
// //     console.log("Interval stopped");
// // }, 5000);

// // const time = setTimeout(() =>{
// //     console.log("Hello")
// // }, 1000)
// // const set = setInterval(() =>{
// //     console.log("interval")
// // }, 1000)

// // fetch('https://jsonplaceholder.typicode.com/users')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.log("Error:", error);
// //   });

// // The function says "Here's a Promise, use .then()"
// // const promise = fetch('/api/data');

// // promise.then(result => {
// //   console.log('Result!', result);  // Called later
// // });

// // JavaScript never waits, .then() callback called later

// // Create a promise
// const myPromise = new Promise((resolve, reject) => {
//     // At this moment: Promise is PENDING

//     setTimeout(() => {
//         const success = true;

//         if (success) {
//             resolve("Success!"); // → Promise becomes FULFILLED
//         } else {
//             reject("Failed!");   // → Promise becomes REJECTED
//         }
//     }, 2000);
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// // myPromise is PENDING for 2 seconds
// // Then becomes FULFILLED with value "Success!"

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5;

//             if (success) {
//                 resolve({ data: "Some data" });
//             } else {
//                 reject("Network error");
//             }
//         }, 1000);
//     });
// }

// // Consuming the promise:
// fetchData()
//     .then((result) => {
//         console.log("Success:", result);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     })
//     .finally(() => {
//         console.log("Request completed");
//     });


// (function(){
//     console.log("Atul")
// }())

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function processUser(callback){
//     (callback("Atul"))
// }

// processUser(greet);

// function add(num){

//     return function(x){
//         return num * x;
//     }
// }

// const result = add(5);
// console.log(result(2))

// const  obj = {
//     name: "Atul",
//     greet: () => {
//         console.log(this.name)
//     }
// }

// obj.greet()

// function greet(city, country){
//     console.log(`Hello, I am ${this.name},from ${city}, ${country}`)
// }

// const person ={
//     name : "Atul"
// }

// const boundFunction = greet.bind(person, ["Jabalpur", "INDIA"])

// boundFunction()

// const   person1 = {
//     name: "Atul",
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
    


// }

// const person2 ={
//     name: "Rahul"
// }

// person1.greet.call(person2)

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(10)(20)(30));

// function multiply(a){
//     return function(b){
//         return a * b;
//     }
// }

// const multplyresult = multiply(6);

// console.log(multplyresult(3)
// )

// const name = "Atul";

// function show() {
//     console.log(name);
// }

// show();
// console.log(name);

// let globalVar = "Global";

// function outer(){
//     let outer = "Outer";

//     function inner(){
//         let inner = "Inner"

//         console.log(globalVar);
//         console.log(outer);
//         console.log(inner)
//     }
//     inner()
// }

// // outer()


// let name = "Atul";



// function outer(){

//     let massage = "Hello";

//     function inner(){
//         console.log(massage, name)
//     }

//     return inner;
// }

// const fn = outer();
// fn()

// const person = {
//     name : "Atul"
// }
// console.log(person.toString())


// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function user(callback){
//     callback("Atul")
// }

// user(greet)

// function memorizedSquare(){

//     const cache = {};

//     return function(num){

//         if(cache[num] !== undefined){
//             console.log("From cache")
//             return cache[num];
//         }

//         console.log(" -- Calculating -- ")

//         cache[num] = num * num;

//         return cache[num]
//     }

// }

// const square = memorizedSquare();

// console.log(square(5));
// console.log(square(4));
// console.log(square(5))

// function factorial(n){

//     if(n == 0 || n == 1){
//         return 1;
//     }

//     return n * factorial(n -1);
// }

// console.log(factorial(5))

// function greet(name){
//     this.name=  name;
// }

// const s1 = new greet("Atul");
// console.log(s1.name)

// let str = "Atul";
// console.log(str.charAt(3));

// const promise = new Promise((resolve, reject) => {
//     let result = Math.random() > 0.5;

//     if(result){
//         resolve("Data Fetched Successfully")
//     }
//     else{
//         reject("Data Unable to Fetch")
//     }
    
// });

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// async function greet(){
//     return "Hello";

// }

// greet()
// .then((data) =>{
//     console.log(data);
// })


// async function test() {

//     const result = await Promise.resolve("Success")
//     return result;
// }

// test()
// .then((data) =>{
//     console.log(data)
// })


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }

// async function getData() {
//     console.log("Fetching...");

//     const result = await fetchData();

//     console.log(result);
// }

// // getData();


// const limiter = new ConcurrencyLimiter(2);

// function createTask(id) {
//     return () =>
//         new Promise(resolve => {
//             console.log(`Start ${id}`);

//             setTimeout(() => {
//                 console.log(`End ${id}`);
//                 resolve(id);
//             }, 2000);
//         });
// }

// for (let i = 1; i <= 5; i++) {
//     limiter.run(createTask(i));
// }


const per1 = {
    name: "Atul",
    age : 21,
    address :{
        city: "Jabalpur",
        state: "Mp"

    }
}

// const per2 = {...per1}

// per1.name = "Raju";
// console.log(per1);

// console.log(per2);

// per2.name = "Rahul";
// console.log(per1);
// console.log(per2)

// per2.address.city = "Rewa";

// console.log(per1);
// console.log(per2)

// const deepCopy = JSON.parse(JSON.stringify(per1));

// deepCopy.name = "Raju";
// deepCopy.address.city = "Rewa";

// console.log(deepCopy);
// console.log(per1);

// per1.name = "Rahul";
// console.log(per1);
// console.log(deepCopy)


// function greet(name){
//     return `Hello ${name}, ${name} + Hello`;
// }
// console.log(greet("Atul"))

// const greet = function(name = "Raju"){
//     return `Hello ${name}`
// }

// console.log(greet("Atul"))
// console.log(greet())

// const greet = (name = "Rahul") => {
//     return `Hello ${name}`
// }
// console.log(greet("Atul"))
// console.log(greet())

// setTimeout( function(name = "Rahul")  {
//     console.log( `Hello ${name}`)
//     console.log(`Hello`)
// }, 200)

// // console.log()

// (function(){
//     console.log("Atul")
// })()
// (function() {
//   console.log("Runs immediately");
// })();

// function Person(name){
//     this.name = name;
// }
// console.log(Person())

// function multiply(x){
//     return function (y){
//         return x * y;
//     }
// }

// console.log(multiply(2)(9))

// const person = {
//     name : "Atul",
//     age : 21
// }
// console.log(person.name)

// const person = new Object();
// person.name = "atul";
// person.age = 22;
// person.address = "REWA";
// console.log(person)

// function person(name, age){
//     this.name = name;
//     this.age =  age;
// }

// const p1 = new person("Atul", 22);
// console.log(p1.age)

// const arr = [1, 2, 3, 4, 5];

// for(let num of arr){
//     console.log(num)
// }

// const person = {
//     name : "Atul",
//     age : 22,
//     address : "REWA",
//     course : "B.Tech"
// }

// for(let num in person){
//     console.log(num, person[num])
// }

// alert("WELCOME BACK TO JAVASCRIPT")
// let name = prompt("PLEASE ENTER YOUR NAME");
// console.log(name)

// let result = confirm("Are you sure?")
// console.log(result)

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// let sum = num1 + num2;

// alert("Sum = " + sum);


// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function user(callback){
//     let name = "Atul";
//     callback(name)
// }
// user(greet);

// function greet(callback){
//     console.log("Hi")
//     callback();
// }

// function by(){
//     console.log("Byy")
// }

// greet(by) 


function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 Completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 Completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 Completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All Steps Completed");
        });
    });
});