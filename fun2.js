let age = prompt("enter the age");
function myvote(age) {
  let a = age <= 18 ? console.log("u can vote ") : console.log("u cant vote");
  return a;
}
const e = myvote(age);
console.log(e);
