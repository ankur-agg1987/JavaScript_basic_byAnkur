var arr = [1,2,3];
console.log(arr);

for(var i=0; i<arr.length;i++){
  console.log(arr[i]);
}

arr[3] = "ankur";
console.log(arr);
console.log("length of an array :"+arr.length);

// index number for an array - 0 1 2 3 4 5 6 7 8 9 a b aa abc

arr['first']=78;
arr['ankur']=20;
arr['second']=8;
arr[10]=56;
arr[7]=44;
arr['c']="Hello";

for(var index in arr){
  console.log("value at index:"+index+" value is: "+arr[index]);
}

//will not consider the index of not integer value
for(var value of arr){
  console.log(value);
}