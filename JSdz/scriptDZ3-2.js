'use strict'
let pinCode;
let pukCode;
for (let i = 0; i < 3; i++) {
    pinCode = +prompt('введите PIN-код');
    if (pinCode === 1234) alert("введён правильный PIN-код");
    if (pinCode === 1234) break;
    }
if(pinCode != 1234){
    for (let i = 0; i < 3; i++) {
         pukCode = +prompt('введите PUK-код');
         if (pinCode === 1234) alert("введён правильный PUK-код");
        if (pukCode === 4321) break;
        }
}