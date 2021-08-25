var sum = function(a,b){
  return a+b;
}
console.log(sum(10,20));

//OR

var sum = (a,b) =>{ a+b; }

var greet = function(name){
  console.log("Hello"+name);
}
console.log(greet("ankur"));

//OR

var greet=name=>console.log("Hello"+name);

var greet = function(name,age){
  console.log("Hello"+name+" your age is:"+age);
  
}
console.log(greet("ankur","30"));

//OR

var greet=name=>(name,age)=>{
  console.log("Hello"+name+" your age is:"+age);
}