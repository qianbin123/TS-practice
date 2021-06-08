/******************************* 类型兼容 ****************************************/
/**
 * X 兼容 Y： X（目标类型）= Y（源类型）
*/
// let s: string = 'a'
// s = null          // 此时可以说明null类型是string的子类型

/******************************* 接口兼容 ****************************************/
// interface X{
//   a:any
//   b:any
// }

// interface Y{
//   a:any
//   b:any
//   c:any
// }

// let x:X = {a: 1, b: 2}
// let y:Y = {a: 1, b: 2, c: 3}

// x = y                // 成员少的可以兼容成员多的
// y = x             // x 不能赋值给 y

/******************************* 函数兼容性-函数作为参数情况下 ****************************************/

type Handler = (a:number, b:number) => void
function hof(handler: Handler) {
  return handler
}

// 目标函数兼容原函数需要满足

//（1）参数个数
//--------------------------- (固定参数情况) -------------------------------

// let handler1 = (a: number) => {}         // 可以
// hof(handler1)

// let handler2 = (a: number, b: number, c: number) => {}         // 不可以，参数多了
// hof(handler2)

// --------------------------- (可选参数和剩余参数情况) -------------------------------
let a = (p1: number, p2: number) => {}           // 固定参数
let b = (p1?: number, p2?: number) => {}         // 可选参数
let c = (...args: number[]) => {}                // 剩余参数

// 固定参数 可以兼容 可选参数 和 剩余参数
a = b
a = c

// 可选参数 不兼容 固定参数 和剩余参数 (不过tsconfig.json中strictFunctionTypes改成false则可以兼容)
b = c
b = a

// 剩余参数 可以兼容 可选参数 和 固定参数
c = a
c = b

//（2）参数类型

// -- 基础类型情况 --
// let handler3 = (a: string) => {}          // 不可以
// hof(handler3)

// -- 复杂类型情况 --
// interface Point3D{
//   x:number
//   y:number
//   z:number
// }
// interface Point2D{
//   x:number
//   y:number
// }

// let p3d = (point: Point3D) => {}
// let p2d = (point: Point2D) => {}

// p3d = p2d                  // 参数多的要兼容参数少的
// p2d = p3d              不可以

//（2）返回值类型

// let f = () => ({name: 'Alice'})
// let g = () => ({name: 'Alice', location: 'beijing'});
// f=g  // 成员少的兼容成员多的
// g=f  // 不可以

// -- 函数重载情况 --
// function overload(a: number, b:number): number;
// function overload(a: string, b:string): string;
// function overload(a: any, b:any): any;

/******************************* 枚举兼容性 ****************************************/

// 枚举和number之间可以互相兼容
// enum Fruit {Apple, Banana}
// enum Color {Red, Yellow}
// let fruit: Fruit.Apple = 3
// let no: number = Fruit.Apple

// 枚举之间是互相不兼容的
// let color: Color.Red = Fruit.Apple

/******************************* 类兼容性 ****************************************/

// 情况一
// class A {
//   constructor(p:number, q:number){}
//   id: number = 1
// }

// class B {
//   static s = 1
//   constructor(p:number){}
//   id: number = 2
// }

// let aa = new A(1,2);
// let bb = new B(1);

// aa = bb   // 可以
// bb = aa   // 可以          都可以是因为两个都有成员id，而且static和constructor是不作为比较的

// 情况二
class A {
  constructor(p:number, q:number){}
  id: number = 1
  private name: string = ''
}

class B {
  static s = 1
  constructor(p:number){}
  id: number = 2
  private name: string = ''
}

let aa = new A(1,2);
let bb = new B(1);

// aa = bb   // 不可以
// bb = aa   // 不可以          如果有私有成员则不可兼容

class C extends A {}
let cc = new C(1,2)
aa = cc      // 可以
cc = aa      // 可以          如果有私有成员则父子之间可以兼容

/******************************* 泛型兼容性 ****************************************/
// interface Empty<T>{
//   value: T
// }
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1 = obj2            // 如果泛型接口中没有任何成员，则可以兼容，如果增加了成员，则不兼容

// -- 泛型函数 --
let log1 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log2 = <U>(y: U): U => {
  console.log('y')
  return y
}

log1 = log2             // 如果两个泛型函数的定义相同，但是没有指定类型参数，也是可以互相兼容的
