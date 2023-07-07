var obj1 = {
  name: "Person 1",
  age: "5",
};
var obj2 = {
    age: "5",
    name: "Person 1",
};
var a = JSON.stringify(obj1);
var b = JSON.stringify(obj2);
if (a == b) {
  console.log("true"); 
} else {
  console.log("false"); 
} 