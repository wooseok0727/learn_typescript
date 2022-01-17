abstract class AbstarctPerson {
  protected _name: string = 'Jo';

  abstract setName(name: string): void;
}

class Person10 extends AbstarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const aaa = new Person10();
aaa.setName('JO');

console.log(aaa);
