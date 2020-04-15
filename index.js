// declare a class
class car{
    constructor(model,type,price){
        this.model = model;
        this.type = type;
        this.price = price;
    }
};
// create the car object
let car1 = new car('Toyota','Premio','100USD');
console.log(`${ car1.model } ${ car1.type } ${ car1.price}`);