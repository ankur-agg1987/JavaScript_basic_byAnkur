var arr = [1,2,3];
console.log(arr);

for(var i=0; i<arr.length;i++){
  console.log(arr[i]);
}

arr[3] = "ankur";
console.log(arr);

//add element at the end
arr.push(4);
console.log(arr);

//remove last element
console.log(arr.pop());
console.log(arr);

//remove starting element
console.log(arr.shift());
console.log(arr);

//add element at starting
arr.unshift(5);
console.log(arr);