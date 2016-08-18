console.log("populate.js is here");
var Acme = (function (acme) {
  acme.popHaltRR = function (categoryArray, typesArray, productsArray) {
    // console.log("inside popHaltRR", categoryArray);
    // console.log("inside popHaltRR", typesArray);
    // console.log("inside popHaltRR", productsArray);
    var typesWId0 = [];
    var productsWId0 = [];
    var output = " ";
    var productsPopulate = $("#productsGoHere");
    // console.log(typesArray[0]); //it shows the object in the 0 position
    // console.log(typesArray[0].category); //it shows that object's cat value
    for ( var i = typesArray.length - 1; i >= 0; i--) {
        // console.log(typesArray[i].category); //it loops through cats
      if (typesArray[i].category === 0) {
        // console.log(typesArray[i]);
        // console.log(typesArray[i].id);

        typesWId0.push(typesArray[i].id); //these put the types numbers that fit into the 0 category into an array.
      }console.log("inside loop ", typesWId0);
    }
    console.log("outside for loop ");
    console.log(productsArray)
    // console.log("allproducts?", productsArray);
    productsArray.forEach(function(products) {
      console.log(products);
      for (var name in products) {
      console.log("obj name: ", name);
      console.log("obj as a whole: ", products[name]);
      var currentProduct = products[name];
      console.log(currentProduct)
        for (var key in currentProduct) {
          // console.log("current product key: ", key);
          // console.log("current product value: ", currentProduct[key]);
          if (key === "type") {
            console.log("the type of this product is: ", currentProduct[key]);
            // for (i = 0; i <=typesWId0.length; i++) {
            //   if(currentProduct[key] === typesWId0[i]);
            //   productsWId0.push(currentProduct)
            // }
              if (currentProduct[key] <= typesWId0[1]) {
                productsWId0.push(currentProduct);
              }
          }
        }
      }
      console.log(productsWId0);
      productsWId0.forEach(function(products) {
      productsPopulate.text(`<div class='col-md-4 productCards'><h3> + ${products.name} + </h3></div>`);
      })
    })

  },
  acme.popDropRR = function (categoryArray, typesArray, productsArray) {
    console.log("insideDropRR", typesObject);
  }
  return acme
}(Acme));