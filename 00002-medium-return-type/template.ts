type MyReturnType<T extends (...args: any[]) => unknown> = 
  T extends (...args: any[]) => infer R
    ? R
    : never;

/* 
  1.限制传入的函数类型
  2.推断函数返回值类型
*/