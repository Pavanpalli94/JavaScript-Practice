// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 3)); // Output: 6

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};
console.log(user); 

function sayHello(msg: string): void {
    greet("Pavan"); // Output: Hello, Pavan!
    console.log(msg);
}
sayHello("Hello, TypeScript!"); // Output: Hello, TypeScript!

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
