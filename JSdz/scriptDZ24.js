'use strict'
const number = prompt(`введите число`)
if (!number.trim()) { alert('ничего не введено')
}
else {
    if (isNaN(number)) {
        alert('введено не число')
    }
    else{
        switch (number) {
            case '0':
              alert( 'ноль' );
              break;
            case '1':
              alert( 'один' );
              break;
            case '2':
              alert( 'два' );
              break;
              case '3':
              alert( 'три' );
              break;
              case '4':
              alert( 'четыре' );
              break;
              case '5':
              alert( 'пять' );
              break;
              case '6':
              alert( 'шесть' );
              break;
              case '7':
              alert( 'семь' );
              case '8':
              alert( 'восемь' );
              break;
              case '9':
              alert( 'девять' );
              break;
            default:
              alert( "отрицательное значение, или десять и больше" );
          }
    }
    
}
