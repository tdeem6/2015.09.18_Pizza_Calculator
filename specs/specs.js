describe('Pizza', function() {
  it("creates a new pizza with added size and toppings", function() {
    var testPizza = new Pizza(1, "large", "pepperoni");
    expect(testPizza.pizzaAmount).to.equal(1);
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.pizzaToppings).to.equal("pepperoni");
  });

  it("will allow no toppings for the arguments", function() {
    var testPizza = new Pizza(1, "large");
    expect(testPizza.pizzaToppings).to.equal.();
  });

  it("will allow multiple toppings in form of arguments", function() {
    var testPizza = new Pizza(1, "large", "pepperoni", "sausage", "onions");
    expect(testPizza.pizzaToppings).to.equal("pepperoni", "sausage", "onions");
  });

  it ("sets a price for the pizza based on size selected", function() {
    var testPizza = new Pizza(1, "large");
    expect(testPizza.basePrice).to.equal(10);
    var testPizza = new Pizza(1, "medium");
    expect(testPizza.basePrice).to.equal(8);
    var testPizza = new Pizza(1, "small");
    expect(testPizza.basePrice).to.equal(6);
    var testPizza = new Pizza(1, "extra large");
    expect(testPizza.basePrice).to.equal(12);
  });
});

describe('priceCalc', function() {
  it("returns an integer for price", function() {
      var testPizza = new Pizza(1, "large", "pepperoni");
      expect(testPizza.costCalc()).to.be.a("number");
  });

  it("returns a price for a large pizza with no toppings", function() {
      var testPizza = new Pizza(1, "large");
      expect(testPizza.costCalc()).to.eql(10.00);
  });

  it("adds $.75 for every topping", function() {
      var testPizza = new Pizza(1, "large", "pepperoni", "sausage");
      expect(testPizza.costCalc()).to.eql(11.50);
      var testPizza = new Pizza(1, "large", "pepperoni");
      expect(testPizza.costCalc()).to.eql(10.75);
  });

  it("checks for the amount of pizzas", function() {
      var testPizza = new Pizza(2, "large", "pepperoni", "sausage");
      expect(testPizza.costCalc()).to.eql(23.00);
      var testPizza = new Pizza(3, "large", "pepperoni");
      expect(testPizza.costCalc()).to.eql(34.50);
  });
});
