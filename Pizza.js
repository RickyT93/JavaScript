  //FUNCTION DECLARED  checkAge--------------------------------------------------------
      function checkAge(age) {
        if (age >= 18) {
          return true;
        } else {
          return false;
        }
      }
      console.log(checkAge(10));
      //Create an object called myPizza--------------------------------------------------------
      var myPizza = {};
      myPizza.name = "Bacon";
      myPizza.crust = "normal";
      myPizza.serves = 8;
      myPizza.toppings = ["sausage", "chicken", "olives"];

      var pizza0 = myPizza;
      var pizza1 = myPizza;
      var pizza2 = myPizza;
      //Create an Arr called pizzas--------------------------------------------------------
      var pizzas = [pizza0, pizza1, pizza2];

      //Create a function called loopThrough--------------------------------------------------------
      function loopThrough(pizzaPies) {
        for (let index = 0; index < pizzaPies.length; index++) {
          if (pizzaPies[index].crust === "thin crust")
            console.log(pizzaPies[index].name);
        }
        // return pizzaPies;
      }
