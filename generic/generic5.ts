class PersonGeneric<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new PersonGeneric('Jo', 10);
new PersonGeneric<string, string>('abc', 'aa');
new PersonGeneric<number, string>(1, 'aaa');
