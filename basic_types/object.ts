const person1 = { name: 'Jo', age: 100 };

const person2 = Object.create({ name: 'Jo', age: 100 });

let obj2: object = {};

obj2 = { name: 'Jo' };

obj2 = [{ name: 'Jo' }];

// obj2 = 39; // Error

// obj2 = 'Jo'; // Error

// obj2 = true; // Error

// obj2 = 100n; // Error

// obj2 = Symbol(); // Error

// obj2 = null; // Error

// obj2 = undefined;; // Error

declare function create(o: object | null): void;

create({ prop: 0 });

create(null);

// create(42); // Error

// create("string"); // Error

// create(false); // Error

// create(undefined); // Error

// Object.create
// Object.create(0); // Error
