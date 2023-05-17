const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
var grabMonth = "";

function loadCalendar() {
  for (i in months) {
    grabMonth = months[i];
    switch(grabMonth) {
      case "january":
        document.getElementById(grabMonth).innerHTML = "January 10th: Justin's Birthday <br>" +
        "January 16th: Martin Luther King Jr. Day "; 
        break;
      case "february":
        document.getElementById(grabMonth).innerHTML = "February 14th: Valentine's Day <br>" +
        "February 20th: Presidents' Day";
        break;
      case "march":
        document.getElementById(grabMonth).innerHTML = "March 14th: Brother's Birthday <br>" +
        "March 17th: St. Patrick's Day";
        break;
      case "april":
        document.getElementById(grabMonth).innerHTML = "April 9th: Easter Sunday <br>" +
        "April 18th: Tax Day";
        break;
      case "may":
        document.getElementById(grabMonth).innerHTML = "May 14th: Mother's Day <br>" +
        "May 29th: Memorial Day";
        break;
      case "june":
        document.getElementById(grabMonth).innerHTML = "June 18th: Father's Day <br>" +
        "June 19th: Juneteenth";
        break;
      case "july":
        document.getElementById(grabMonth).innerHTML = "July 4th: Independence Day <br>" +
        "July 23rd: Parents' Day";
        break;
      case "august":
        document.getElementById(grabMonth).innerHTML = "August 1st: World Lung Cancer Day <br>" +
        "August 12th: Youth Day";
        break;
      case "september":
        document.getElementById(grabMonth).innerHTML = "September 4th: Labor Day <br>" +
        "September 15th: Hispanic Heritage Month";
        break;
      case "october":
        document.getElementById(grabMonth).innerHTML = "October 9th: Columbus Day <br>" +
        "October 31st: Halloween";
        break;
      case "november":
        document.getElementById(grabMonth).innerHTML = "November 11th: Veterens Day <br>" +
        "November 23rd: Thanksgiving Day";
        break;
      case "december":
        document.getElementById(grabMonth).innerHTML = "December 25th: Christmas Day <br>" +
        "December 31st: New Year's Eve";

    }
  }
}


