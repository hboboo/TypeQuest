type AnyOf<T extends readonly any[]> = 
  T[number] extends 0 | '' | false | [] | {[key: string]: never} | undefined | null
    ? false
    : true


/* 
  通过T[number]读取数组里面的元素，列出可能为空的情况
*/