type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never

/* 
  1.传入的如果是函数类型，就把第一个参数和后加的参数放进参数数组里，最后返回
*/