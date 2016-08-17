console.log("acmejava is on deck");

// $(document).ready(function(){
//   $('.dropdown-submenu a.test').on("click", function(e){
//     $(this).next('ul').toggle();
//     e.stopPropagation();
//     e.preventDefault();
//   });
// });

var Acme = (function () {
  var catsObject;
  var typesObject;
  var productsObject;
  return {
    //this function will use promises to grab the data from the json files and store it
    storeInventory: function () {
      Promise.all([
      $.getJSON("acmecategories.json"),
      $.getJSON("acmetypes.json"),
      $.getJSON("acmeproducts.json"),
      ]).then(function(data){

        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
        catsObject = data[0];
        typesObject = data[1];
        console.log(typesObject);
        console.log(typesObject.types);
        console.log(typesObject.types[2].name);
        console.log(typesObject.types[2].category);
        productsObject = data[2];
        console.log(productsObject);
        console.log(productsObject.products);
        console.log(productsObject.products[17]);
        console.log(productsObject.products[17].large_boulder.name);
        console.log(productsObject.products[17].large_boulder.type);
        //we can pull out the products down to a particular value in the particular product object. can we pull out all objects based on the value of the type of the products and then the value of the category of the type.
        console.log()
      });
      console.log(typesObject);
      Acme.activateEvents(typesObject, catsObject, productsObject)
    },
    activateEvents: function (typesObject, catsObject, productsObject) {
      $("#halt").click(function(e){
        console.log(e, "you clicked to HALT Road Runner");
        console.log(typesObject);

      // $("#productsGoHere")
      })

      $("#drop").click(function(e) {
      console.log(e, "you clicked to DROP something on RR");
      });
    }
  }
}(Acme || {}));
Acme.storeInventory();

//the then statement wants a function.
//or you can do them one at a time ...

// var myPromise = new Promise(function(){
//   newData = $.getJSON("acmecategories.json")
//   resolve(newData.categories)
// })

// var cats, types, prods;
// myPromise.then(function(categoryArray){
//   console.log(categoryArray)
//   cats = categoryArray;

// })



