class Animal{
    // name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    static count:number = 0;
    constructor(public name:string) {
        console.log(name+" is born");
        Animal.count++;
     }

     static printCount(): void{
         console.log("Total number of animals: "+Animal.count);
     }
}
class Dog extends Animal{
    constructor(name:string){
        super("Dog named "+name);
    }
}
let a:Animal= new Dog("Tommy");
let b:Animal= new Dog("Johny");
Animal.printCount();



