//WRITE YOUR CODE BELOW

var customerOrder = {
    drink: "latte",
    sugars: 3,
    ready: true
};

console.log("The order is a " + customerOrder.drink + " with " + customerOrder.sugars + " sugars.");

if (customerOrder.ready){
    console.log("Ready for pick-up!");
} else {
    console.log("Still in order queue.");
}