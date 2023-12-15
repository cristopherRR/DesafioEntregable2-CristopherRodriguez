class ProductManager {
    constructor() {
        this.products = [];
        this.newId = 1;
    }

    addProduct(title, description, price, tumbnail, code, stock) {

        const productoExistencia = this.products.find((producto) => producto.code === code)
        if (productoExistencia) {
            console.log(`El producto ${title} ya existe, el codigo ${code} es el mismo al del ${productoExistencia.title}.`);
            return;
        }
        
        if (!title || !description || !price || !tumbnail || !code || !stock) {
            console.log('los campos son obligatorios en el producto')
        }else {
            const producto = {
                id: this.newId++,
                title,
                description,
                price,
                tumbnail,
                code,
                stock
            };
            this.products.push(producto); 
            
            console.log(`El producto ${producto.title} se agrego`);
        }
    }

    getProduct() {
        return this.products;
    }
    getProductById(id) {
        const productoId = this.products.find((producto) => producto.id === id); 
            if (!productoId) {
                console.log('Not Found');
            }else {
                console.log('Se encontro el producto buscado')
                return productoId;
            }
    }
}

const producto = new ProductManager()
producto.addProduct('Puente cardan', '40mm isuzu npr', 40, 'img', 'code-2302', 5);
producto.addProduct('Estopera', 'de cigueñal interna isuzu npr', 10, 'img', 'code-2304', 10);
producto.addProduct('anillo', '45mm isuzu npr', 20, 'img', 'code-2302', 12);

console.log(producto.getProduct());

producto.getProductById(1);
