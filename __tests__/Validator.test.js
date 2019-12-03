const { Validator } = require('../lib/Validator.js');

describe('Validator', () => {
    let validator;

    describe('required fields', () => {
        beforeAll(() => {
            validator = new Validator('name', {
                type: String,
                required: true
            });
        });

        it('returns the field of the object', () => {
            const cat = {
                name: 'willow',
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });
    });
});
