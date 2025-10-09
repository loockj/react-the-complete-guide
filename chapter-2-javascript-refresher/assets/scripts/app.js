// import { apiKey } from './util.js';

// import apiKey from './util.js';
// import defaultTest, { apiKey, abc as content } from './util.js';

// import * as util from './util.js';

// console.log(content);

// const userMessage = `Hello World!`;

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = 'Hello!') {
//     // console.log(userName);
//     // console.log(message);
//     return `Hi, I am ${userName}. ${message}`;
// }

// const greeting1 = createGreeting('John Doe');
// console.log(greeting1);

// const greeting2 = createGreeting('Manuel', "Hello, what's up?");
// console.log(greeting2);

// const user = {
//     userName: 'Max',
//     age: 34,
//     greet() {
//         console.log(`Hello!`);
//         console.log(this.age);
//     },
// };

// console.log(user.userName);
// console.log(user['userName']);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('Hi!');
//     }
// }

// const user1 = new User('Manuel', 35);
// console.log(user1);

// const hobbies = [`Sports`, `Cooking`, `Reading`];

// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);

// hobbies.push(`Working`);
// console.log(hobbies);

// const index = hobbies.findIndex(hobby => hobby === `Sports`);
// console.log(index);

// const newHobbies = hobbies.map(hobby => ({ text: hobby }));
// console.log(newHobbies);

// const userNameData = [`John`, `Doe`];

// [firstName, lastName] = userNameData;
// console.log(firstName, lastName);

// const user = { name: `John`, age: 50 };
// const { name, age } = user;

// const hobbies = [`Sports`, `Cooking`];
// const newHobbies = [`Reading`];

// const mergedHobbies = [...hobbies, ...newHobbies];

// const user = { name: `John`, age: 50 };
// const extendedUser = { isAdmin: true, ...user };

// const password = prompt(`Your password`);
// if (password === `Hello`) {
//     console.log(`Hello works`);
// } else if (password === `hello`) {
//     console.log(`hello works`);
// } else {
//     console.log(`Access not granted.`);
// }

// const hobbies = [`Sports`, `Cooking`];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector(`ul`);
// list.remove();

// function handleTimeout() {
//     console.log(`Timed out!`);
// }

// const handleTimeout2 = () => {
//     console.log(`Timed out ... again!`);
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log(`More timing out...`);
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log(`Hi`));

let userMessage = `Hello`;

const hobbies = [`Hobbies`, `Cooking`];
hobbies.push(`Working`);
console.log(hobbies);
