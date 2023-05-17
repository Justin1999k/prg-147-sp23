function start() {
  // print your name to the name heading
  document.getElementById("name").innerHTML = "Justin Kianipoor";
  /*
            read/watch the associated reference and complete the directions in the comments.

        */

  /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

  /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
  document.getElementById("add").innerHTML = '5 + "10" = ' + (5 + "10");

  /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

  // Demonstrate the use of toString() and print to the to-string paragraph
  let x = 10;
  document.getElementById("to-string").innerHTML = x.toString() + 4;

  // Demonstrate the use of toExponential() and print to the exponent paragraph
  let y = 1200434;
  document.getElementById("exponent").innerHTML = y.toExponential(3);

  // Demonstrate the use of toFixed() and print to the fixed paragraph
  let z = 12.345534;
  document.getElementById("fixed").innerHTML = z.toFixed(3);

  // Demonstrate the use of toPrecision() and print to the precision paragraph
  let a = 123455;
  document.getElementById("precision").innerHTML = a.toPrecision(3);

  // Demonstrate the use of parseFloat() and print to the float paragraph
  document.getElementById("float").innerHTML = parseFloat(
    "19.34 is a decimal unlike 19."
  );

  // Demonstrate the use of parseInt() and print to the int paragraph
  document.getElementById("int").innerHTML = parseInt("10 23 30");

  // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

  /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
  document.getElementById("equals").innerHTML =
    'The "==" is considered a loose equality and "===" is considered a strict equality. Loose equalities only check if the values of the two items being compared are equal. Strict equalities do this as well but also check if they are also the same data type.';

  // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
  // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // In the logic paragraph describe the order of precedence for and / or operators
  document.getElementById("logic").innerHTML =
    "The order of precedence comes in this order, 1.) '!'     2.) '&&'     3.)'||'";

  // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

  // Write code to demonstrate the use of the switch statement and display results to switch paragraph
  switch (1 + 2) {
    case 3:
      document.getElementById("switch").innerHTML = "3";
      break;
    case 10:
      document.getElementById("switch").innerHTML = "wrong case";
      break;
    default:
      document.getElementById("switch").innerHTML = "default";
  }

  // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
  // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
  // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
  let age = 17;
  let isAdult = age >= 18 ? "Yes" : "No";
  document.getElementById("ternary").innerHTML = isAdult;
}
