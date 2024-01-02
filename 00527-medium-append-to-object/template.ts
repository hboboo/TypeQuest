type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}

/* 
  很经典的读取键名，然后适配键值
*/