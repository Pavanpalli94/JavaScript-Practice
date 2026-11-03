let data = "Hello World";
let loData = data.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < data.length; i++) {
    let ch = data[i].toLowerCase();

    if ("aeiou".includes(ch)) {
        vowels++;
    }
    else if (ch >= "a" && ch <= "z") {
        consonants++;
    }
}

console.log("Vowels:", vowels, "Consonants:", consonants);