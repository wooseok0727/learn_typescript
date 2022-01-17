"use strict";
const p41 = {
    name: 'Jo',
    age: 100,
    hello: function () {
        console.log(`Hello! ${this.name}.`);
    },
};
const p42 = {
    name: 'Jo',
    age: 100,
    hello() {
        console.log(`Hello! ${this.name}.`);
    },
};
// const p43: Person4 = {
//   name: 'Jo',
//   age: 100,
//   hello: (): void => {
//     console.log(`Hello! ${this.name}.`);
//   },
// };
p41.hello();
p42.hello();
