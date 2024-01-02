type StringToUnion<T extends string> = T extends `${infer Letter}${infer Rest}`
  ? Letter | StringToUnion<Rest>
  : never


/* 
  1.也是利用到了模版字符串和递归
  2.还是一样递归配合首个字母一个一个拆开判断
*/