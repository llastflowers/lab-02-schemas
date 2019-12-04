const { Schema } = require('../lib/Schema.js');

describe('Schema', () => {
    it('validates a valid schema', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number
            },
            color: {
                type: String
            }
        });

        const cat = {
            name: 'willow',
            age: 3,
            color: 'black and white'
        };

        expect(schema.validate(cat)).toEqual({
            name: 'willow',
            age: 3,
            color: 'black and white'
        });
    });

    it('throws an error if a schema is invalid', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number
            },
            weight: {
                type: String
            }
        });

        const cat = {
            age: 'yes',
            color: 'black and white'
        };

        expect(() => schema.validate(cat)).toThrowErrorMatchingSnapshot();
    });
});