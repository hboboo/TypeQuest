type If<C extends boolean, T, F> = C extends true ? T : F



/* 
  1.限制传入类型是布尔类型
  2.三元判断返回相关类型
*/