"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고 나이는 ${this._age}.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const abc = new Parent('Jo', 100);
// abc.print();
class Child extends Parent {
    constructor(age) {
        super('JO Jr', age);
        this._name = 'JO Jr.';
        this.gender = 'male';
        this.printName();
    }
}
const abc1 = new Child(5);
abc1.print();
