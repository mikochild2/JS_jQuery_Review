
pToppings = ["pepperoni", "bell peppers", "italian sausage", "black olives", "mushrooms", "onions", "bacon", "pesto", "cheese"]

function pDescr() {
    return console.log("A delicious pizza with " + pToppings.join(", ") + ".");
}
pDescr();