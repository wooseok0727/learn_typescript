"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        // ClassName 으로부터 만든 object 가 있으면 그걸 리턴
        // 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const cn1 = ClassName.getInstance();
const cn2 = ClassName.getInstance();
console.log(cn1 === cn2);
