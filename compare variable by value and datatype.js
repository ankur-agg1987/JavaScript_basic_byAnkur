var a = 10;
var b = "10";
console.log(typeof a)
console.log(typeof b)

if(a==b) //at this case the content of variable is typecasted and matched if there is possibility
{
  console.log("check for value a == b");
}
else
  console.log("datatype of a and b are differnt")


if(a===b)
  console.log("both are equal");
else
  console.log("both are not equal")