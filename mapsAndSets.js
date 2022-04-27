class Node{
    constructor(){
        this.value = value;
        this.next = null;
    }
}

function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}
let car = new Car(1,2,3);
Car.prototype.getName=function(){
    return(this.name);
};

console.log(car.getName());
console.log(car.name);
