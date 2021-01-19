function pickLetters(text, step) {
    // validation
    if (typeof text !== 'string' ||
        text === '') {
        return 'ERROR: pirmasis parametras turi buti ne tuscias tekstas';
    }
    if (typeof step !== 'number' ||
        !isFinite(step)) {
        return 'ERROR: antrasis parametras turi buti skaicius';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti nulinis.';
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis.';
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius.';
    }

    // logic
    let picker = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            picker += text[i];
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            picker += text[i];
        }
    }

    // for (let i = 0; i < text.length; i++) {
    //     const letter = text[i];

    //     if (i + 1 % step === 0) {
    //     if (i % step === step - 1) {
    //         picker += letter;
    //     }
    // }

    // post logic validation
    if (picker === '') {
        return 'ERROR: nenumatytas logine klaida.';
    }

    // return result
    return picker;
}

console.log(pickLetters(1561, 2));
console.log(pickLetters('Labas', 'fd'));
console.log(pickLetters('Labas', NaN));
console.log(pickLetters('Labas', -Infinity));
console.log(pickLetters('abc', 0));
console.log(pickLetters('abc', 4));
console.log(pickLetters('abc', 1.5));
console.log(pickLetters('', 5));

console.log(pickLetters('abcdefg', 2), '->', 'bdf');
console.log(pickLetters('Labasrytas', 2), '->', 'aarts');
console.log(pickLetters('abcdefghijkl', 3), '->', 'cfil');
console.log(pickLetters('abcdefg', 1), '->', 'abcdefg');
console.log(pickLetters('abc', 3), '->', 'c');

console.log(pickLetters('abcdefg', -1), '->', 'gfedcba');
console.log(pickLetters('abcdefg', -2), '->', 'fdb');
console.log(pickLetters('abcdefghijkl', -3), '->', 'jgda');
console.log(pickLetters('abc', -3), '->', 'a');