interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`Hello! ${person.name}.`);
}

const p1: Person1 = {
  name: 'Jo',
  age: 100,
};

hello1(p1);
