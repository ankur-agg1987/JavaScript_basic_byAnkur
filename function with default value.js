function demo(a,b,c=50,d=300,e=200){
  console.log("a :"+a);
  console.log("b :"+b);
  console.log("c :"+c);
  console.log("d :"+d);
  console.log("e :"+e);
}

demo(1,2,3,4,5);
console.log("***************");
demo(1,2,3);
console.log("***************");
demo(1,2,3,4,5,6,7,8);
console.log("***************");
demo(1,2);