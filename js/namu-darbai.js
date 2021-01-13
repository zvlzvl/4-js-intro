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

