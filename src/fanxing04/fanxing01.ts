/*******************  泛型定义函数 **********************/
// 用泛型改造上面的log函数
// function log<T>(value: T): T{      // 参数类型和返回值都改成类型T（表示any类型）
// 	console.log(value);
//   return value
// }

// 调用方式1,在调用时候直接指明类型
// log<string[]>(['a', 'b'])

// 调用方式2，利用TS的类型推断
// log(['a', 'b'])

/***************** 定义函数类型 ****************/

// 使用类型别名定义一个泛型的函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

/***************** 泛型用在接口中 ****************/
// interface Log{
//   <T>(value: T): T         // 这样和类型别名的作用是等价的
// }

// 上面泛型仅仅约束了一个函数，泛型也可以约束其他成员，只需要<T>换个位置 --------
// interface Log<T>{
//   (value: T): T         // 这样和类型别名的作用是等价的
// }

// 注意：当泛型约束了整个接口之后，我们在实现时候必须指定一个类型，比如------------

// interface Log<T>{
//   (value: T): T         // 这样和类型别名的作用是等价的
// }
// let myLog: Log = log                   // false (1)会提示缺少类型参数

// let myLog: Log<number> = log            // true (2)指定了number类型
// myLog(1)

// (3)或者直接指定
// interface Log<T = string>{
//   (value: T): T        
// }
// let myLog: Log = log            // true
// myLog(1)
