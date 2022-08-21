'use strict'
const numberCheck = prompt(`введите число`)
let hundred = ''
let parity = ''
let fractional = ''
let positivity = ''
let language = ''

if (!numberCheck.trim()) {
    numberCheck === undefined
}
 if(isNaN(numberCheck)) {
    numberCheck === undefined; if ( /[а-я]/i.test(numberCheck)){language = 'введён русский текст'}
    else{language = 'введён нерусский текст'}
}
else if (numberCheck > 100 && numberCheck != NaN ) {
    hundred = 'больше ста'
}
else if (numberCheck < 100 && numberCheck != NaN) {
    hundred = 'меньше ста'
}
else { hundred = 'равно сотне' }

if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if(isNaN(numberCheck)) {
    numberCheck === undefined}
else if (numberCheck % 2 == 0 && numberCheck != NaN ) {
    parity = 'чётное'
}
else if (numberCheck % 2 != 0 && numberCheck != NaN) {
    parity = 'нечётное'
}
else { alert(`Ошибка`) }
if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if(isNaN(numberCheck)) {
    numberCheck === undefined}
else if (numberCheck % 1 == 0 && numberCheck != NaN ) {
    fractional = 'целое'
}
else if (numberCheck % 2 != 0 && numberCheck != NaN) {
    fractional = 'дробное'
}
else { alert(`Ошибка`) }

if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if(isNaN(numberCheck)){
    numberCheck === undefined}
else if (numberCheck < 0 && numberCheck != NaN ) {
    positivity = 'отрицательное'
}
else if (numberCheck > 0 && numberCheck != NaN) {
    positivity = 'положительное'
}
else {positivity = 'равно нулю'}

alert(`${language} ${hundred} ${parity} ${fractional} ${positivity}`)