class car {
    constructor(type) {
        this._type = type;
    }

    get Name() {
        return this._type;
    }

    set Name(name) {
        this._type = name;
    }
}