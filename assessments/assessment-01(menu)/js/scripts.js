const burgerCost = 3.99,
  cheeseBurgerCost = 4.99,
  hotdogCost = 3.99,
  pizzaCost = 2.99,
  chickenStripCost = 4.99,
  waterCost = 0.99,
  softDrinkCost = 1.99,
  juiceCost = 2.99,
  chocolateCakeCost = 4.99,
  iceCreamSundaeCost = 3.99,
  applePieCost = 5.99,
  tiramisuCakeCost = 4.99,
  cinnamonChurroCost = 1.99;

function getTotal() {
  let userName = document.getElementById("nameTag").value;
  // Gets value of individual item quantities and assigns them to quantity variables.
  let burgerQuant = parseInt(document.getElementById("burger").value),
    cheeseBurgerQuant = parseInt(document.getElementById("cheeseburger").value),
    hotdogQuant = parseInt(document.getElementById("hotdog").value),
    pizzaQuant = parseInt(document.getElementById("pizza").value),
    chickenStripQuant = parseInt(
      document.getElementById("chickenStrips").value
    ),
    waterQuant = parseInt(document.getElementById("water").value),
    juiceQuant = parseInt(document.getElementById("juice").value),
    chocolateCakeQuant = parseInt(
      document.getElementById("chocolateCake").value
    ),
    iceCreamSundaeQuant = parseInt(
      document.getElementById("iceCreamSundae").value
    ),
    applePieQuant = parseInt(document.getElementById("applePie").value),
    tiramisuCakeQuant = parseInt(document.getElementById("tiramisuCake").value),
    cinnamonChurroQuant = parseInt(
      document.getElementById("cinnamonChurro").value
    ),
    pepsiQuant = parseInt(document.getElementById("pepsi").value),
    cokeQuant = parseInt(document.getElementById("coke").value),
    spriteQuant = parseInt(document.getElementById("sprite").value),
    softDrinkQuant = pepsiQuant + cokeQuant + spriteQuant;

  // Calculates subtotals and total cost.
  let entreeTotal =
    burgerCost * burgerQuant +
    cheeseBurgerCost * cheeseBurgerQuant +
    hotdogCost * hotdogQuant +
    pizzaCost * pizzaQuant +
    chickenStripCost * chickenStripQuant;

  let drinkTotal =
    waterCost * waterQuant +
    softDrinkCost * softDrinkQuant +
    juiceCost * juiceQuant;

  let desertTotal =
    chocolateCakeCost * chocolateCakeQuant +
    iceCreamSundaeCost * iceCreamSundaeQuant +
    applePieCost * applePieQuant +
    tiramisuCakeCost * tiramisuCakeQuant +
    cinnamonChurroCost * cinnamonChurroQuant;

  let totalCost = entreeTotal + drinkTotal + desertTotal;

  // Displays subtotals and total cost to user.
  document.getElementById("entreeTotalDisplay").innerHTML =
    "Entree cost: $" + entreeTotal.toFixed(2);
  document.getElementById("drinkTotalDisplay").innerHTML =
    "Drink cost: $" + drinkTotal.toFixed(2);
  document.getElementById("desertTotalDisplay").innerHTML =
    "Desert cost: $" + desertTotal.toFixed(2);
  document.getElementById("totalCost").innerHTML =
    userName + ", your total cost is: $" + totalCost.toFixed(2);
}
