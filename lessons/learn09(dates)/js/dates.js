/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const d = new Date();
document.getElementById("basic").innerHTML = d;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const d2 = new Date();
document.getElementById("today").innerHTML = d2.toISOString().slice(0, 10);

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const bDay = new Date(1999, 01, 10).toDateString();
document.getElementById("birthday").innerHTML = bDay;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const dISO = new Date().toISOString();
document.getElementById("iso").innerHTML = dISO;

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date("Jan 10 1999");
document.getElementById("date1").innerHTML = date1;
const date2 = new Date("2010/03/14");
document.getElementById("date2").innerHTML = date2;
const date3 = new Date("1999-01").toISOString();
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const getDateMethodTest = new Date();
document.getElementById("get1").innerHTML = getDateMethodTest.getFullYear();
document.getElementById("get2").innerHTML = getDateMethodTest.getMonth();
document.getElementById("get3").innerHTML = getDateMethodTest.getDay();
document.getElementById("get4").innerHTML = getDateMethodTest.getHours();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const setDateMethodTest = new Date();
setDateMethodTest.setHours(19);
document.getElementById("set1").innerHTML = setDateMethodTest;
setDateMethodTest.setMinutes(45)
document.getElementById("set2").innerHTML = setDateMethodTest;
setDateMethodTest.setMonth(1)
document.getElementById("set3").innerHTML = setDateMethodTest;
setDateMethodTest.setFullYear(1999, 0, 10)
document.getElementById("set4").innerHTML = setDateMethodTest;
