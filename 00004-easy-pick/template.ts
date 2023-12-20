type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}




/* 
  知识点：
    1. keyof 索引查询
      keyof T 返回的类型就是该T的公用属性key的联合。也就是键名组合的类型，key就是键名。

    2. T[key]索引访问
      type a = T['name'],等于T中名为叫name的key，它的类型赋值给了a;
      其中 T[keyof T]方式：
        分解一下理解，keyof T，获得了T的全部键名（key），现在把全部键名使用了T[key]索引访问，经过索引访问
        得到了每个key的类型，最终是全部key类型组成的联合类型。
      T[keyof k]的方式：
        原理一样，先获取k的key,通过T[key]索引访问，会得到一个它们共同的key联合类型，注意，如果K的key在T是没有的，则会any。

    3. extends，接口继承
        子类 extends 基类

    4. 类型映射
        [key in K]，这个中括号的必须，是ts设定，属于把k遍历到key上，k是文字类型 'itle' | 'description' | 'completed'
        key 是个变量，它可以是其他变量，如[p in K]
  思路：
  主要通过K extends keyof T约束K必须为keyof T的子类型，
  keyof T得到的是T的所有key组成的联合类型     得到的是 title | description | completed

  1.传入的k参数限制处理。
  2.key的处理是，把k参数遍历出来。
  3.通过索引访问，把类型也取出来。 title  :  T['title']    结果就是  title  :  string
*/