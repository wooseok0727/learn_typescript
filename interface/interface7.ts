interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`Hello! ${name}.`);
};

helloPerson('Jo', 39);
