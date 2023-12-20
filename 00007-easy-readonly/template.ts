type MyReadonly<T> = {
  readonly [key in keyof T] : T[key]
}


/* 
  思路：
  通过属性映射遍历，给每个key都添加一个readonly
*/