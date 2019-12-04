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
                name: 'willow',
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });

        it('throws an error if a required field is missing', () => {
            const cat = {
                age: 3,
                color: 'black and white'
            };
    
            expect(() => validator.validate(cat)).toThrowErrorMatchingSnapshot();
        });

        it('returns the value of the field cast to the correct type', () => {
            const cat = {
                name: ['willow'],
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });
    });

    describe('non-required fields', () => {
        beforeAll(() => {
            validator = new Validator('name', {
                type: String,
            });
        });

        it('returns the value of the field', () => {
            const cat = {
                name: 'willow',
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });

        it('returns the value of the field cast to the correct type', () => {
            const cat = {
                name: ['willow'],
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toEqual('willow');
        });

        it('returns null if a non-required field is not found', () => {
            const cat = {
                age: 3,
                color: 'black and white'
            };
    
            expect(validator.validate(cat)).toBeNull();
        });  
    });
});
