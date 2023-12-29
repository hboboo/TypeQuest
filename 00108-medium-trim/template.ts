type space = ' '| '\n' | '\t'
type Trim<S extends string> = S extends `${space}${infer T}` | `${infer T}${space}` ? Trim<T> : S