let cost1 = 0;
let cost2 = 0;
let cost3 = 0;

function addDate() {
  let today = new Date();
  document.getElementById("myDate").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("rm1length").innerHTML = "";
  document.getElementById("rm1width").innerHTML = "";
  document.getElementById("rm1height").innerHTML = "";
  document.getElementById("rm1cost").innerHTML = "";
}

function showScreen() {
  let numRooms = document.getElementById("rooms").value;
  if (numRooms == 1) {
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
  } else if (numRooms == 2) {
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "none";
  } else if (numRooms == 3) {
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "block";
  }
}


function estimate() {
  let length = parseFloat(document.getElementById("rm1length").value);
  let width = parseFloat(document.getElementById("rm1width").value);
  let height = parseFloat(document.getElementById("rm1height").value);
  let totalSqFt = length * height * 2 + length * width * 2;
  cost1 = totalSqFt * 0.65;

  let length2 = parseFloat(document.getElementById("rm2length").value);
  let width2 = parseFloat(document.getElementById("rm2width").value);
  let height2 = parseFloat(document.getElementById("rm2height").value);
  let totalSqFt2 = length2 * height2 * 2 + length2 * width2 * 2;
  cost2 = totalSqFt2 * 0.65;

  let length3 = parseFloat(document.getElementById("rm3length").value);
  let width3 = parseFloat(document.getElementById("rm3width").value);
  let height3 = parseFloat(document.getElementById("rm3height").value);
  let totalSqFt3 = length3 * height3 * 2 + length3 * width3 * 2;
  cost3 = totalSqFt3 * 0.65;

  let numRooms = document.getElementById("rooms").value;
  if (numRooms == 1) {
    var totalCost = cost1;
  } else if (numRooms == 2) {
    var totalCost = cost1 + cost2;
  } else if (numRooms == 3) {
    var totalCost = cost1 + cost2 + cost3;
  }

  let name = document.getElementById("name").value;
  document.getElementById("rm1cost").value = cost1;
  document.getElementById("rm2cost").value = cost2;
  document.getElementById("rm3cost").value = cost3;
  document.getElementById("estimate").innerHTML =
    name + ", your estimated cost is $" + totalCost;
}
