const { nanoid } = require("nanoid");
const productsJSON = require('..data/products.json');


function create(products, productName) {
    const product = {
        name:productName,
        id: nanoid(4),
        
    }

}


