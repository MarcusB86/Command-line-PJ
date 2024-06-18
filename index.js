const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, destroy, edit, index, show } = require("./src/productController");

const inform = console.log;

function run() {
    const action = process.argv[2];
    const product = process.argv[3];
    let products = readJSONFile("data", "products.json");
    let writeToFile = false;
    let updatedProducts = [];
    switch (action) {
        case "index":
            const productsView = index(products);
            inform(productsView);
            break;
        case "create":
            updatedProducts = create(products, product);
            writeToFile = true;
            break
        case "show":
            const ProductView = show(products, product);
            inform(ProductView);
            break;
        case "update":
            updatedProducts = edit(products, product, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedProducts = destroy(products, product);
            writeToFile = true;
            break;     
    }
    if (writeToFile) {
        writeJSONFile("data", "products.json", updatedProducts);
      }

}

run();
