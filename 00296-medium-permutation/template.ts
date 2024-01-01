type Permutation<T, K=T > = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation<Exclude<T,K>>]
    : never

/* 
  1.有点复杂，二刷时回头处理一下，有分布式的知识点
    简单说通过递归每次拿出一个字母放在最前面，列出全部可能性
*/