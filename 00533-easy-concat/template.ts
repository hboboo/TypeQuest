type tuple = readonly unknown[]
type Concat<T extends tuple, U extends tuple> = [...T, ...U]



/* 
  1.限制传入条件,只读数组，让共享时数据不可变。
  2.数组展开，融入一个数组。
  3.返回
*/