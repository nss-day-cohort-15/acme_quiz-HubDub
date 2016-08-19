console.log("populate.js is here");
var Acme = (function (acme) {
  acme.popHaltRR = function (categoryArray, typesArray, productsArray) {
    // console.log("inside popHaltRR", categoryArray);
    // console.log("inside popHaltRR", typesArray);
    // console.log("inside popHaltRR", productsArray);
    // var typesWId0 = [];  didn't need this in the end
    var productsWId0 = [];
    var output = " ";
    var productsPopulate = $("#productsGoHere");
    // console.log(typesArray[0]); //it shows the object in the 0 position
    // console.log(typesArray[0].category); //it shows that object's cat value
    // for ( var i = typesArray.length - 1; i >= 0; i--) {
    //     // console.log(typesArray[i].category); //it loops through cats
    //   if (typesArray[i].category === 0) {
    //     // console.log(typesArray[i]);
    //     // console.log(typesArray[i].id);

    //     typesWId0.push(typesArray[i]); //these put the types  that fit into the 0 category into an array.
    //   // }console.log("inside loop ", typesWId0);
    //   }
    // // console.log("outside for loop ", typesWId0);
    // // console.log(productsArray)
    // // console.log("allproducts?", productsArray);
    // } this me attempting to do something more robust but didn't work out so I ditched it.
    productsArray.forEach(function(products) {
      // console.log(products);
      for (var name in products) {
      // console.log("obj name: ", name);
      // console.log("obj as a whole: ", products[name]);
      var currentProduct = products[name];
      // console.log(currentProduct)
        for (var key in currentProduct) {
          // console.log("current product key: ", key);
          // console.log("current product value: ", currentProduct[key]);
          if (key === "type") {
            // console.log("the type of this product is: ", currentProduct[key]);
              if (currentProduct[key] <= 2) {
                productsWId0.push(currentProduct);
              }
          }
        }
      }
    })
    // console.log("types array ", typesWId0);
    productsPopulate.html(` `);
    // console.log("before foreEach ", productsWId0);

    productsWId0.forEach(function(products) {
      productsPopulate.append(`<div class='col-md-4 productCards'><h3>Name: ${products.name} </h3><h5>Category: ${categoryArray[typesArray[products.type].category].name}</h3><h5>Type: ${typesArray[products.type].name}</h5><p>Description: ${products.description} </div>`);
    })
  },
  acme.popDropRR = function (categoryArray, typesArray, productsArray) {
    var productsWId0 = [];
    var output = " ";
    var productsPopulate = $("#productsGoHere");
    productsArray.forEach(function(products) {
      for (var name in products) {
      var currentProduct = products[name];
        for (var key in currentProduct) {
          if (key === "type") {
              if (currentProduct[key] > 2) {
                productsWId0.push(currentProduct);
              }
          }
        }
      }
    })
    productsPopulate.html(` `);
    productsWId0.forEach(function(products) {
      productsPopulate.append(`<div class='col-md-4 productCards'><h3>Name: ${products.name} </h3><h5>Category: ${categoryArray[typesArray[products.type].category].name}</h3><h5>Type: ${typesArray[products.type].name}</h5><p>Description: ${products.description} </div>`);
    })
  }
  return acme
}(Acme));