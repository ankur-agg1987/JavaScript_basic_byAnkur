var x = 10;

function myFun(){
  var y = 20;
  console.log("inside myfun x:"+x);
  console.log("inside myfun y:"+y);
  
  {
    var z = 30;
    a = 10;
    console.log("inside block x:"+x);
    console.log("inside block y:"+y);
    console.log("inside block z:"+z);
    console.log("inside block a:"+a);
  }
    console.log("inside myfun z:"+z);
    console.log("inside myfun a:"+a);
}

myFun();
console.log("outside function x:"+x);
console.log("outside function a:"+a);
//console.log(y);
console.log(a);