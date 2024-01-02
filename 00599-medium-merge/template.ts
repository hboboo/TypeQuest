type Merge<F extends Record<string,any>, S extends Record<string,any>> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : (F & S)[K]
}


/* 
  (F & S)是合并出来的新对象，那么可以在它的值做出来，如果key是属于后来的，我们可以选择用后来的
  不属于的话就原封不动
*/