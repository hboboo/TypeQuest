type MyReadonly2<T, K extends keyof T = keyof T> = { 
  [ P in keyof T as P extends K ? never: P ] : T[P]
} & {
  readonly [P in K] : T[P]
}

/* 
  1.k可能为空需要赋值默认值
  2.& 交叉类型，将两个对象合并成一个对象
  3.采用分开处理再合并，过滤K即是未指定加readonly属性
*/