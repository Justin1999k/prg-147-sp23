function start() {
  // Math: https://www.w3schools.com/js/js_math.asp
  // Demonstrate the use of round, ceil, floor, trunc, sign
  // pow, min, and random and display to the appropriate paragraphs

  //This function always returns a random number between min and max (both included):
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let x = 2.3;
  document.getElementById("round").innerHTML = Math.round(x);
  document.getElementById("ceil").innerHTML = Math.ceil(x);
  document.getElementById("floor").innerHTML = Math.floor(x);
  document.getElementById("trunc").innerHTML = Math.trunc(x);
  document.getElementById("sign").innerHTML = Math.sign(-1);
  document.getElementById("pow").innerHTML = Math.pow(2, 4);
  document.getElementById("min").innerHTML = Math.min(x, 1, 3, -2, 0);
  document.getElementById("random").innerHTML = Math.random();

  // Random: https://www.w3schools.com/js/js_random.asp
  // create a random integer between 1 and 100 and display in the random2 paragraph
  document.getElementById("random2").innerHTML = getRndInteger(1, 100);

  // Booleans: https://www.w3schools.com/js/js_booleans.asp
  // read the reference

  // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
  // demonstrate and explain the difference between == and === in the
  // comparisons paragraph
  document.getElementById("comparisons").innerHTML =
    "'==' compares just the value of two items. '===' compares the value and type of two items.";

  // Conditions: https://www.w3schools.com/js/js_if_else.asp
  // Read the conditions page
}
