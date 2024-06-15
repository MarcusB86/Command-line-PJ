const{readJSONFile, writeJSONfile} = require('./src/helpers')
const { create } = require("./src/productController");

const inform = console.log;


function run() {
    let products = readJSONFile("./data", "products.json");
}

