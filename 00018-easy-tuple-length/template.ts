type Length<T extends readonly any[]> = T['length']



/* 
  知识点：
    T['length']，是通过索引访问js内置的length的key,然后得到它的值，在js中数组其实就是个对象。
*/