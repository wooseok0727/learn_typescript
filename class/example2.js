"use strict";
// class => object
// {jo: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}
class Students {
    constructor() {
        this.jo = 'male';
    }
}
const stu1 = new Students();
stu1.jo = 'male';
stu1.jade = 'male';
console.log(stu1);
const stu2 = new Students();
stu2.chloe = 'female';
stu2.alex = 'male';
stu2.anna = 'female';
console.log(stu2);
