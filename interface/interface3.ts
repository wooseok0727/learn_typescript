interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`Hello! ${person.name}.`);
}

const p31: Person3 = {
  name: 'Jo',
  age: 100,
};

const p32: Person3 = {
  name: 'Anna',
  city: ['Sung', 'Chan'],
};

const p33: Person3 = {
  name: 'One',
  a: p31,
  b: p32,
};

hello3(p33);
