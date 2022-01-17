class CPerson1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const cp1 = new CPerson1('Jo');

console.log(cp1);

class CPerson2 {
  public name: string = 'Jo';
  private _age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }

  public async init() {}
  // constructor(age: number) {
  //   this.age = age;
  // }
}

const cp2: CPerson2 = new CPerson2(100);
const cp21: CPerson2 = new CPerson2();

console.log(cp2);
// cp2._age = 100;
// console.log(cp2._age);
console.log(cp21);

class CPerson3 {
  public constructor(private _name: string, private age: number) {}

  get name() {
    console.log('get');
    return this._name + ' JO';
  }
  set name(n: string) {
    console.log('set');
    this._name = n;
  }
}

const cp3: CPerson3 = new CPerson3('Jo', 200);
console.log(cp3.name);
cp3.name = 'WS';
console.log(cp3.name);

class CPerson4 {
  public readonly name: string = 'JO';
  public readonly country: string;

  public constructor(private _name: string, private age: number) {
    this.country = 'KOREA';
  }

  hello() {
    // this.country = "USA";
  }
}

const cp4: CPerson4 = new CPerson4('JoW', 300);
console.log(cp4.name);
