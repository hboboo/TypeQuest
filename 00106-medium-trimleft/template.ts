type Space = ' '| '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S



/* 
  1.列出可遇到空格条件
  2.遍历处理第二个还是空格情况
*/