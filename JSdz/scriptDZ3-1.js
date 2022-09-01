'use strict'
let growth;
let firstNumber;
let secondNumber;
do {
    firstNumber = +prompt('введите первое число')
    secondNumber = +prompt('введите второе число')
} while (secondNumber - firstNumber < 5 && secondNumber - firstNumber > -5);

for (growth = firstNumber; growth < secondNumber; growth++) {
    console.log(growth)
}
for (growth = firstNumber; growth > secondNumber; growth--) {
    console.log(growth)
}


