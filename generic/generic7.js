'use strict';
const person10 = {
  name: 'Jo',
  age: 100,
};
const keys = 'name';
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp(obj, key) {
  return obj[key];
}
console.log(getProp(person10, 'name'));
function setProp(obj, key, value) {
  obj[key] = value;
}
setProp(person10, 'name', 'jojo');
console.log(getProp(person10, 'name'));
