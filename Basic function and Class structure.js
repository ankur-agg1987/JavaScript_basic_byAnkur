// function Person(pId, pName, pAge){
//  this.personId = pId;
//  this.pName = pName;
//  this.pAge = pAge;
//  console.log(this.personId);
//  console.log(this.pName);
//  console.log(this.pAge);
// }

// console.log(Person(101,"Ankur",33));



class Person{
  constructor(pId, pfName,plName, pAge){
  this.personId = pId;
  this.personFirstName = pfName;
  this.personLastName = plName;
  this.pAge = pAge;
  } 
  
  getFullName(){
    return this.personFirstName+ " " +this.personLastName;
  }
}

let p = new Person(101,'Ankur','Aggarwal',56);
console.log(p);
console.log("Type of Person class: "+ typeof Person)
console.log("Type of Person p object: " + typeof p);
console.log(p.getFullName());