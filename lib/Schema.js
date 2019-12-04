const { Validator } = require('./Validator.js');

class Schema {
    constructor(schema) {
        this.schema = schema;
        this.properties = Object.entries(schema).map(([field, options]) => new Validator(field, options));
    }

    validate(object) {
        const validated = {};
        const errors = [];
        this.properties.forEach(validator => {
            try {
                validated[validator.field] = validator.validate(object);
            } catch (e) {
                errors.push(e);
            }
        });

        if (errors.length > 0) {
            throw new Error(`invalid schema >> ${errors}`);
        }

        return validated;
    }
}

module.exports = {
    Schema
};
