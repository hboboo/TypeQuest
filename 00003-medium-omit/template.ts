type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P] : T[P]}



/* 
  1.限制传入条件，k必须是t里面的属性
  2. 使用as断言当过滤器，多了个映射变量p，属于k就不映射给p，反之则映射
*/