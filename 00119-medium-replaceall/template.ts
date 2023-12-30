type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer R1}${From}${infer R2}`
    ? `${R1}${To}${ReplaceAll<R2, From, To>}`
    : S


/* 
  1.递归到把From彻底换干净了
*/