/*********************************** 函数定义 **************************************/


// 方式一
function add1(x:number, y:number){
  return x + y
}

// 方式二
let add2: (x:number, y:number) => number

// 方式三
type add3 = (x:number, y:number) => number

// 方式四
interface add4 {
  (x:number, y:number): number
}

// 注意： js中对函数的实参和形参没有定义个数, ts中需要一一的对应
// add1(1,2,4)    false
// add1(1)    false
// add1(1,2)  true

/*********************************** 函数定义-可选参数 **************************************/
// 注意：定义时，必选参数需要在可以参数之前
function add5(x:number, y?: number){
  return y? x+y: x;
}
add5(1)

/*********************************** 函数定义-设置默认参数 **************************************/
// 注意：在必选参数前，默认参数是不可以省略的，在必选参数之后的默认值可以不传
function add6(x:number, y = 0, z:number, q = 1){
  return x+y+z+q
}
// 如果这样子，3就赋值给y了
console.log(add6(1,undefined,3));

/*********************************** 函数定义-剩余参数 **************************************/
function add7(x:number, ...rest:number[]){
  return x + rest.reduce((pre, cur)=>pre + cur)
}
/*********************************** 函数定义-函数重载 **************************************/
function add8(...rest:number[]): number;
function add8(...rest:string[]): string;
function add8(...rest:any[]): any {
  let first = rest[0];
  if(typeof first === 'string'){
    return rest.join('')
  }
  if(typeof first === 'number'){
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log(add8(1,2,3))
console.log(add8('a','b','c'))
