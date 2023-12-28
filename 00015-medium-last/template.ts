type Last<T extends any[]> = [any, ...T][T["length"]]


/* 
  改变了数组的长度
*/