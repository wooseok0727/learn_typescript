class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance() {
    // ClassName 으로부터 만든 object 가 있으면 그걸 리턴
    // 없으면 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}

const cn1 = ClassName.getInstance();
const cn2 = ClassName.getInstance();

console.log(cn1 === cn2);
