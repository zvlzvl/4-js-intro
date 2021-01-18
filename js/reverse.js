"use strict";

/*
Perrasyti teksta is galo i prieki.
*/

const text = 'eliviz';
const size = text.length;
let reverseText = '';

/*for (let i = 0; i < size; i++) {
    const letter = text[i];
    reverseText = letter + reverseText;
    console.log(i, letter, reverseText);
}

for (let i = 0; i < size; i++) {
    const letter = text[size - i - 1];
     reverseText += letter;
     console.log(i, letter, reverseText); }

 for (let i = 1; i <= size; i++) {
     const letter = text[size - i];
     reverseText += letter;
     console.log(i, letter, reverseText);
 }

 for (let i = size - 1; i >= 0; i--) {
     const letter = text[i];
     reverseText += letter;
     console.log(i, letter, reverseText);
 }


 for (let i = size; i > 0; i--) {
    const letter = text[i - 1];
    reverseText += letter;
     console.log(i, letter, reverseText);
 }

 console.log('Finale gavau:', reverseText);*/

 const vardas = ['a','n','d','r', 'i', 'u', 's'];
 const ilgis = vardas.length;
 let atgalVardas = '';

 for (let i = ilgis - 1; i >= 0; i--) {
    const raide = vardas[i];
    atgalVardas += raide;
    console.log('vardas atbulom gaunasi:', atgalVardas);
     
 }

