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
        if(this.required && !val)
            throw new Error(`Required field ${this.field} not found`);
        if(!this.required && !val) return null;

        return this.caster(val);
    }
}

module.exports = {
    Validator
};
