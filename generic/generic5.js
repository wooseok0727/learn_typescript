"use strict";
class PersonGeneric {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new PersonGeneric('Jo', 10);
new PersonGeneric('abc', 'aa');
new PersonGeneric(1, 'aaa');
