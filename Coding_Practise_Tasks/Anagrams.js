let data = "Hello";
let data2 = "World";

let sortedData1 = data.toLowerCase().split("").sort().join("");
let sortedData2 = data2.toLowerCase().split("").sort().join("");

if (sortedData1 === sortedData2) {
    console.log("YES");
} else {
    console.log("NO");
}

