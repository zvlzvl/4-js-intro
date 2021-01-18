function reverseString(text) {
    const size = text.length;
    let reverseText = '';

    for (let i = 0; i < size; i++) {
        const letter = text[i];
        reverseText = letter + reverseText;
    }

    return reverseText;
}


console.log(reverseString('labas'), '->', 'sabal');
console.log(reverseString('sedek'), '->', 'kedes');
console.log(reverseString('aciu'), '->', 'uica');
console.log(reverseString('sedek uzu kedes'), '->', 'sedek uzu kedes');

function atgalVardas(vardas) {
    const ilgis = vardas.length;
    let  atgalVardas = '';

    for (let i = 0; i < ilgis; i++) {
        const raide = vardas[i];
        atgalVardas = raide + atgalVardas;
    }
    return atgalVardas;
}

console.log(atgalVardas('eliviZ'));
console.log(atgalVardas('mama'));
  
