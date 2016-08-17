console.log("populate.js is here");
var Acme = (function (acme) {
  acme.popHaltRR = function (typesObject, catsObject, productsObject) {
    console.log("inside popHaltRR", catsObject);
    console.log(typesObject);
    console.log(productsObject);
    var typesArray = typesObject.types;
    var typesWId0 = [];
    var productsWId0 = [];
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
    var productsArray = productsObject.products;
    // console.log("allproducts?", productsArray);
    productsArray.forEach(function(products) {
      console.log(products);
      for (var name in products) {
      // console.log("obj name: ", name);
      // console.log("obj as a whole: ", products[name]);
      var currentProduct = products[name];
        for (var key in currentProduct) {
          // console.log("current product key: ", key);
          // console.log("current product value: ", currentProduct[key]);
          if (key === "type") {
            console.log("the type of this product is: ", currentProduct[key]);
              if (currentProduct[key] === typesWId0[0]) {
                productsWId0.push(currentProduct);
              }if (currentProduct[key] === typesWId0[1]) {
                productsWId0.push(currentProduct);
              }if (currentProduct[key] === typesWId0[2]) {
                productsWId0.push(currentProduct);
              }
          }
        }
      }console.log(productsWId0);
    })
    // for ( var i = productsArray.length - 1; i >= 0; i--) {
    //   console.log(productsArray[i]); //how do I get it to loop through the object inside the object to look at the type numbers?
    // }
    // $("#productsGoHere")
  },
  acme.popDropRR = function (typesObject, catsObject, productsObject) {
    console.log("insideDropRR", typesObject);
  }
  return acme
}(Acme));