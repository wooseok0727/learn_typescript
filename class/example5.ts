class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고 나이는 ${this._age}.`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

// const abc = new Parent('Jo', 100);
// abc.print();

class Child extends Parent {
  public _name = 'JO Jr.';

  public gender = 'male';

  constructor(age: number) {
    super('JO Jr', age);
    this.printName();
  }
}

const abc1 = new Child(5);
abc1.print();
