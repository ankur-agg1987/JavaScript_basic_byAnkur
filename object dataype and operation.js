var x = {};
x.prop1 = 10;
x.prop2 = "ankur";
x.prop3 = false;
x.prop4 = "undefined"
console.log(typeof x);
console.log(x);
x.prop1 = "aman"
console.log(x)
x.prop5 = {};
console.log(x)
x.prop6 = function(){
  console.log("Hello i am first class function")
}
console.log(x)
console.log(typeof x.prop1)
console.log(typeof x.prop2)
console.log(typeof x.prop3)
console.log(typeof x.prop4)
console.log(typeof x.prop5)
console.log(typeof x.prop6)
console.log( x.prop1)
console.log( x.prop2)
console.log( x.prop3)
console.log( x.prop4)
console.log( x.prop5)
console.log( x.prop6)
x.prop6();