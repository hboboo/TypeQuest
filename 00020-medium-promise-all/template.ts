type awaited<T> = T extends Promise<infer R> ? awaited<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: awaited<T[P]>
}>


/* 
  搞不太懂
*/