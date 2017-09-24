var build = require('../src/index.ts')
var expect = require('chai').expect;

describe('hello', () => {
    it('should export a function', () => {
        expect(build).to.be.a('function')
    })
})
