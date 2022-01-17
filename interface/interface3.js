"use strict";
function hello3(person) {
    console.log(`Hello! ${person.name}.`);
}
const p31 = {
    name: 'Jo',
    age: 100,
};
const p32 = {
    name: 'Anna',
    city: ['Sung', 'Chan'],
};
const p33 = {
    name: 'One',
    a: p31,
    b: p32,
};
hello3(p33);
