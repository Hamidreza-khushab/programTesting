const chai = require('chai');
const expect = chai.expect;
const { describe, it } = require('mocha');
const Call = require('../index.js');

describe('Call;', () =>
{
    describe('Add 2 number' , () =>
    {
        const addTowNumber = Call.add(4,2);
        const addNumberAndString = Call.add('4','2');
        it('Add number',()=>{
            expect(addTowNumber).to.equal(6);
        })
        it('Add string',()=>{
            expect(addNumberAndString).to.equal('error');
        })
    });
});