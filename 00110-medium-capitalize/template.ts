type MyCapitalize<S extends string> = S extends `${infer X}${infer tail}` ? `${Uppercase<X>}${tail}` : S


/* 
  1.推断符合这种格式的字符串，就用内置Uppercase将首个转换了

*/