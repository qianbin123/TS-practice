// 1、原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'haha'

// 2、数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, '2']

// 3、元组
let tuple: [number, string] = [0, '1']

/***** 错误示例 *****/
// tuple.push(2)
// console.log(tuple)
// tuple[2] // 元祖可以放入，但是无法获取

// 4、对象
/***** 错误示例 *****/
// let obj: object = {x: 1, y: 2}
// obj.x = 3  // 因为上面没有具体指明里面的属性是什么类型

let obj: {x:number, y:number} = {x: 1, y: 2}


// 5、symbol类型（指具有唯一值）
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)  // 显示 false

// 6、函数
// let add = (x: number, y: number): number => x + y              // 入参类型 以及 返回值类型（也可以省略，用到的ts的类型推断功能）

let compute: (x: number, y:number) => number                   // 做了一个函数类型compute，但是还没实现，可以在之后做函数内容书写
compute = (a, b) => a + b;                                     // 因为上面做了类型声明，所以这里不用写类型了

// 7、undefined，null
let un: undefined = undefined
let nu: null = null

/***** 特殊情况 *****/
// 官方文档上说明undefined和null是任何类型的子类型，不过直接设置还是会报错，有两种方式：
//  1、需要ts配置文档设置关闭 "strictNullChecks": false；
//  2、对num设置联合类型允许设置null和undefined，比如let num: number | null | undefined = 123
// num = null
// num = undefined

// 8、void类型，比如：
let noReturn = () => {} // 一个没有任何返回值的函数，他的类型就是void

// 9、any类型（如果不是特殊情况，不建议使用，不然没必要用ts了）比如：
let a;
a = 1
a = '12'

// 10、never类型（指永远不会有返回值的类型）比如：
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true){}
}
