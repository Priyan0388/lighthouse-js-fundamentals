var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log ("\nIngredients:")
var print = 0;
while ( print < ingredients.length){
  console.log (ingredients[print])
  print++
}

console.log ("\nIngredients:")
for (print = 0; print < ingredients.length; print++){
  console.log(ingredients[print])
}

console.log ("\nIngredients Backwards:")
for (var print = ingredients.length - 1; print >= 1; print--){
  console.log(ingredients[print]);
}