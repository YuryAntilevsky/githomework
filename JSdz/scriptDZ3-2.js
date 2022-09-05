'use strict'
let PinCode;
let PukCode;
for (let i = 0; i < 3; i++) {
    PinCode = +prompt('введите PIN-код');
    if (PinCode === 1234) alert("введён правильный PIN-код");
    if (PinCode === 1234) break;
    }
if(PinCode != 1234){
    for (let i = 0; i < 3; i++) {
         PukCode = +prompt('введите PUK-код');
         if (PinCode === 1234) alert("введён правильный PUK-код");
        if (PukCode === 4321) break;
        }
}