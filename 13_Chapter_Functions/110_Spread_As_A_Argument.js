function hasError(...codes) {
    return codes.every(c => c >= 400);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes2));