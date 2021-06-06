/* 
  一个接口可以用来约束 类成员 有哪些 属性 以及 类型
  注意：
    1、类实现接口时候，必须实现接口中声明的所有属性
    2、接口只能约束类中的共有成员
    3、接口不能约束类中的构造函数
  */
// interface Human{
//   name: string;
//   eat(): void
// }

// class Asian implements Human{
//   constructor(name: string){
//     this.name = name
//   }
//   name:string
//   eat(){}
// }

/******************************* 接口继承接口 ************************************/

/*
  一个接口可以继承多个接口
*/

interface Human{
  name: string;
  eat(): void
}

interface Man extends Human{
  run(): void
}

interface Child{
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run(){},
  eat(){},
  cry(){},
}

/**
 * 接口作用：
 *  接口的继承可以抽离出重用的接口
 * 也可以将多个接口合并成一个接口
*/


/******************************* 接口继承类 ************************************/

// 相当于接口把类的成员都抽象出来

// class Auto {
//   state = 1
// }

// interface AutoInterface extends Auto{

// }

// class C implements AutoInterface {
//   state = 1
// }

// class Bus extends Auto implements AutoInterface{
//   // 注意： 不必实现 state ，因为它是auto的子类，默认实现了state
// }


//---------------另外

// 接口在抽离类成员时，不仅抽离类公共成员，还抽离类私有成员和受保护成员，如：

// class Auto {
//   state = 1
//   private state2 = 0
// }

// interface AutoInterface extends Auto{

// }

// class C implements AutoInterface {
//   state = 1      // 此时报错
// }

