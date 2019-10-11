const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

class Model extends EventEmitter{
    constructor(manufacture_year, price, origin) {
        super();
        this._manufacture_year = manufacture_year;
        this.price = price;
        this.origin = origin; 
    }

    get ManufactureYear() {return this._manufacture_year;}

    get Price() {return this.price;}

    get Origin() {return this.origin;}
}

class Car extends Model{
    constructor(type, manufacture_year, price, origin) {
        super(manufacture_year, price, origin);
        this._type = type;
    }

    get Name() {
        return this._type;
    }

    set Name(name) {
        this._type = name;
    }

    get Show() {
        return 'okay';
    }

    TurnOn() {
        return 'Engine is ready....';
    }
}

let myCar = new Car('Honda', 1990, 28928928, 'somewhere');
console.log(myCar.price);
console.log(myCar.Origin);
console.log(myCar.Show);

myCar.on('zoom', () => {console.log(myCar.TurnOn())});

myCar.emit('zoom');

