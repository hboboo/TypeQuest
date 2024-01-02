type Flatten<S extends any[], T extends any[] = [] > = S extends [infer X, ...infer Y]
  ? X extends any[]
    ? Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]>
  : T
  

/* 
  它有两个分支，一支递归扁平化处理完的数组T,还有一只是把原数组一直拆头X遍历处理
*/