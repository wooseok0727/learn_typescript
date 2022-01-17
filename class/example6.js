"use strict";
class AbstarctPerson {
    constructor() {
        this._name = 'Jo';
    }
}
class Person10 extends AbstarctPerson {
    setName(name) {
        this._name = name;
    }
}
const aaa = new Person10();
aaa.setName('JO');
console.log(aaa);
