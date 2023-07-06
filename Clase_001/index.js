class ProductManager{
    constructor(){
        this.products=[]
    
    }
    static id = 0
    addProduct(title, description, price, thumbmail, code, stock){
        ProductManager.id++
        this.products.push({title, description, price, thumbmail, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products
    }

    getProductById(id){
        if(!this.products.find((product)=> product.id === id)){
            return 'Not Found'
        }else{
            return this.products.find((product)=> product.id === id)
        }
    }
}

const productos = new ProductManager();

console.log(productos.getProduct());

 productos.addProduct('Nike SB Force 58 Premium','Calzado de moda',45999,'https://i.ibb.co/bQKdmwL/597344-1200-1200.webp','DV5476-001',8)
 productos.addProduct('Nike Air Zoom Vomero 16','Calzado para running',84999,'https://i.ibb.co/Tc5mJnF/451724-1200-1200.webp','DA7245-401',22)
 productos.addProduct('Nike Air Force 1 07 LV8','Calzado deportivo',74999,'https://i.ibb.co/7WXPj1M/531712-1200-1200.webp','DV0794-001',10)
 
 console.log(productos.getProduct());

 console.log(productos.getProductById(4));
 console.log(productos.getProductById(2));