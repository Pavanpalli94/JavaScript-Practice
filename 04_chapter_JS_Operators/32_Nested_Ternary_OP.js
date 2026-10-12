// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go to Trip, age > 25 -> Bike Ride

let age = 26;

let Goto_trip = ( age > 18) ? (age > 25 ? "Long Bike Ride" : "No Bike, Go in Bus") : "No Trip, Stay Home";
console.log(`Pavan can Enjoy ${Goto_trip}`);