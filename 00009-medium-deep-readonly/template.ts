type DeepReadonly<T> = {
  readonly [Key in keyof T]: keyof T[Key] extends never
    ? T[Key]
    : DeepReadonly<T[Key]>
}


/* 
  暂时理解keyof T[Key] extends never，理解不透never
*/
