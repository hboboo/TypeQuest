type Replace<S extends string, From extends string, To extends string> = 
  S extends `${infer L}${From extends '' ? never : From}${infer R}`
  ? `${L}${To}${R}`
  : S


/* 
  1.避免替换空字符串情况
  2.符合这种格式就替换，如果From是在最后，那么infer R会推断为空字符串
*/