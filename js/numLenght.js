function numLength(number) {
    //validation
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus.'
    }
    if (!isFinite(number)) {
        return 'ERROR turi buti tikras skaicius.'
    }

    //logic
const numberAsString = '' + number;
let length = numberAsString.length

    if (number < 0) {
        length--;
}

    if (number % 1 !== 0) {
        length--;
}
    //return
    return length;   
}


console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37056489), '->', 8);
console.log(numLength(true));
console.log(numLength('asd'), '->', 'nera');
console.log(numLength(NaN));
console.log(numLength(Infinity));
console.log(numLength(-Infinity));
console.log(numLength([]));

console.log(numLength(-5), '->', 1);
console.log(numLength(-781), '->', 3);
console.log(numLength(-37056489), '->', 8);

console.log(numLength(5.123), '->', 4);
console.log(numLength(781.123), '->', 6);
console.log(numLength(37056489.123), '->', 11);

console.log(numLength(-5.123), '->', 4);
console.log(numLength(-781.123), '->', 6);
console.log(numLength(-37056489.123), '->', 11);
console.log(numLength(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '->', 139);
console.log(numLength(112222223456789123456789123456789123456789), '->', 23);