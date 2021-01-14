/*
OPERATORIAI:
naudotini: < > <= >= === !==
ne naudotini: ==, !=
if (tikrinama salyga) {
    jei tenkinama
}else {
    jei netenkinama
}

SABLONAI:
if() {}
if() {} else {}
*/
const a = 4;
const b = '4';

const c = +b;   /*(pavercia is i skaiciu jei yra)*/

if (a === b) {
    console.log('taip');

}else{
    console.log('ne');
}

console.log('-----------------------------');

const spalva = 'geltona';

if (spalva === 'melyna') {
    console.log('Arijai!')
} else if (spalva === 'zalia') {
    console.log('Gerai slepiasi zoleje');
} else if (spalva === 'ruda') {
    console.log('Angry bird') 
} else if (spalva === 'raudona') {
    console.log('Turbut programuotojas');
} else{
    console.log('A tu turi akis?');
}




const moneta = 'briauna';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius');
}else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas');
    }else{
        console.log('Iskrito briauna');
    }
}


console.log('-----------------------------');


const namoTipas = 'namas';  // namas, butas
const kaipKilti = 'laiptai'; // laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i nama ir kilu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i nama ir kilu liftu');
    } else {
        console.log('Ienu i nama ir nera kaip kilti i virsu');
    }
} else if (namoTipas === 'butas') {
    if (kaipKilti = 'laiptai') {
        console.log('Ieinu i daugiaauksti ir kilu laiptais');
    }else if(kaipKilti === 'liftas') {
        console.log('Ieinu i daugiaauksti ir kilu liftu');
    } else {
        console.log('Ieinu i daugiaauksti ir nezinau kaip kilti');
    }
} else {
    console.log('Nurodytas namo tipas nezinomas');
}

