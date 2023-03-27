  var bakery = {
        items: {
          item: [
            {
              id: "0001",
              type: "donut",
              name: "Cake",
              ppu: 0.55,
              batters: {
                batter: [
                  { id: "1001", type: "Regular" },
                  { id: "1002", type: "Chocolate" },
                  { id: "1003", type: "Blueberry" },
                  { id: "1004", type: "Devil's Food" },
                ],
              },
              topping: [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5007", type: "Powdered Sugar" },
                { id: "5006", type: "Chocolate with Sprinkles" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" },
              ],
            },
            {
              id: "0002",
              type: "donut",
              name: "Raised",
              ppu: 0.55,
              batters: {
                batter: [{ id: "1001", type: "Regular" }],
              },
              topping: [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" },
              ],
            },

            {
              id: "0003",
              type: "donut",
              name: "Old Fashioned",
              ppu: 0.55,
              batters: {
                batter: [
                  { id: "1001", type: "Regular" },
                  { id: "1002", type: "Chocolate" },
                ],
              },
              topping: [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" },
              ],
            },
            {
              id: "0004",
              type: "bar",
              name: "Bar",
              ppu: 0.75,
              batters: {
                batter: [{ id: "1001", type: "Regular" }],
              },
              topping: [
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" },
              ],
              fillings: {
                filling: [
                  { id: "7001", name: "None", addcost: 0 },
                  { id: "7002", name: "Custard", addcost: 0.25 },
                  { id: "7003", name: "Whipped Cream", addcost: 0.25 },
                ],
              },
            },

            {
              id: "0005",
              type: "twist",
              name: "Twist",
              ppu: 0.65,
              batters: {
                batter: [{ id: "1001", type: "Regular" }],
              },
              topping: [
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
              ],
            },

            {
              id: "0006",
              type: "filled",
              name: "Filled",
              ppu: 0.75,
              batters: {
                batter: [{ id: "1001", type: "Regular" }],
              },
              topping: [
                { id: "5002", type: "Glazed" },
                { id: "5007", type: "Powdered Sugar" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" },
              ],
              fillings: {
                filling: [
                  { id: "7002", name: "Custard", addcost: 0 },
                  { id: "7003", name: "Whipped Cream", addcost: 0 },
                  { id: "7004", name: "Strawberry Jelly", addcost: 0 },
                  { id: "7005", name: "Rasberry Jelly", addcost: 0 },
                ],
              },
            },
          ],
        },
      };

      var mappedToFillingId = bakery.items.item.map(mappingFillingId);
      console.log(mappedToFillingId);

      function mappingFillingId(targetFilling) {
        let newFillingId = targetFilling.fillings.filling;
        if (newFillingId) {
          var arrayOfFillings = newFillingId;
          return arrayOfFillings;
        } else {
          return null;
        }

        function mappingFillings(newFillingId) {
          let fillingIDTemplate = newFillingId.id;
          return fillingIDTemplate;
        }

        var fillingIdResult = newFillingId.map(mappingFillings);
        console.log(fillingIdResult);
      }

      //  getCakes = array.map((treats) => {

      // }
      console.log(bakery);
      var getCakes = function (treats) {
        var newBakeryItems = treats.map(mapMyCake);
        return newBakeryItems;
      };

      function mapMyCake(cake) {
        let batterArray = cake.batters.batter;
        //var joinedBatterType = getBatterType(battersArray);

        function mapBatters(batterArray) {
          var batterTemplate = batterArray.type;

          return batterTemplate;
        }

        var batterResult = batterArray.map(mapBatters);

        var batterData = batterResult.join(",");

        // function mappingBatterType(singleBatter) {
        //   let typeOfBatter = singleBatter.type;
        //   // return typeOfBatter.join(",");
        //   return typeOfBatter.toString();
        // }

        if (cake.fillings) {
          var count = cake.fillings.filling.length;
        } else {
          var count = 0;
        }

        var ingredientsArray = cake.topping;

        const newCake = {
          id: Number(cake.id),
          type: cake.type,
          name: cake.name,
          ppu: cake.ppu,

          batters: batterData,
          ingredients: cake.topping,
          countOfFillings: count,
        };
        return newCake;
      }

      mappedCakes = getCakes(bakery.items.item);
      console.log(mappedCakes);
      
        var getTreatsWithFillings = function (treats) {
        //console.log("getTreatsWithFillings is working");

        var filterCakesWithFillings = treats.filter((cake) => {
          return cake.countOfFillings > 0;
        });
        return filterCakesWithFillings;
      };
      //return filterCakesWithFillings;

      var something = getTreatsWithFillings(mappedCakes);
