const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => { console.log('tutorial event has occured.')
});

eventEmitter.emit('tutorial');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){ return this._name };
}

let pedro = new Person('Pedro');
pedro.on('name', (newName = 'somebodyyyy') => {
    console.log('My name is ' + pedro.name + newName);
});

let Someone = new Person('Someone');
Someone.on('name', () => {console.log('It is time to party with '+ Someone.name)});

pedro.emit('name');
Someone.emit('name');