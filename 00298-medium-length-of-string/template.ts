type LengthOfString<S extends string, T extends string[] = []> = 
  S extends `${infer F}${infer R}`
    ? LengthOfString<R, [...T, F]>
    : T['length']


/* 
  把字符串拆分每一个放进数组里，最后计算数组的长度即是这字符串的长度
*/