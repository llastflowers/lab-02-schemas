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

        it('returns the value of the field', () => {
            const cat = {
                name: '',
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });
    });
});
