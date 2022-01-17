interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Jo',
  age: 100,
  hello: function (): void {
    console.log(`Hello! ${this.name}.`);
  },
};

const p42: Person4 = {
  name: 'Jo',
  age: 100,
  hello(): void {
    console.log(`Hello! ${this.name}.`);
  },
};

// const p43: Person4 = {
//   name: 'Jo',
//   age: 100,
//   hello: (): void => {
//     console.log(`Hello! ${this.name}.`);
//   },
// };

p41.hello();
p42.hello();
