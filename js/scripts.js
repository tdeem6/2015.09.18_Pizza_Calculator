function Pizza(amount, size, toppings) {
    this.amount = amount;
    this.size = size;
    if (this.size === "large") {
        this.basePrice = 10;
    } else if (this.size === "extra large") {
        this.basePrice = 12;
    } else if (this.size === "medium") {
        this.basePrice = 8;
    } else if (this.size === "small") {
        this.basePrice = 6;
    } else {
        this.basePrice = 15;
    }


    if (toppings != undefined) {
        var allToppings = toppings;
    } else {
        allToppings = [];
    }
    this.toppings = allToppings;
}

Pizza.prototype.priceCalc = function() {
    var pizzaBasePrice = this.basePrice;
    var numberOfToppings = this.toppings.length;
    var toppingsPrice = numberOfToppings * .75;
    var amount = this.amount;
    var totalCost = amount * (pizzaBasePrice + toppingsPrice);
    return totalCost;
}


$(document).ready(function() {
    $("form#order-pizza").submit(function() {
        var quantity = $("input#amount").val();
        var pizzaSize = $("option:selected").val();
        var toppings = [];
        $("input.toppings:checked").each(function() {
          var topping = $(this).val();
          $("#receipt-toppings").append("<li class='list-topping'>" + topping + "</li>");
          toppings.push(topping);
        });
        newPizza = new Pizza(quantity, pizzaSize, toppings);
        $("#receipt-size").text(pizzaSize);
        $("#receipt-quantity").text(quantity);
        $("#receipt-price").text("$" + newPizza.priceCalc());
        $(".main").hide();
        $(".receipt-display").fadeIn();

        event.preventDefault();
    });

    $("#new-order").click(function() {
        $(".list-topping").remove();
        $(".receipt-display").hide();
        $(".main").fadeIn();
    });
});
