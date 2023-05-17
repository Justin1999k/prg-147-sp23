function loopTests() {
  // for loop - https://www.w3schools.com/js/js_loop_for.asp
  // Write 99 bottles of beer on the wall using a for loop
  // hints - decrement at the end, create a variable, save the song lyrics from
  // the loop to the variable. use <br> instead of \n with the inner html.
  var lyrics = "";
  for (i = 99; i > 1; i--) {
    console.log(i);
    lyrics +=
      i +
      " Bottles of beer on the wall, " +
      i +
      " bottles of beer! Take one down and pass it around, " +
      (i - 1) +
      " bottles of beer on the wall. ";
  }
  document.getElementById("beer").innerHTML =
    lyrics +
    " 1 Bottle of beer on the wall, 1 bottle of beer! " +
    "Take one down and pass it around, 0 bottles of beer on the wall.";

  //for in: https://www.w3schools.com/js/js_loop_forin.asp
  // create an array of months and use the for in
  // command to print them to the for-in paragraph
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let text = "";
  for (let x in months) {
    text += months[x] + "<br>";
  }
  document.getElementById("for-in").innerHTML = text;

  // For of: https://www.w3schools.com/js/js_loop_forof.asp
  // demonstrate the use of For Of to print letters from a string.
  // Create your own string variable of at least 5 letters
  // print the results in the for-of paragraph
let name = "Justin";
let letters = "";
for (let x of name) {
    letters += x + "<br>";
}
document.getElementById("for-of").innerHTML = letters;

  // While loop: https://www.w3schools.com/js/js_loop_while.asp
  // Create a while loop to print the numbers 1 to 50
  // print the results in the while paragraph
  let z = 1;
  let series = "";
  while(z < 51) {
    series += z + "<br>"
    z++;
  }
  document.getElementById("while").innerHTML = series;
}
