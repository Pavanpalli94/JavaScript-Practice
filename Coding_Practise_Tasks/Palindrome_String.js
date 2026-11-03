let data = "Racecar";

let isPalindrome = true;
let loData = data.toLowerCase();

for (let i = 0; i < loData.length / 2; i++) {
    if (loData[i] !== loData[loData.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "YES" : "NO");