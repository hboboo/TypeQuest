type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`


/* 
  用模版字符串，把数字转换成字符串，利用判断一下负数的结果，最后返回字符串
*/