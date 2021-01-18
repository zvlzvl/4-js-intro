"use strict";
/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

const from = 0;
const till = 11;
const divider = 7;

let count = 0;

for (let i = from; i <= till; i++) {
    if (i % divider === 0) {
        count++;
    }
  }

const ats = `Skaiciu intervale tarp ${from} ir ${till}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai`;

console.log(ats);

const from2 = 8;
const till2 = 31;
const divider2 = 3;

let count2 = 0;

for (let i = from2; i <= till2; i++) {
    if (i % divider2 === 0) {
        count2++;
    }
  }

const ats2 = `Skaiciu intervale tarp ${from2} ir ${till2}, besidalijanciu be liekanos is ${divider2} yra ${count2} vienetai`;

console.log(ats2);