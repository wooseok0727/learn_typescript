class Person11 {
  private static CITY = 'Seoul';

  public hello() {
    console.log('hello', Person11.CITY);
  }
  public change() {
    Person11.CITY = 'LA';
  }
}

const ps1 = new Person11();
ps1.hello();

const ps2 = new Person11();
ps2.hello();

// Person1.hello();
// Person1.CITY;

ps1.change();
ps2.hello();
