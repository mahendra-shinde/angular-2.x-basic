var Product = /** @class */ (function () {
    //Set OPTIONAL ARGUMENTS with ?: operator
    function Product(productId, name, price) {
        // Assign value of 'name' if it EXISTS or else use 'unknwon'
        this.name = name || 'unknown';
        // Assign value of 'productId' if it EXISTS or else use 0
        this.productId = productId || 0;
        this.price = price || 0;
    }
    return Product;
}());
var p1 = new Product(101, 'Useless product X', 2500);
var p2 = new Product(102);
console.log(p1.name + " " + p1.price);
console.log(p2.name + " " + p2.price);
