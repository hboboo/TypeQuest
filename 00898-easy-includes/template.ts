type IsEqual<T, U> =
  (<G> () => G extends T ? 1 : 2) extends
  (<G> () => G extends U ? 1 : 2) 
    ? true 
    : false;

type Includes<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? IsEqual<First, U> extends true ? true : Includes<Rest, U>
    : false;
  

/* 
  1.判断两类型是否相等返回true、false的Isqual类型
  2.现在传入只读数组，判断数组是否为空数组
  3.如果数组不为空，把首个元素和U对比，不相等时再递归剩下数组元素对比
*/
