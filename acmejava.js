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
        Acme.activateEvents(typesObject, catsObject, productsObject)
        //we can pull out the products down to a particular value in the particular product object. can we pull out all objects based on the value of the type of the products and then the value of the category of the type.Why can't I pass these array outside this function?
      });
      // console.log("it gets here")
      // console.log(typesObject);
    },
    //this listens for which category they choose in the drop menu
    activateEvents: function (typesObject, catsObject, productsObject) {
      $("#halt").click(function(e){
        console.log(e, "you clicked to HALT Road Runner");
        console.log(catsObject);  //the Objects with their arrays get here
        console.log(typesObject);
        console.log(productsObject);
      //start with forEach(can't make the forEach work) to look at catagories then if statement to capture the ID value of those with the category value of 0? Then can we loop through the products and pull out any objects with the type values matching the category values of the objects of the Type array.
        // typesArray.forEach (function () {
        //   if (typesArray[i].category = 0) {
        //     console.log(typesArray[i]);
        //   }
        // })
        var typesArray = typesObject.types;
        var typesWId0 = [];
        // console.log(typesArray[0]); //it shows the object in the 0 position
        // console.log(typesArray[0].category); //it shows that object's cat value
        for ( var i = typesArray.length - 1; i >= 0; i--) {
            // console.log(typesArray[i].category); //it loops through cats
          if (typesArray[i].category === 0) {
            console.log(typesArray[i]);
            console.log(typesArray[i].id);
            typesWId0.push(typesArray[i].id); //these put the types numbers that fit into the 0 category into an array
          }
        }
        console.log("outside for loop ", typesWId0);
        var productsArray = productsObject.products;
        console.log(productsArray);
        for ( var i = productsArray.length - 1; i >= 0; i--) {
          console.log(productsArray[i]); //how do I get it to loop through the object inside the object to look at the type numbers?
        }
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



