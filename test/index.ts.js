var build = require('../src/index.js')
var expect = require('chai').expect;

// require('babel-register')({
//   presets: ["es2015"]
// })

describe('hello', () => {
    it('should export a function', () => {
        expect(build).to.be.a('function')
    })
})