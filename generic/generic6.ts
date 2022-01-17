class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Jo');
new PersonExtends(100);
// new PersonExtends(true) // Error
