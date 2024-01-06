export default class Currency {
    constructor(code, name) {
        this._code = code
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw TypeError('name must be a string');
        }
        this._name = name
    }

    get code() {
        return this._code;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw TypeError('code must be string');
        }
        this._code = code
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}