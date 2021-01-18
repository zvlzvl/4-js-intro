/* SALYGOS:
-grazinamas sandaugos rezultatas
-dauginami tik skaiciai */

function multiply(a, b) {
    if (typeof a !== 'number'){
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }
    if (a * b === -0) {
        return 0
    }
    if (typeof b !== 'number'){
        return 'ERROR: antrasis parametras turi buti skaicius.';
    }
    if (isNaN(a)){
        return 'ERROR: pirmasis parametras turi buti tikras skaicius.';
    }
    if (isNaN(b)){
        return 'ERROR: antrasis parametras turi buti tikras skaicius.';
    } 
    return a * b;
}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(-22, -2), '->', 44);
console.log(multiply(0.4, 3.65), '->', 1.46);
console.log(multiply(-1, 0), '->', 0);
console.log(multiply(2, 'rytas'), '->', 'nera');
console.log(multiply(5, NaN));