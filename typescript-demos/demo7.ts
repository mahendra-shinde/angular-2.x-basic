class Product{

    productId: number;
    name: string;
    price: number;

    //Set OPTIONAL ARGUMENTS with ?: operator
    constructor(productId ?:number, name ?:string, price ?: number){
        // Assign value of 'name' if it EXISTS or else use 'unknwon'
        this.name =name || 'unknown';
        // Assign value of 'productId' if it EXISTS or else use 0
        this.productId=productId || 0;
        this.price=price || 0;
    }
    // constructor(productId:number, name:string, price: number){
    //     this.name =name;
    //     this.productId=productId;
    //     this.price=price;
    // }
}

let p1 = new Product(101,'Useless product X',2500);
let p2 = new Product(102);

console.log(p1.name + " "+p1.price);
console.log(p2.name + " "+p2.price);