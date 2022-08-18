'use strict'
const hw = prompt(`введите текст`)
alert(hw);

const one = +prompt(`введите первое число`);
const two = +prompt(`введите второе число`);
const three = +prompt(`введите третье число`);
alert(one + two + three)

const name = prompt(`введите имя пользователя`);
const age = +prompt(`введите возраст пользователя`);
if (age > 17) { alert(`${`добро пожаловать`} ${name}`) };
 else alert(`${`Простите,`} ${name} ${`доступ закрыт`}`);


let block = confirm("Хотите ввести название блока?");
if (block === true) {
  let block = prompt("Введите название блока!");
  let element = confirm("Хотите ввести название элемента?");
  if (element === true) {
    let element = prompt("Введите название элемента!");
    let mod = confirm("Хотите ввести модификатор?");
    if (mod === true) {
      let mod = prompt("Введите название модификатора!");
      alert(`${block} ${element} ${mod}`);
    }
    else { alert(`${block} ${element}`); }
  }
  else { alert(block); }
}
else { alert("Класс элементу не присвоен!"); }

const first = +prompt(`введите первое число`);
const second = +prompt(`введите второе число`);
const arithmetic = prompt(`выберите нужную арифметическую операцию (div, plus, mult, minus)`);
if (arithmetic === 'div') { alert(first / second) }
if (arithmetic === 'plus') { alert(first + second) }
if (arithmetic === 'mult') { alert(first * second) }
if (arithmetic === 'minus') { alert(first - second) }

const first = +prompt(`введите первое число`);
const second = +prompt(`введите второе число`);
const ariphmetic = prompt(`выберите нужную арифметическую операцию (div, plus, mult, minus)`);
if (arithmetic === `div`) { alert(first / second) }
else if (arithmetic === `plus`) { alert(first + second) }
else if (arithmetic === `mult`) { alert(first * second) }
else if (arithmetic === `minus`) { alert(first - second) }
else alert("неверно введена арифметическая операция")