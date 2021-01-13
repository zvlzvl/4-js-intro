/*array - bet kokiu elementu sarasas (prioritetas, to paties tipo elementui)*/



const tusciaPinigine = [];
console.log(tusciaPinigine);

const pinigine = [1, 2, 5, 3, 20];
console.log(pinigine);

const abc = ['a', 'b', 'c', 'd', 'e','f'];
console.log(abc);



const aplankytiMiestai = ['Vilnius', 'Kaunas', 'Klaipeda'];
console.log(aplankytiMiestai);

console.log('Kiek yra reiksmiu tusciame sarase:', tusciaPinigine.length);
console.log('Kiek yra reiksmiu pinigineje:', pinigine.length);
console.log('Kiek yra reiksmiu abecel4je:', abc.length);
console.log('Kiek yra aplankytu miestu:', aplankytiMiestai.length);

//kaip suzinoti koks teksto ilgis: tekstas.lenght

const labas = 'labas';
const labasIlgis = labas.lenght;
console.log(`"${labas}" ilgis yra ${labasIlgis}.`);


console.log('Labas rytas!', 'Labas rytas!'.lenght);

// istraukti saraso reiksme
const pirmasMiestas = aplankytiMiestai[0];
console.log('Pirma miestas', pirmasMiestas);

const antrasMiestas = aplankytiMiestai[1];
console.log('Antras miestas', antrasMiestas);



//istraukti teksto n taji simboli

const hi = 'labas';
const pirmaRaide = hi[0];
console.log(pirmaRaide);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);
console.log(hi[4]);