type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any



/* 
  1.判断是否函数类型
  2.依次返回参数的类型
*/