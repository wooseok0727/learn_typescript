"use strict";
class Person11 {
    hello() {
        console.log('hello', Person11.CITY);
    }
    change() {
        Person11.CITY = 'LA';
    }
}
Person11.CITY = 'Seoul';
const ps1 = new Person11();
ps1.hello();
const ps2 = new Person11();
ps2.hello();
// Person1.hello();
// Person1.CITY;
ps1.change();
ps2.hello();
