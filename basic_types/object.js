"use strict";
const person1 = { name: 'Jo', age: 100 };
const person2 = Object.create({ name: 'Jo', age: 100 });
let obj2 = {};
obj2 = { name: 'Jo' };
obj2 = [{ name: 'Jo' }];
create({ prop: 0 });
create(null);
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// Object.create
// Object.create(0); // Error
