console.log("Hello World!");

var apiKey = "SEM34B66175F8C1B90010DC6D97B2C4A675B";
var apiSecret = "MTIyMGExNjQzZDAxYjFiNTQwNjlmZmNiMTIyYzY1MTA";

var sem3 = require('semantics3-node')(apiKey, apiSecret);

sem3.products.products_field("search", "iphone");

sem3.products.get_products(function(err, products) {
	
	if(err){
		console.log("Error in get_products request.\n" + err);
		return;
	}

	console.log("Results of request:\n" + JSON.parse(products));
});