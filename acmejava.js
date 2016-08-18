console.log("acmejava is on deck");

// $(document).ready(function(){
//   $('.dropdown-submenu a.test').on("click", function(e){
//     $(this).next('ul').toggle();
//     e.stopPropagation();
//     e.preventDefault();
//   });
// });

var Acme = (function () {
  // var catsObject = {};
  // var typesObject = {};
  // var productsObject = {};
  //it seems to work without declaring empty variables in the IIFE scope
  return {
    //this function will use promises to grab the data from the json files and store it
    storeInventory: function () {
      Promise.all([
      $.getJSON("acmecategories.json"),
      $.getJSON("acmetypes.json"),
      $.getJSON("acmeproducts.json"),
      ]).then(function(data){
        // console.log(data[0]);
        // console.log(data[1]);
        // console.log(data[2]);
        var catsObject = data[0];
        var typesObject = data[1];
        // console.log(typesObject);
        // console.log(typesObject.types);
        // console.log(typesObject.types[2].name);
        // console.log(typesObject.types[2].category);
        var productsObject = data[2];
        // console.log(productsObject);
        // console.log(productsObject.products);
        // console.log(productsObject.products[17]);
        // console.log(productsObject.products[17].large_boulder.name);
        // console.log(productsObject.products[17].large_boulder.type);
        var categoryArray = catsObject.categories;
        var typesArray = typesObject.types;
        var productsArray = productsObject.products;
        Acme.activateEvents(categoryArray, typesArray, productsArray)
        //we can pull out the products down to a particular value in the particular product object. can we pull out all objects based on the value of the type of the products and then the value of the category of the type.Why can't I pass these array outside this function?
      });
      // console.log("it gets here")
      // console.log("this object is empty", typesObject);
    },
    //this listens for which category they choose in the drop menu and sends the data to the correct catgory populate function
    activateEvents: function (categoryArray, typesArray, productsArray) {
      $("#halt").click(function(e){
        console.log(e, "you clicked to HALT Road Runner");
        console.log("inside activateEvents: ", typesArray);  //the Objects with their arrays get here
        console.log("inside activateEvents: ", categoryArray);
        console.log("inside activateEvents: ", productsArray);
        Acme.popHaltRR(categoryArray, typesArray, productsArray);
      });
      $("#drop").click(function(e) {
        console.log(e, "you clicked to DROP something on RR");
        Acme.popDropRR(categoryArray, typesArray, productsArray);
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



