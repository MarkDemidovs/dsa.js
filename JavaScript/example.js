import { Stack } from './dsa.js';

let ar = [];
// Create an instance of the Stack class
const stackExample = new Stack(ar);

// Push elements onto the stack
stackExample.push("Hello!");
stackExample.push("How are you?")

console.log(stackExample.top());
// Log the stack to the console, which will now display the contents of the stack as a string
console.log(stackExample);