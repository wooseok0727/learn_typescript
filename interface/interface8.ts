interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Jo',
  gender: 'male',
};

console.log(p81);
