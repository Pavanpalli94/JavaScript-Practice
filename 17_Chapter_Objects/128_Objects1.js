let a1 = {
    name : "Pavan"
};


let a = { status: "pass" };
console.log(a1.name);
console.log(a["status"]);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);