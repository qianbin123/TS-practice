/*********************** 定义泛型类 ***************************/ 
// class Log<T>{
//   run(value: T){
//     console.log(value)
//     return value
//   }
// }
// 使用1
// let log1 = new Log<number>();
// log1.run(1);

// 使用2，不使用类型参数,value可以是任意值
// let log2 = new Log();
// log2.run('1')


// 注意：泛型不能作用于静态成员, 比如以下错误示例
// class Log<T>{
//   static run(value: T){
//     console.log(value)
//     return value
//   }
// }

/*********************** 泛型约束 ***************************/ 
// function log<T>(value: T): T {
//   console.log(value, value.length)          // 这里希望不止打印出参数，还能打印参数的属性，此时这里会提示“不存在length属性”
//   return value
// }

// 以上就需要类型约束了，具体实现如下
interface Length {
  length: number
}

function log<T extends Length>(value: T): T {        // T extends Length 表示T受到了约束，而不是任意都能传了（输入的参数不管什么类型，但是必须得有length属性）
  console.log(value, value.length)
  return value
}

// 比如
log([1]);
log('123');
log({length: 1});

/*********************** 总结泛型好处 ***************************/ 

/**
 * 1、函数和类可以轻松支持多种类型，增强程序的扩展性
 * 2、不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 * 3、灵活控制类型之间约束
*/