type TupleToObject<T extends readonly (keyof any)[]> = {
  [p in T[number]]: p
}

/* 
  思路：
  1. (keyof any)[]这里是为了限制一下元组的类型keyof any其实得到的就是string | number | symbol三种类型。
  2. T[number],和T[key]是有区别的，在这里它表示了一个正确地对数组和元组索引访问。返回了该数组的元素的类型组合而成的联合类型。
  3. 最后遍历到p变量上，取过去给值p。
*/