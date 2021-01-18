/*
for (let i=0; i<5; i++) {
    kartotinas kodas
}
*/

console.log('PRADZIA');
const precision = 100000;

// for (let i = 2.5; i <= 8.5; i = Math.round((i + 0.4) * precision) / precision) {
//     console.log('kartotinas kodas', i);
// }

for (let i = 2; i <= 8; i += 1) {
    console.log('kartotinas kodas', i);
}

console.log('PABAIGA');

console.log('------------------');

const words = ['abc', 'Borisas', 'citrina', 'duobe'];

for (let i = 0; i < words.length; i++) {
    const word = words[i];

    console.log(i, word);
    console.log('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis:', word.length);
}

console.log(words);