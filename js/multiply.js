/* SALYGOS:
-grazinamas sandaugos rezultatas
-dauginami tik skaiciai */

function multiply(a, b){
    if (typeof a !== 'number'){
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }
    if (typeof b !== 'number'){
        return 'ERROR: antrasis parametras turi buti skaicius.';
    }
    /*if (a negali buti NaN){
        return 'ERROR: pirmasis parametras turi buti tikras.';
    }
    if (b === NaN){
        return 'ERROR: pirmasis parametras turi buti skaicius.'*/;
    }
    return a * b;
}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(-22, -2), '->', 44);
console.log(multiply(0.4, 3.65), '->', 1.46);
console.log(multiply(-1, 0), '->', 0);
console.log(multiply('labas', 'rytas'), '->', 0);
console.log(multiply(NaN, 5));