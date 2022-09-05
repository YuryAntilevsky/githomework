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
if (isNaN(numberCheck)) {
    numberCheck === undefined; if (/[а-я]/i.test(numberCheck)) { language = 'введён русский текст' }
    else { language = 'введён нерусский текст' }
}
else if (numberCheck > 100 ) {
    hundred = 'больше ста'
}
else if (numberCheck < 100 ) {
    hundred = 'меньше ста'
}
else { hundred = 'равно сотне' }

if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if (isNaN(numberCheck)) {
    numberCheck === undefined
}
else if (numberCheck % 2 == 0 ) {
    parity = 'чётное'
}
else if (numberCheck % 2 != 0 ) {
    parity = 'нечётное'
}
else { alert(`Ошибка`) }
if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if (isNaN(numberCheck)) {
    numberCheck === undefined
}
else if (numberCheck % 1 == 0 ) {
    fractional = 'целое'
}
else if (numberCheck % 2 != 0 ) {
    fractional = 'дробное'
}
else { alert(`Ошибка`) }

if (!numberCheck.trim()) {
    numberCheck === undefined
}
else if (isNaN(numberCheck)) {
    numberCheck === undefined
}
else if (numberCheck < 0 ) {
    positivity = 'отрицательное'
}
else if (numberCheck > 0 ) {
    positivity = 'положительное'
}
else { positivity = 'равно  нулю' }

alert(`${language} ${hundred} ${parity} ${fractional} ${positivity}`)