interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`Hello! ${this.name}.`);
  }
}

const iperson: IPerson1 = new Person('Jo');
iperson.hello();
