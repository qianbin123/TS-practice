enum Type { Strong, Week }

class Java {
  helloJava() {
    console.log('hello Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaS')
  }
  javaScript: any
}

// function getlanguage(type: Type){
//   let lang = type === Type.Strong ? new Java(): new JavaScript()
//   // 此时如果需要打印，但是lang为联合类型，会报错
//   // if(lang.helloJava){
//   //   lang.helloJava()
//   // }else{
//   //   lang.helloJavaScript()
//   // }

//   // 加断言方式，不过不太优雅,代码可读性很差，于是就出来了类型保护机制，他可以对类型提前预判
//   if((lang as Java).helloJava){
//     (lang as Java).helloJava()
//   }else{
//     (lang as JavaScript).helloJavaScript()
//   }
//   return lang
// } 

/************************************* 类型保护 **********************************/

// 概念：TypeScript能够在特定的区块中保证变量属于某种确定的类型
//     可以在此区块中放心的引用此类型的属性，或者调用此类型的方法

/* 方式一：instanceof */
// function getlanguage(type: Type){
//   let lang = type === Type.Strong ? new Java(): new JavaScript()

//   if(lang instanceof Java){
//     lang.helloJava()
//   }else{
//     lang.helloJavaScript()
//   }
//   return lang
// }

/* 方式二：in */
// function getlanguage(type: Type){
//   let lang = type === Type.Strong ? new Java(): new JavaScript()

//   if('java' in lang){
//     lang.helloJava()
//   }else{
//     lang.helloJavaScript()
//   }
//   return lang
// }

/* 方式二（根据属性判断）：in */
// function getlanguage(type: Type){
//   let lang = type === Type.Strong ? new Java(): new JavaScript()

//   if('java' in lang){
//     lang.helloJava()
//   }else{
//     lang.helloJavaScript()
//   }
//   return lang
// }

/* 方式三（判断基本类型）：typeof */
// function getlanguage(type: Type, x: string | number){
//   let lang = type === Type.Strong ? new Java(): new JavaScript()

//   if(typeof x === 'string'){
//     x.length
//   }else{
//     x.toString(2)
//   }
//   return lang
// }

/* 方式三（通过创建类型保护函数）   */
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getlanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  return lang
}