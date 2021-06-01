/**************************************** 模块一（对象类型接口） *******************************************/
// interface List {
//   readonly id: number;       // readonly 表示只读属性
//   name: string;
//   age?: number               // ? 表示可选属性
// }

// interface Result {
//   data: List[]
// }

// function render(result: Result){
//   result.data.forEach((value) => {
//     console.log(value.id, value.name)
//   })
// }

// let result = {
//   data: [
//     {id: 1, name: 'A', sex: 'male'},       // 如果在规定之外又加了sex属性，也并没有报错
//     {id: 2, name: 'B'}
//   ]
// }

// render(result)

/************************* 特殊案例 *****************************/
// render({             
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })

// 如果是以字面量形式传入，则会对sex这个额外字段进行校验，从而报错
// 处理这个报错方式有两种：
// 方法一：如上，先赋值给变量，然后在传入
// 方法二：加上as Result断言，告诉编译器这是Result对象，这样子就可以绕过编译器静态类型检查

// render({             
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// } as )

/**** 等价 ***/

// render(<Result>{                            // 不建议用，因为在react中会产生歧义        
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })

// 方法三：使用字符串索引签名
// interface List {
//   readonly id: number;
//   name: string;
//   [x: string]: any; // 定义返回类型any，含义：用任何字符串去索引x，可以得到任意结果，这样子就可以支持多个属性了
// }

/**************************************** 模块二（对象类型接口） *******************************************/
// 当不清楚一个接口中有多少属性时，可以使用可索引类型的接口，
// 索引类型的接口可以用字符串去索引，也可以用数字去索引

// interface StringArray {
//   [index: number]: string // 用任何数字都去索引Names，得到的结果都是string
// }

// let chars: StringArray = ['A', 'B']

// interface Names {         
//   // 两种签名都是可以混用的，这样子表示我们既可以用数字索引names，也可以用字符串去索引names，
//   // 需要注意的是，数字索引签名的返回值一定要是字符串签名返回值的子类型，这是因为javascript会进行类型转换，
//   // 将number转换为string，这样子就能保证类型的兼容性
//   [x: string]: string        
//   [z: number]: string 
// }

/**************************************** 模块三（函数类型接口） *******************************************/
// 方式一：之前在数据类型时，也用过用数据变量来定义函数类型，比如：
// let add: (x: number, y: number) => number

// 方式二：也可以接口方式来定义，这两种方式是等价的
// interface Add {
//   (x:number, y:number): number
// }

// 方式三：更简洁的方式，用类型别名，用到type关键字
type Add = (x: number, y:number) => number

// ------- 具体实现函数 ------- 
let add: Add = (a,b) => a + b

/**************************************** 模块四（定义混合类型接口--函数类型接口） *******************************************/
// 指既可以定义函数，也像对象一样，有属性和方法

interface Lib {    // 混合接口定义
  (): void;
  version: string;
  doSomething(): void;
}

// -----混合定义接口实现（这样子定义向全局暴露了一个函数，是个单例）
// let lib: Lib = (() => {}) as Lib      // 用到了类型断言 as Lib
// lib.version = '1.0';
// lib.doSomething = () => {}

// ------如果要实现多个，则用函数包裹
function getLib() {
  let lib: Lib = (() => {}) as Lib      // 用到了类型断言 as Lib
  lib.version = '1.0';
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib();
lib1.doSomething();
lib1();
let lib2 = getLib();
