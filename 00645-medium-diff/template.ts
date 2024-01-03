type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>



/* 
  利用到Omit基本工具类库，交叉类型和联合类型，经过排除差异得到结果
*/