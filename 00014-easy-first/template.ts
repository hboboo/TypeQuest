type First<T extends any[]> = T extends []? never: T[0]


/* 
  知识点：
    1. extends ? : 三元运算符
        当 extends 左边的子类型可以赋值给右边的父类型时，得到true，否则得到else吗，当子类型是联合类型时，会遍历每个exdends一次返回。
    2. 在联合类型中分别谁是父类和子类
        越多的是父类  a|b|c|d   更广泛
        越少的是子类  a|b       更具体
    3. 在类、对象中分辨谁是父类和子类
        属性和方法越少就是父类，越多就是子类，应该子类会覆盖掉父类，这里是和上面联合类型相反的。
*/