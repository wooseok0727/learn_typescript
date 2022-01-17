"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`Hello! ${this.name}.`);
    }
}
const iperson = new Person('Jo');
iperson.hello();
