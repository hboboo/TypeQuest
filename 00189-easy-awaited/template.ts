type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any> 
    ? MyAwaited<U>
    : U
  : never;


  /* 
    1.限制传入类型必须是Primise
    2.使用infer推导Promise参数类型
    3.如果推导类型仍是Primise
    4.循环调用
    5.否则返回调用类型
  */