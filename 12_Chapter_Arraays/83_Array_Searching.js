let results = ["pass", "fail", "pass", "error", "fail", "skip"];

console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip"));  // -1

// lastIndexOf — searches the array with last occurance of the element
console.log(results.lastIndexOf("pass"));

// includes — returns boolean
console.log(results.includes("error")); // true