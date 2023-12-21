
class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios en el producto ${title} que esta intentando ingresar`);
            return;
        }

        const productoExistencia = this.products.find((producto) => producto.code === code);
        if (productoExistencia) {
            console.log(`El producto ${title} ya existe, el codigo ${code} es el mismo al del ${productoExistencia.title}.`);
            return;
        }else {
            const producto = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            this.products.push(producto);
            console.log(`El producto ${producto.title} se agrego correctamente`);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const productoId = this.products.find(producto => producto.id === id);
        if (productoId) {
            console.log(`El producto con el id ${id} fue encontrado`);
            return productoId;
        } else {
            console.log(`El producto con el id ${id} no fue encontrado`);
            return null;
        }
    }

    updateProduct(id, producto) {
        const index = this.products.findIndex(prod => prod.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...producto };
            console.log(`El producto con el id ${id} fue actualizado`);
        } else {
            console.log(`El producto con el id ${id} no fue encontrado`);
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(prod => prod.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`El producto con el id ${id} fue eliminado`);
        } else {
            console.log(`El producto con el id ${id} no fue encontrado`);
        }
    }
}

module.exports = ProductManager;


