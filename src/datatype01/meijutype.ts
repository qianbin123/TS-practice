// 数字枚举
enum Role {
  Reporter,
  Developer = 2,
  Maintainer,
  Owner,
  Guest
}

console.log(Role.Reporter)    // 0     // 默认后面的元素会递增
console.log(Role.Developer)    // 2

// 字符串枚举
enum Message {
  Success = '成功',
  Fail = '失败'
}

// 异构枚举（由数字枚举和字符串枚举混用构成）
enum Answer {
  N,
  Y = 'YES'
}

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举 (在编译阶段会被移除，在运行时才会起作用，作用场景：不需要对象，而需要对象的值时候，可以用常量枚举，这样子可以减少在编译环境的代码 )
const enum Month { 
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month]

// 定义枚举类型
enum E { a, b }                          
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3    // 可以任意number类型赋值给枚举类型
let f: F = 3
//  e === f     // 两种不同类型（E和F）的枚举是不能进行比较的

// 定义枚举成员类型
let e1: E.a = 1
let e2: E.b 
// e1 === e2       // 不同成员类型不能进行比较 false

let e3: E.a = 1
// e1 === e3          // 相同成员类型可以进行比较 true
 
let g1: G = G.b
let g2: G.a = G.a