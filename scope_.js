//"use strict"; //this will striclty ask for declaration first for any scope variable
let x = 10;

function myFun(){
  let y = 20;
  console.log("inside myfun x:"+x);
  console.log("inside myfun y:"+y);
  {
    let z = 30;
    a = 10;
    console.log("inside block x:"+x);
    console.log("inside block y:"+y);
    console.log("inside block z:"+z);
    console.log("inside block a:"+a);
  }
    console.log("Outside block z:"+z);
    console.log("inside myfun a:"+a);
 
}

myFun();
console.log("outside function x:"+x);
console.log("outside function a:"+a);
    //console.log(y);
    //console.log(z);

/*
Exception: ReferenceError: can't access lexical declaration `z' before initialization
myFun@Scratchpad/12:9:5
@Scratchpad/12:21:1
*/
/*
Exception: ReferenceError: z is not defined
myFun@Scratchpad/12:16:5
@Scratchpad/12:21:1
*/