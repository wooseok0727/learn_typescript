function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('Jo', 2);
helloBasic(36, 39);
