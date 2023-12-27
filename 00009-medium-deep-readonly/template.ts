type DeepReadonly<T> = {
  readonly [Key in keyof T]: keyof T[Key] extends never
    ? T[Key]
    : DeepReadonly<T[Key]>
}


/* 
  keyof是期待一个对象类型的
*/
