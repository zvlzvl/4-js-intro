"use strict";
/*
0 - 4   = 10
3 - 5   = 12
-50 - 50  = 0
0 - 100  = 5050
0 - 0   =0
574 - 815 = baisiai didelis teigiamas skaicius
-70 - 30  = santykinai didelis neigiamas skaicius (-2020)
*/


const from = 3;
const till = 5;
let sum = 0;

for (let i = from; i <= till; i++) {
    sum += i;
    
}
const ats = `Suma nuo ${from} iki ${till} yra ${sum}.`;
console.log(ats);


/* pvz.: “abcdef” -> “fedcba”
*/

