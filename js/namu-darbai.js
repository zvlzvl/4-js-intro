"use strict";
//kintamuju iniciavimas
//1
const aukstis = 20;
console.log(aukstis);
const ilgis = 10;
console.log(ilgis);
const plotis = 5;
console.log(plotis);

//2
const vardas = 'Zivile';
console.log(vardas);
const miestas = 'Klaipeda';
console.log(miestas);
const statusas = 'Mokine';
console.log(statusas);

//3
const pazymiai = [10, 8, 9, 7, 10];
console.log(pazymiai);
const matmenys = [10, 20, 30, 40, 50];
console.log(matmenys);
const laipsniai = [5, 7, 15, 8, 6];
console.log(laipsniai);

//4
const didziausiMiestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];
console.log(didziausiMiestai);
const seimosVardai = ['Zivile', 'Andrius', 'Hubertas', 'Domantas', 'Donhuanas'];
console.log(seimosVardai);
const zodiakoZenklai = ['Oziaragis', 'Vezys', 'Avinas','Mergele','Dvinys'];
console.log(zodiakoZenklai);

//Veiksmai su kintamaisiais
//1
const sumaSkaiciu = (aukstis + ilgis + plotis);
console.log(sumaSkaiciu);


//2
const sujungtiZodziai = (vardas + ' ' + miestas + ' ' + statusas);
console.log(sujungtiZodziai);

const sujungtiZodziai2 = `${vardas} ${miestas} ${statusas}`;
console.log(sujungtiZodziai2);


//3
const pazymiuVerte = (pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3] + pazymiai[4]);
console.log(pazymiuVerte);
const matmenuVerte = (matmenys[0] - matmenys[1] + matmenys[2] - matmenys[3] + matmenys[4]);
console.log(matmenuVerte);
const laipsniuVerte = (laipsniai[0] - matmenys[1] + matmenys[2] - matmenys[3] + matmenys[4]);
console.log(laipsniuVerte);

//4
const miestuVerte = (didziausiMiestai[4] + ', ' + didziausiMiestai[3] + ', ' + didziausiMiestai[2] + ', ' + didziausiMiestai[1] + ', ' + didziausiMiestai[0]);
console.log(miestuVerte);
const varduVerte = (seimosVardai[4] + ', ' + seimosVardai[3] + ', ' + seimosVardai[2] + ', ' + seimosVardai[1] + ', ' + seimosVardai[0]);
console.log(varduVerte);
const zodiakoVerte = (zodiakoZenklai[4] + ', ' + zodiakoZenklai[3] + ', ' + zodiakoZenklai[2] + ', ' + zodiakoZenklai[1] + ', ' + zodiakoZenklai[0]);
console.log(zodiakoVerte);

// Kintamuju palyginimas
//1 tarpusavyje palyginti skaiciaus tipo kintamuosius
console.log('-----------------if--------------');

if (aukstis > plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (aukstis < plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (aukstis === plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (aukstis !== plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
if (aukstis >= plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (aukstis <= plotis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
console.log('-------ternarry------------');


const arDidesnis = aukstis > plotis? 'Pomidoras' : 'Bandyk dar karta.';
console.log(arDidesnis);

const arMazesnis = aukstis < plotis? 'Pomidoras' : 'Bandyk dar karta.';
console.log(arMazesnis);

const arLygu = aukstis === plotis? 'Pomidoras' : 'Bndyk dar karta.'
console.log(arLygu);

const arNeLygu = aukstis !== plotis? 'Pomidoras' : 'Bndyk dar karta.'
console.log(arNeLygu);

const arDidesnisLygu = aukstis >= plotis? 'Pomidoras' : 'Bandyk dar karta.';
console.log(arDidesnisLygu);

const arMazesnisLygu = aukstis <= plotis? 'Pomidoras' : 'Bandyk dar karta.';
console.log(arMazesnisLygu);

//2 isvesti teksto kintamuju ilgius

console.log(vardas.length);
console.log(miestas.length);
console.log(statusas.length);

//3 tarpusavyje palyginti teksto tipo kintamuju ilgius

if (miestas.length > statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (miestas.length < statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (miestas.length === statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (miestas.length !== statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
if (miestas.length >= statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (miestas.length <= statusas.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
console.log('-------ternarry------------');


const tekstDidesnis = vardas.length > statusas.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(tekstDidesnis);

const tekstMazesnis = vardas.length < statusas.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(tekstMazesnis);

const tekstLygu = vardas.length === statusas.length? 'Pomidoras' : 'Bndyk dar karta.'
console.log(tekstLygu);

const tekstNeLygu = vardas.length !== statusas.length? 'Pomidoras' : 'Bndyk dar karta.'
console.log(tekstNeLygu);

const tekstDidesnisLygu = vardas.length >= statusas.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(tekstDidesnisLygu);

const tekstMazesnisLygu = vardas.length <= statusas.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(tekstMazesnisLygu);

//4 isvesti sarasu tipo kintamuju ilgius

console.log(pazymiai.length);
console.log(matmenys.length);
console.log(laipsniai.length);

console.log(didziausiMiestai.length);
console.log(seimosVardai.length);
console.log(zodiakoZenklai.length);

//5 palyginti sarasu tipo kintamuju ilgius


if (pazymiai.length > matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (pazymiai.length < matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (pazymiai.length === matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (pazymiai.length !== matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
if (pazymiai.length >= matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (pazymiai.length <= matmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
console.log('-------ternarry------------');


const sarDidesnis = pazymiai.length > matmenys.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(sarDidesnis);

const sarMazesnis =  pazymiai.length < matmenys.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(sarMazesnis);

const sarLygu =  pazymiai.length === matmenys.length? 'Pomidoras' : 'Bndyk dar karta.'
console.log(sarLygu);

const sarNeLygu =  pazymiai.length !== matmenys.length? 'Pomidoras' : 'Bndyk dar karta.'
console.log(sarNeLygu);

const sarDidesnisLygu =  pazymiai.length >= matmenys.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(sarDidesnisLygu);

const sarMazesnisLygu =  pazymiai.length <= matmenys.length? 'Pomidoras' : 'Bandyk dar karta.';
console.log(sarMazesnisLygu);

