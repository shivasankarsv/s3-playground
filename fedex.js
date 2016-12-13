var api_key = "SEM34B66175F8C1B90010DC6D97B2C4A675B";
var api_secret = "MTIyMGExNjQzZDAxYjFiNTQwNjlmZmNiMTIyYzY1MTA";

var sem3 = require('semantics3-node')(api_key, api_secret);

console.log("Start - Fedex.");

//sem3.products.products_field('upc', '["818969000081","762111710208","090939128388"]');
sem3.products.products_field('upc', '090939128388');

sem3.products.get_products(function(err, result) {
    if(err){
        console.log("Unable to retrieve UPC data.");
        return;
    }
    
    var resultObject = JSON.parse(result);
    console.log("UPC data retrieved succesfully.");
    console.log("Number of products: " + resultObject.results.length);
})

console.log("End - Fedex.");