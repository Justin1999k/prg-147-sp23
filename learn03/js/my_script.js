// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//
var name1 = "Meri",
  firstName = "Meredith",
  lastName = "Engel";

const taxRate = 0.07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
  //fix the errors
  (firstName = "Meredith"), (document.getElementById("name").innerHTML = name1);
  document.getElementById("full-name").innerHTML = firstName + " " + lastName;
  var firstName = "Doctor";
  var name = "Beba";
  document.getElementById("first").innerHTML = name;
  document.getElementById("nick-name").innerHTML = firstName;
}

function scope() {
  //fix the errors
  document.getElementById("global").innerHTML = name1;
  document.getElementById("local").innerHTML = firstName;
  document.getElementById("tax").innerHTML = taxRate;
  document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
  // Fix the errors
  let dog1 = "Ollie";
  let dog2 = "Nessie";
  let dog3 = "Paisley";
  document.getElementById("dog1").innerHTML = dog1;
  document.getElementById("dog2").innerHTML = dog2;
  document.getElementById("dog3").innerHTML = dog3;
}

function constants() {
  // fix the errors
  const PI = 3.14;
  const dogs = ["Ollie", "Nessie", "Ory"];
  dogs[0] = "Ollie Bear";
  // dogs = ["Shepherd", "Collie", "Bouvier"];
  document.getElementById("pi").innerHTML = PI;
  document.getElementById("doggos").innerHTML = dogs;
}

function myMath() {
  // create statements demonstrating the use of each operator
  let x = 2,
    y = 3;
  //Addition
  document.getElementById("addition").innerHTML = x + y;
  //Subtraction
  document.getElementById("subtraction").innerHTML = x - y;
  // Multiplication
  document.getElementById("multiplication").innerHTML = x * y;
  //Exponent
  document.getElementById("exponent").innerHTML = y ** x;
  //Division
  document.getElementById("division").innerHTML = y / x;
  //Modulus
  document.getElementById("modulus").innerHTML = y % x;
  //Increment
  x++;
  document.getElementById("increment").innerHTML = x;
  //Decrement
  y--;
  document.getElementById("decrement").innerHTML = y;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    let x = 10;
    document.getElementById("equals").innerHTML = "x = 10, " + "x = " + x;
    x+=1;
    document.getElementById("plus-equals").innerHTML = "x += 1, " + "x = " + x;
    x-=2;
    document.getElementById("minus-equals").innerHTML = "x -= 2, " + "x = " + x;
    x*=2;
    document.getElementById("times-equals").innerHTML = "x *= 2, " + "x = " + x;
    x/=3;
    document.getElementById("divide-equals").innerHTML = "x /= 3, " + "x = " + x;
    x%=4;
    document.getElementById("modulus-equals").innerHTML = "x %= 4, " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const array1 = [5, 10, 20];
    document.getElementById("array").innerHTML = array1;
    const obj1 = {name:"Justin", age: 24, gender: "male"};
    document.getElementById("object").innerHTML = obj1.name + ", " + obj1.age + ", " + obj1.gender;

}

