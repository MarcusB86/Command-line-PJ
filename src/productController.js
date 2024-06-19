const { nanoid } = require("nanoid");
const inform = console.log;

function create(products, productName) {
    const newProduct = {
        id: nanoid(4),
        name: productName,
        priceInCents: 0, 
        brand: "" 
    };
    
    products.push(newProduct);
    
    inform(`Product '${productName}' created with ID ${newProduct.id}`);
    
    return products;
}

function index(products) {
    return products.map(product => `${product.id} ${product.name}`).join("\n");
}

function show(products, productID) {
    const product = products.find((product) => product.id === productID);
    return product.id + " " + product.name + " " + product.priceInCents + " PriceInCents"
}

function destroy(products, productID) {
  const index = products.findIndex((product) => product.id === productID);
  if (index > -1) {
    products.splice(index, 1);
    inform("Product successfully removed from collection");
    return products;
  } else {
    inform("Product not found. No action taken");
    return products;
  }
}

function edit(products, productID, updatedName) {
    const index = products.findIndex(product => product.id === productID);
    if (index > -1) {
        products[index].id = productID;
        products[index].name = updatedName
        inform("Product successfully updated.");
    } else {
        inform("Product not found. No action taken.");
    }
    
    return products;
}

module.exports = { create, index, destroy, show, edit };
