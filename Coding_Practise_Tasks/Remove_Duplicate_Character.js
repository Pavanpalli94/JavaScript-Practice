let word ="Hello World";
let result = "";

for(let i=0;i<word.length;i++){
    if(!result.includes(word[i])){
        result += word[i];
    }
}
console.log(result);
