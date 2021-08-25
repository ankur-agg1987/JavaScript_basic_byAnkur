var printvalues = function(a,b,c){
  console.log("a:"+a);
  console.log("b:"+b);
  console.log("c:"+c);
}

// the last function or key with new function body or value will be used, rather than previous function
var printvalues = function(a,b){
  console.log("a:"+a);
  console.log("b:"+b);
}


//arguments is implicit object
var printvalues = function(){
  for(var i=0; i<arguments.length;i++){
    console.log("value :" + arguments[i]);
  }
}

printvalues(1,2,3);
console.log("***********");
printvalues("ankur",31,'m');
console.log("***********");
printvalues(1);
console.log("***********");
printvalues(1,2);
console.log("***********");
printvalues();
console.log("***********");
printvalues('a','b','c','d','e');