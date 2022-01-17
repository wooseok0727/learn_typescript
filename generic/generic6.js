"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends('Jo');
new PersonExtends(100);
// new PersonExtends(true) // Error
