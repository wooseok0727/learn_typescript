interface IPerson10 {
  name: string;
  age: number;
}

const person10: IPerson10 = {
  name: 'Jo',
  age: 100,
};

type Keys = keyof IPerson10;

const keys: Keys = 'name';

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProp(person10, 'name'));

function setProp<T, K extends keyof T>(obj: T, key: keyof T, value: T[K]): void {
  obj[key] = value;
}

setProp(person10, 'name', 'jojo');
console.log(getProp(person10, 'name'));
