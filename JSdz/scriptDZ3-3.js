'use strict'
let hundred = ''
let parity = ''
let fractional = ''
let positivity = ''
for (let i = 0; i < 20; i++) {
    if (i > 100) { hundred = 'больше ста' };
    if (i < 100) { hundred = 'меньше ста' };
    if (i % 2 == 0) { parity = 'чётное' };
    if (i % 2 != 0) { parity = 'нечётное' };
    if (i % 1 == 0) { fractional = 'целое' };
    if (i % 2 != 0) { fractional = 'дробное' };
    if (i < 0) { positivity = 'отрицательное' };
    if (i > 0) { positivity = 'положительное' };
    if (i > 0) { positivity = 'положительное' };
    console.log(`${i} ${hundred} ${parity} ${fractional} ${positivity}`)
}
