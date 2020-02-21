var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log(name + " is born");
        Animal.count++;
    }
    Animal.printCount = function () {
        console.log("Total number of animals: " + Animal.count);
    };
    // name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    Animal.count = 0;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, "Dog named " + name) || this;
    }
    return Dog;
}(Animal));
var a = new Dog("Tommy");
var b = new Dog("Johny");
Animal.printCount();
