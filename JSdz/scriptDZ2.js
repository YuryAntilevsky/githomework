'use strict'
const nameUser = prompt(`введите имя`)
const surnameUser = prompt(`введите фамилию`)
const nicknameUser = prompt(`введите никнейм`)
if (!nameUser.trim()) {
    nameUser === null
}
if (!surnameUser.trim()) {
    surnameUser === null
}
if (!nicknameUser.trim()) {
    nicknameUser === null
}

if (nameUser != null && surnameUser != null && nicknameUser != null) {
    alert(`${nameUser} ${surnameUser}`)
}
else if (nameUser != null && surnameUser != null && nicknameUser == null) {
    alert(`${nameUser} ${surnameUser}`)
}
else if (nameUser == null && surnameUser != null && nicknameUser != null) {
    alert(`${nicknameUser}`)
}
else if (nameUser != null && surnameUser == null && nicknameUser != null) {
    alert(`${nameUser}`)
}
else if (nameUser == null && surnameUser == null && nicknameUser == null || nameUser == null && surnameUser != null && nicknameUser == null || nameUser == null && surnameUser == null && nicknameUser != null) {
    alert(`Noname`)
}
else { alert(`ошибка`) }