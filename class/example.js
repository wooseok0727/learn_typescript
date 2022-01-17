"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CPerson1 {
    constructor(name) {
        this.name = name;
    }
}
const cp1 = new CPerson1('Jo');
console.log(cp1);
class CPerson2 {
    constructor(age) {
        this.name = 'Jo';
        if (age === undefined) {
            this._age = 20;
        }
        else {
            this._age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
const cp2 = new CPerson2(100);
const cp21 = new CPerson2();
console.log(cp2);
// cp2._age = 100;
// console.log(cp2._age);
console.log(cp21);
class CPerson3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name + ' JO';
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const cp3 = new CPerson3('Jo', 200);
console.log(cp3.name);
cp3.name = 'WS';
console.log(cp3.name);
class CPerson4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'JO';
        this.country = 'KOREA';
    }
    hello() {
        // this.country = "USA";
    }
}
const cp4 = new CPerson4('JoW', 300);
console.log(cp4.name);
