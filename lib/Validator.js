const { getCaster } = require('../lib/types.js');

class Validator {
    constructor(field, { type, required }) {
        this.field = field;
        this.type = type;
        this.required = required;
        this.caster = getCaster(type);
    }
    validate(object) {
        const val = object[this.field];
        return this.caster(val);
    }
}

module.exports = {
    Validator
};