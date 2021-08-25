//"use strict"; //this will striclty ask for declaration first for any scope variable
var x = 10;

function myFun(){
  var y = 20;
  console.log("inside myfun x:"+x);
  console.log("inside myfun y:"+y);
  {
    z = 30; // only intialization of z is done
    a = 10;
    console.log("inside block x:"+x);
    console.log("inside block y:"+y);
    console.log("inside block z:"+z);
    console.log("inside block a:"+a);
  }
    console.log("Outside block z:"+z);
    console.log("inside myfun a:"+a);
  var z; //declaration is defined
}

myFun();
console.log("outside function x:"+x);
console.log("outside function a:"+a);
    //console.log(y);
    //console.log(z);
/*
Exception: ReferenceError: assignment to undeclared variable a
myFun@Scratchpad/11:10:5
@Scratchpad/11:21:1
*/