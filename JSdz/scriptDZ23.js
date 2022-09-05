'use strict'
let numberCheck = prompt(`введите число`)
let language = ''
numberCheck === (isNaN(numberCheck)) ? undefined: 
language =  (/[а-я]/i.test(numberCheck)) ? 'введён русский текст': 'введён нерусский текст';
let hundred = (numberCheck > 100 && numberCheck != NaN ) ? 'больше ста':
(numberCheck < 100 && numberCheck != NaN) ? 'меньше ста':
'равно сотне';
let parity = (numberCheck % 2 == 0 && numberCheck != NaN ) ? 'чётное' : 'нечётное';
let fractional = (numberCheck % 1 == 0 && numberCheck != NaN) ? 'целое': 'дробное';
let positivity = (numberCheck < 0 && numberCheck != NaN) ? 'отрицательное': (numberCheck > 0 && numberCheck != NaN) ? 'положительное': 'равно  нулю';
(isNaN(numberCheck)) ? alert (`${language}`):
alert(`${hundred} ${parity} ${fractional} ${positivity}`);

const nameUser = prompt(`введите имя`)
const surnameUser = prompt(`введите фамилию`)
const nicknameUser = prompt(`введите никнейм`)

nameUser === (!nameUser.trim()) ? null:
surnameUser === (!surnameUser.trim()) ? null: 
nicknameUser === (!nicknameUser.trim()) ? null:

(nameUser != null && surnameUser != null && nicknameUser != null) ? 
    alert(`${nameUser} ${surnameUser}`):

(nameUser != null && surnameUser != null && nicknameUser == null) ?
    alert(`${nameUser} ${surnameUser}`):

(nameUser == null && surnameUser != null && nicknameUser != null) ?
    alert(`${nicknameUser}`):

 (nameUser != null && surnameUser == null && nicknameUser != null) ?
    alert(`${nameUser}`):
(nameUser == null && surnameUser == null && nicknameUser == null || nameUser == null && surnameUser != null && nicknameUser == null || nameUser == null && surnameUser == null && nicknameUser != null) ? 
    alert(`Noname`): alert(`Ошибка`);