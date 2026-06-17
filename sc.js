

// // There are two types of data types in JavaScript: primitive and non-primitive (reference) data types.


// // Primitive data types means: String, Number, Boolean, Undefined, Null, BigInt, and Symbol.

// // String is a sequence of characters enclosed in single quotes, double quotes, or backticks. It is used to represent text.

// let String = "Hello, World!";
// console.log(String);

// // Number is a data type that represents numeric values. It can be an integer or a floating-point number.

// let number = 23;
// console.log(number);

// //Boolean is a data type that represents one of two values: true or false. It is used to represent logical values.
// let boolean = true;
// console.log(boolean);

// // Undefined is a data type that represents the absence of a value. It is the default value of variables that have not been assigned a value.

// let undefined;
// console.log(undefined);

// // Null is a data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value.

// let nullValue = null;
// console.log(nullValue);

// // BigInt is a data type that represents integers with arbitrary precision. It is used to represent numbers that are too large to be represented by the Number data type.

// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);

// // Symbol is a data type that represents a unique identifier. It is often used to create unique property keys for objects.

// let symbol = Symbol("?");
// console.log(symbol);


// //Non-primitive (reference) data types means: Object, Array, and Function.

// // Object is a data type that represents a collection of key-value pairs. It is used to store and organize data.
// let object = {
//     name: "Atul",
//     age: 23,
//     City: "Jabalpur",

// };
// console.log(object.name);

// for(let key in object){
//     console.log(object[key]);
// }



// // Array is a data type that represents an ordered collection of values. It is used to store multiple values in a single variable.
// let array = [1, 2, 3, 4, 5];

// for(let key in array){
//     console.log(array[key]);
// }
// console.log(array[0]);


// Function is a data type that represents a reusable block of code that performs a specific task. It is used to define and execute a set of instructions.
// function greet(name) {
//     console.log("This will be executed before the return statement.");
//     return "Hello, " + name + "!";
// }
// console.log(greet("Atul"));


// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
// console.log(hoistedVariable); // Output: undefined
// var hoistedVariable = "This variable is hoisted.";
// hoistedFunction(); // Output: "This function is hoisted."
// function hoistedFunction() {
//     console.log("This function is hoisted.");
// }
// "user strict"; // This will throw an error because 'x' is not declared with var, let, or const.
// function doSomething(){

//     x = 33;
//     console.log(x);
//     var x;
// }
// doSomething(); // Output: 33

// // debugger is a keyword in JavaScript that is used to pause the execution of code at a specific point, 
// // allowing developers to inspect variables, evaluate expressions, and step through the code line by line.
// //  It is commonly used for debugging purposes to identify and fix issues in the code. When the debugger statement
// //  is encountered, the execution will stop, and the developer can use browser developer tools or an integrated
// //  development environment (IDE) to analyze the state of the program at that moment.

// debugger; // This will pause the execution of the code when it is reached.
// console.log("This will be logged after the debugger statement.");


// difference between == and ===
// The == operator is the equality operator that performs type coercion, meaning it converts the operands to the same type before making the comparison.

// console.log(5 == "5"); // Output: true

// // The === operator is the strict equality operator that does not perform type coercion. It checks for both value and type equality.            
// console.log(5 === "5"); // Output: false    

// // Difference between var const and  let keyword in javascript
// // The var keyword is function-scoped, meaning that variables declared with var are accessible within the function they are defined in.
// function varExample() {
//     var x = 10;}
// // The let keyword is block-scoped, meaning that variables declared with let are only accessible within the block they are defined in.
// function letExample() {
//     let y = 20;}        
// // The const keyword is also block-scoped, but it is used to declare variables that cannot be reassigned after they are initialized.
// function constExample() {
//     const z = 30;}

// Not a Number (NaN) is a special value in JavaScript that represents the result of an invalid or undefined mathematical operation. It is a property of the global object and is used to indicate that a value is not a valid number. NaN is unique in that it is not equal to itself, meaning that NaN === NaN will return false. It can be generated by operations such as dividing zero by zero or taking the square root of a negative number.
// console.log(0 / 0); // Output: NaN
// console.log(Math.sqrt(-1)); // Output: NaN



// pass By Value and Pass By Reference in JavaScript
// In JavaScript, primitive data types (such as numbers, strings, and booleans) are passed by value, meaning that when you assign a primitive value to a variable or pass it as an argument to a function, a copy of the value is created. Changes made to the variable or parameter will not affect the original value.

// let a = 10;
// let b = a; // b is a copy of a
// b = 20; // Changing b does not affect a
// console.log(a); // Output: 10
// console.log(b); // Output: 20

// // On the other hand, non-primitive data types (such as objects and arrays) are passed by reference, meaning that when you assign an object or array to a variable or pass it as an argument to a function, you are actually passing a reference to the original object or array. Changes made to the variable or parameter will affect the original object or array.

// let obj1 = { name: "Atul" };
// let obj2 = obj1; // obj2 is a reference to obj1
// obj2.name = "Rahul"; // Changing obj2 affects obj1
// console.log(obj1.name); // Output: "Rahul"
// console.log(obj2.name); // Output: "Rahul"


// What is an Immediately Invoked Function in JavaScript 
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after it is created. It is a common pattern used to create a new scope and avoid polluting the global namespace. The syntax for an IIFE typically involves wrapping the function in parentheses and then invoking it with another set of parentheses.

// (function() {
//     console.log("This is an Immediately Invoked Function Expression (IIFE).");
// })();

// (function(){
//     return "This is another IIFE.";
// }())

// give me a answer of this question what is the output of this code    

// What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
// Strict mode in JavaScript is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It was introduced in ECMAScript 5 and can be enabled by adding the directive "use strict"; at the beginning of a script or a function.

// Characteristics of JavaScript strict mode include:   
// 1. Eliminates some JavaScript silent errors by changing them to throw errors.
// 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations, thus improving performance.
// 3. Prohibits some syntax likely to be defined in future versions of ECMAScript.
// 4. Disallows the use of undeclared variables, which can help prevent accidental global variable creation.
// 5. Prevents the use of certain keywords as variable names, such as "eval" and "arguments".

// Explain Higher Order Functions in javascript.
// Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are a fundamental concept in functional programming and allow for more flexible and reusable code. Higher-order functions can be used to create abstractions, manage side effects, and enable functional programming techniques such as currying and composition. Examples of higher-order functions in JavaScript include map, filter, reduce, and forEach.

// function higherOrderFunction() {

//     console.log("This is a higher-order function.");
//     return function() {
//         console.log("This is a function returned by the higher-order function.");

//     }
    

// }

// higherOrderFunction(function() {
//     console.log("This is a callback function passed to the higher-order function.");
// });

// function multiply(value) {

//     return function(num) {
//         return value * num;
//     }

// }

// var result = multiply(5);
// console.log(result(10)); // Output: 50

// Explain “this” keyword
// The "this" keyword in JavaScript refers to the context in which a function is executed. It can refer to different objects depending on how the function is called. In a global context, "this" refers to the global object (window in browsers). In an object method, "this" refers to the object that the method is a property of. In a constructor function, "this" refers to the instance of the object being created. The value of "this" can also be explicitly set using methods like call(), apply(), or bind(). Understanding how "this" works is crucial for writing effective JavaScript code and avoiding common pitfalls related to context.

// function example() {
//     console.log(this);
// }
// example(); // In a browser, this will log the global object (window).

// const obj = {
//     name: "Atul",
//     method: function() {
//         console.log(this);
//     }
// };
// obj.method(); // This will log the obj object.

// What do you mean by Self Invoking Functions?
// A Self Invoking Function (also known as an Immediately Invoked Function Expression or IIFE) is a JavaScript function that is defined and executed immediately after it is created. It is a common pattern used to create a new scope and avoid polluting the global namespace. The syntax for a self-invoking function typically involves wrapping the function in parentheses and then invoking it with another set of parentheses.
// (function() {
//     console.log("This is a Self Invoking Function (IIFE).");
// })();    


// Explain call(), apply() and, bind() methods.
// The call(), apply(), and bind() methods are used to set the value of "this" in a function and to invoke the function with a specific context.

// 1. call(): The call() method calls a function with a given "this" value and arguments provided individually.
// function greet() {
//     console.log("Hello, " + this.name);
// }   
// const person = { name: "Atul" };
// greet.call(person); // Output: "Hello, Atul"
// // 2. apply(): The apply() method is similar to call(), but it takes the arguments as an array instead of individually.
// greet.apply(person); // Output: "Hello, Atul"
// // 3. bind(): The bind() method creates a new function that, when called, has its "this" keyword set to the provided value. It does not immediately invoke the function but returns a new function that can be called later.
// const boundGreet = greet.bind(person);
// boundGreet(); // Output: "Hello, Atul"

// What is currying in JavaScript?
// Currying is a technique in JavaScript where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for more flexible and reusable code by enabling partial application of function arguments.
// Example:
// function multiply(a, b) {
//     return a * b;
// }
// function add(a, b) {
//     return a + b;
// }
// const curriedMultiply = (a) => (b) => multiply(a, b);
// const curriedAdd = (a) => (b) => add(a, b);
// const curriedAddResult = curriedAdd(5)(10); // Output: 15
// console.log(curriedAddResult);
// const result = curriedMultiply(5)(10); // Output: 50
// console.log(result);

// What are some advantages of using External JavaScript?
// 1. Separation of Concerns: External JavaScript allows you to separate your JavaScript code from your HTML and CSS, making it easier to manage and maintain your codebase.
// 2. Reusability: You can reuse the same JavaScript file across multiple HTML pages, reducing redundancy and improving efficiency.
// 3. Caching: External JavaScript files can be cached by the browser, which can improve page load times for returning visitors.
// 4. Collaboration: External JavaScript files can be shared among team members, allowing for better collaboration and version control.
// 5. Improved Performance: By keeping JavaScript in external files, you can reduce the size of your HTML documents, which can lead to faster loading times and improved performance.   

// Explain Scope and Scope Chain in javascript
// Scope in JavaScript refers to the accessibility of variables and functions in different parts of the code. It determines where variables and functions can be accessed and modified. There are three types of scope in JavaScript: global scope, function scope, and block scope.

// global scope refers to variables and functions that are accessible throughout the entire code. Function scope refers to variables and functions that are accessible only within a specific function. Block scope refers to variables and functions that are accessible only within a specific block of code, such as an if statement or a loop.  
// function scope is introduced in JavaScript with the var keyword, which allows you to declare variables that are limited to the function in which they are defined. This helps prevent issues related to variable hoisting and accidental global variable creation. Understanding scope is crucial for writing effective JavaScript code and avoiding issues related to variable accessibility and naming conflicts.
// block scope is introduced in ES6 with the let and const keywords, which allow you to declare variables that are limited to the block in which they are defined. This helps prevent issues related to variable hoisting and accidental global variable creation. Understanding scope is crucial for writing effective JavaScript code and avoiding issues related to variable accessibility and naming conflicts.
// 

// The scope chain is the hierarchy of scopes that JavaScript uses to resolve variable and function references. When a variable or function is accessed, JavaScript looks for it in the current scope. If it is not found, it looks in the outer scope, and so on, until it reaches the global scope. This chain of scopes is known as the scope chain. Understanding scope and the scope chain is crucial for writing effective JavaScript code and avoiding issues related to variable accessibility and naming conflicts.


// Explain Closures in JavaScript.
// A closure in JavaScript is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows a function to access variables from an enclosing scope even after the outer function has finished executing. Closures are created whenever a function is defined inside another function and can be used to create private variables and functions, as well as to implement data encapsulation and maintain state in a functional programming style. Understanding closures is essential for writing effective JavaScript code and leveraging the power of functions in the language.

// function outerFunction() {
//     let outerVariable = "I am from the outer function.";    
//     function innerFunction() {
//         console.log(outerVariable); // Accessing the outer variable from the inner function
//     }
//     return innerFunction; // Returning the inner function, creating a closure
// }
// const closureExample = outerFunction(); // Calling the outer function to get the inner function
// closureExample(); // Output: "I am from the outer function."



// What are callbacks?
// Callbacks are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file. Callbacks allow you to specify what should happen once the asynchronous operation is finished, enabling you to write non-blocking code and manage the flow of execution effectively. Understanding callbacks is crucial for working with asynchronous operations in JavaScript and avoiding issues related to callback hell or nested callbacks.

// function fetchData(callback) {
//     // Simulate an API call
//     setTimeout(() => {
//         const data = "Fetched data";
//         callback(data); // Execute the callback with the fetched data
//     }, 1000);
// }
// fetchData((result) => {
//     console.log(result); // Output: "Fetched data"
// }); 

// What is memoization?
// Memoization is an optimization technique used in JavaScript to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can significantly improve performance for functions that are called multiple times with the same arguments, as they don't need to recompute the result each time. Memoization is particularly useful for recursive functions or functions that perform complex calculations.
// Example of memoization:
// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache[key]) {
//             return cache[key];
//         }
//         const result = fn(...args);
//         cache[key] = result;
//         return result;
//     };
// }    

// // // Example usage:
// const fibonacci = memoize(function(n) {
//     if (n <= 1) return n;    
//     return fibonacci(n - 1) + fibonacci(n - 2);
// });
// console.log(fibonacci(10)); // Output: 55


// What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document and allows programs to dynamically access and update the content, structure, and style of a document. The DOM is not specific to JavaScript; it can be used with other programming languages as well. In JavaScript, the DOM is used to interact with HTML and XML documents, enabling developers to manipulate the content and structure of web pages dynamically.  

// full form of xml is eXtensible Markup Language. It is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. XML is used to store and transport data, and it allows developers to create custom tags to structure the data according to their needs. It is widely used in web development, data exchange, and configuration files.
// full form of html is HyperText Markup Language. It is the standard markup language used for creating web pages and web applications. HTML provides the structure and content of a web page, allowing developers to define elements such as headings, paragraphs, links, images, and more. It uses tags to describe the different parts of a web page and how they should be displayed in a web browser. HTML is a fundamental technology for building websites and is often used in conjunction with CSS and JavaScript to create interactive and visually appealing web pages.


// Arrow function

// const add = (a, b) => a + b;
// console.log(add(5, 10)); // Output: 15

// Object.


// using Class.

// create Method.
// Object Literals.
// using Function.
// Object Constructor.

// let newDate = new Date()
// let year = newDate.getFullYear();
// let month = newDate.getMonth();

// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toTimeString());
// console.log(newDate.toISOString())
// console.log(newDate.toLocaleString());
// console.log(year);
// console.log(month);

// let date = newDate.getDate();   
// console.log(date.toString());

// let day = newDate.getDay(); 
// console.log(day);

// let hour = newDate.getHours();
// console.log(hour);

// let minute = newDate.getMinutes();
// console.log(minute);

// let second = newDate.getSeconds();
// console.log(second);

// let arr = ["Atul", "Rahul", "Rohit", "Suresh", "Ajeet", "Atul", ];

// arr.sort();
// console.log(arr);


// for(let name of arr){
//     console.log(`Hello, ${name}!`);
// }

// arr.push("Anil");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Anil");
// console.log(arr);

// arr.splice(2, 2 );
// console.log(arr);

// arr.splice(1, 3, "Anil", "Sunil", "Ramesh");
// console.log(arr);

// arr.slice(1, 4);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5, 2,[6, 7, 8, [9, 10, [11, 12,[13, 14, 15]]]]];

// console.log(arr.indexOf(2)); 
// console.log(arr.lastIndexOf(2));

// console.log(arr.includes(3)); 
// console.log(arr.includes(6));

// arr.sort();
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// const flattenedArr = arr.flat(4);
// console.log(flattenedArr);

// delete arr[5];
// console.log(arr);


// const user = {
//     name: "Atul",
//     age: 23,
//     city: "Jabalpur",
// }

// user.name = "Rahul";
// user.age = 24;
// user["city"] = "Indore";

// user.country = "India";

// user.book = "JavaScript";

// delete user.book;
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["city"]);


// const newUser = {
//     name: "Atul",
//     age: 23,
//     book: "JavaScript",
//     author: "John Doe",
//     page: 350,
//     // greeting: function() {
//     //     console.log("Hello, My Name is " + this.name + " and I am " + this.age + " years old!");
//     // },
//     // introduce: function() {
//     //     return this.name + " is " + this.age + " years old.";
//     // }
// };

// newUser.greeting(); // Output: "Hello, My Name is Atul and I am 23 years old!"
// console.log(newUser.introduce()); // Output: "Atul is 23 years old."

// for(let key in newUser){
//     console.log(`${key}: ${newUser[key]}`);
// }

// console.log(Object.keys(newUser)); // Output: ["name", "age", "book", "author", "page"]
// console.log(Object.values(newUser)); // Output: ["Atul", 23, "JavaScript", "John Doe", 350]
// console.log(Object.entries(newUser)); // Output: [["name", "Atul"], ["age", 23], ["book", "JavaScript"], ["author", "John Doe"], ["page", 350]] 

// for(let [key, value] of Object.entries(newUser)){
//     console.log(`${key}: ${value}`);
// }

// const userCopy = newUser; // This creates a reference to the same object, not a copy.
// console.log(userCopy); // Output: "Atul" (because userCopy and newUser reference the same object)
// userCopy.name = "Rahul";
// console.log(newUser.name); // Output: "Rahul" (because userCopy and newUser reference the same object)

// const userClone = Object.assign({}, newUser); // This creates a shallow copy of the object.
// userClone.name = "Rohit";
// console.log(newUser.name); // Output: "Rahul" (because userClone is a separate object)

// console.log(newUser); // it will show the original object with name "Rahul" because userClone is a separate object and does not affect newUser.

// const user = {
//     name: "Atul",
//     age: 23,
//     address: {
//         street: "123 Main St",
//         city: "Jabalpur",
//         country: "India"
//     }
// }

// //shallow copy of the user object using Object.assign() method. It creates a new object and copies the properties of the original object to the new object. However, it does not create a deep copy, meaning that if the original object contains nested objects, the nested objects will still be shared between the original and the copied object.
// // const shallowCopy = Object.assign({}, user);
// const shallowCopy = { ...user }; // This also creates a shallow copy of the user object using the spread operator.
// shallowCopy.name = "Rahul";
// shallowCopy.age = 24;
// shallowCopy.address.city = "Indore";
// console.log(shallowCopy); // Output: { name: "Rahul", age: 24, address: { street: "123 Main St", city: "Indore", country: "India" } }

// console.log(user.name); // Output: "Atul" (because shallowCopy is a separate object)    
// console.log(user.age);
// console.log(user.address.city); // Output: "Indore" (because the address object is shared between user and shallowCopy)


// const user = {
//     name: "Atul",
//     age: 23,
//     address: {
//         street: "123 Main St",
//         city: "Jabalpur",
//         country: "India"
//     }
// };

// Deep copy of the user object using JSON.parse() and JSON.stringify() methods. It creates a new object and copies the properties of the original object to the new object, including nested objects. However, it does not work for functions, undefined, or symbols, and it can also cause issues with circular references.

// const DeepCopy = structuredClone(user); // This creates a deep copy of the user object using the structuredClone() method, which is a more modern and efficient way to create deep copies of objects in JavaScript.
// DeepCopy.name = "Rahul";
// DeepCopy.age = 24;
// DeepCopy.address.city = "Indore";
// console.log(DeepCopy); // Output: { name: "Rahul", age: 24, address: { street: "123 Main St", city: "Indore", country: "India" } }
// const deepCopy = JSON.parse(JSON.stringify(user));
// deepCopy.name = "Rahul";
// deepCopy.age = 24;
// deepCopy.address.city = "Indore";
// console.log(deepCopy); // Output: { name: "Rahul", age: 24, address: { street: "123 Main St", city: "Indore", country: "India" } }
// console.log(user.name); // Output: "Atul" (because deepCopy is a separate object)
// console.log(user.age);
// console.log(user.address.city); // Output: "Jabalpur" (because the address object is not shared between user and deepCopy)



// function greet(name){
//     const sms = (`Name: ${name}`);
//     console.log(sms)
//     return sms;

// }

// const result = greet(1);
// console.log(result);

// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 4))


// const result = function(a, b){
//     return a +b;
// }
// console.log(result(3, 5))

// const arrow = (a, b) =>{
//     return a + b;
// }

// console.log(arrow(5, 5))

// const sq = (x) => x * x;
// console.log(sq(4))


// function greet(name = "Guest"){

//     return `Hello ${name}`
// }
// console.log(greet("Atul"))


// function add(...numbers){
//     let total = 0;

//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }

// console.log(add(4,5))
// console.log(add(4, 5, 6, 6))


// var globalVar = "I am Global Variable";

// function myFunction(){
//     var localVar = "I am Local Variable";
//     console.log(globalVar);
//     console.log(localVar);
// }
// myFunction();
// console.log(localVar)

// const numbers = [1, 2, 3, 4, 5];

// console.log(...numbers);
// console.log(numbers)

// const moreNumber = [6, 7, 8];

// console.log(...numbers, ...moreNumber);

// function add(a, b, c){
//     return a + b + c;
// }

// console.log(add(...numbers))


// function pickUpPizza(){
//     console.log("Pizza is ready! Driving to store pick up ready")
// }

// function orderPizza(callback){
//     console.log("Placing the pizza order...");
//     console.log("Pizza is cooked")
//     callback()
// }

// orderPizza(pickUpPizza);

// console.log("I am at home")

// This is your callback function. It's the "phone number" you'll leave behind.
// It describes what to do once the pizza is ready.
// function pickUpPizza() {
//   console.log("Pizza is ready! Driving to the store to pick it up.");
// }


// function orderPizza(callback) {
  
  
//   console.log("Placing the pizza order...");

//     console.log("Pizza is cooked!");
  
//     callback();

  
// }

// // --- Let's run the program ---
// // We call orderPizza and give it our pickUpPizza function as the callback argument.
// orderPizza(pickUpPizza);

// // This line will run immediately, while the pizza is still "cooking".
// console.log("I'm not waiting at the store. I'm at home, coding.");


// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
//   { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
// ];

// console.log(" --- Our Product --- ")

// products.forEach(element => {
//     console.log(`-${element.price}`)
    
// });

// const productName = products.map((element) =>{
//     return element.name;
// })
// console.log(productName);


// const filter = products.filter((element ) =>{
//     return element.inStock === true && element.category === "Electronics";
// })

// console.log(filter);


// const totalStockValue = products.reduce((total, product) =>{

//     console.log(`Current Total: ${total}, Current Product: ${product.name} , Current Price: ${product.price}`)


//     if(product.inStock ){
//         return total += product.price;
//     }
//     return total;
// }, 0);

// console.log(`\\nFinal Stock Price Value: $${totalStockValue}`);


// const coffie = products.find((product) => product.name === "Coffee Maker");
// console.log(coffie);


// const mySet = new Set();

// const numberArrays = [1,1, 23, 3, 3, 2, 2, 5, 5,6];

// const setArray = new Set(numberArrays);
// console.log(setArray)

// mySet.add("Atul").add("Ankit")
// mySet.add("Ankit")
// mySet.delete("Ankit")
// mySet.clear();
// console.log(mySet.has("Ankit"))

// console.log(mySet)


// const visitedUsers = new Set();

// function userVisits(userId){

//     if(!visitedUsers.has(userId)){
//         console.log(`WELCOME USER ${userId}`)
//         visitedUsers.add(userId)
//     }
//     else{
//         console.log(`WELCOME BACK USER ${userId}`)
//     }
// }

// userVisits(101);
// userVisits(120);
// userVisits(101)

// Imagine tracking unique visitors to a page
// const visitedUsers = new Set();

// function userVisits(userId) {
//   if (!visitedUsers.has(userId)) {
//     console.log(`Welcome, new visitor #${userId}!`);
//     visitedUsers.add(userId);
//   } else {
//     console.log(`Welcome back, visitor #${userId}!`);
//   }
// }

// userVisits(101); // Welcome, new visitor
// userVisits(102); // Welcome, new visitor 
// userVisits(101); // Welcome back, visitor


// const map = new Map();

// const userMap = new Map([
//     ["name", "alice"],
//     ["age", 21]
// ])
// console.log(userMap)

// userMap.set("value", 3)
// console.log(userMap.get("name"))

// console.log(userMap)




// how many types of function in javaScript


function greet(){
    return "Hello";
}
console.log(greet())