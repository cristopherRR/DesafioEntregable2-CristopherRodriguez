//se importa la clase ProductManager desde el archivo ProductManager.js.

const ProductManager = require('./ProductManager');

const producto = new ProductManager('./products.json');
producto.addProduct('Puente cardan', '40mm isuzu npr', 40, 'img', 'code-2302', 5);
producto.addProduct('Estopera', 'de cigueñal interna isuzu npr', 10, 'img', 'code-2304', 10);
producto.addProduct('Anillo', '45mm isuzu npr', 20, 'img', 'code-2302', 12);
producto.addProduct('Turbo', 'izusu npr 4HG1', 150, 'img', 'code-2303', 5);

console.log(producto.getProducts());

producto.getProductById(1);

producto.updateProduct(2, { stock: 20 });

producto.deleteProduct(3);


console.log(producto.getProducts());