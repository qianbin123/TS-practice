class Dog{
  constructor(name: string){
    this.name = name;
  }
  name: string
  run(){

  }
}

console.log(Dog.prototype);
let dog = new Dog('wawa');
console.log(dog);

/**
   不论es6还是ts中，
    “类成员的属性”都是“实例属性”，而不是“原型属性”；
    “类成员的方法”都是“实例方法”
*/

/************************** 类的继承 *****************************/
// class Husky extends Dog {
//   constructor(name: string, color: string){
//     super(name);
//     this.color = color;
//   }
//   color: string
// }

// 等效

// class Husky extends Dog {
//   constructor(name: string, color: string){
//     super(name);
//     this.color = color;
//   }
//   public color: string
// }

// 等效

class Husky extends Dog {
  constructor(name: string, public color: string){
    super(name);
    this.color = color;
  }
}

/************************** 类的修饰符 *****************************/
/*
  (1)public：公有成员，类的属性默认都是public，表示对所有人都是可见的

  (2)private：私有成员，只能在类的本身中被调用（子类也不能调用），不能被类的实例调用

        注意：
        class Cat {
          private constructor(name: string){
            this.name = name;
          }
          name: string
          run(){}
        }
        如果private加在构造函数上，则表示该类既不能被继承，也不能被实例化
  
  (3)protected：受保护成员，只能在类和子类中访问，不能在类的实例中访问，即不能被实例化，只能被继承

  (4)readonly：只读属性

        class Cat {
          private constructor(name: string){
            this.name = name;
          }
          name: string
          run(){}
          readonly: legs: number = 4         表示这个属性不能被更改
        }
  (5)static：静态成员，只能通过类名来调用，子类访问不了，可以被继承
*/
