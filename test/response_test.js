const assert = require('assert');
const expect = require('chai').expect
// const request = require('supertest');
var request = require('superagent');
const app = require('../app')

describe('Response Testing', function () {
    it('should have a status code 200', function (done) {
        this.timeout(9000);
        request
            .get('http://localhost:3000/')
            .end(function (err, response) {
                assert.equal(response.status, 200);
                done();
            });
    });

    // it('should return product title', function (done) {
    //     this.timeout(9000);
    //     request
    //         .get('http://localhost:3000/product/5c04cdaa50d1863164126583')
    //         .end(function (err, response) {
    //             expect(response.text).to.contain('Smocked dress');
    //             done();
    //         });
    // });

    // it('should return product price', function (done) {
    //     this.timeout(9000);
    //     request
    //         .get('http://localhost:3000/product/5c04cdaa50d1863164126583')
    //         .end(function (err, response) {
    //             expect(response.text).to.contain('499');
    //             done();
    //         });
    // });

    // it('should return product description', function (done) {
    //     this.timeout(9000);
    //     request
    //         .get('http://localhost:3000/product/5c04cdaa50d1863164126583')
    //         .end(function (err, response) {
    //             expect(response.text).to.contain('Knee-length dress in an airy, patterned weave with a smocked stand-up collar and opening with covered buttons at the back of the neck. Long sleeves with smocking at the cuffs. Partly lined.');
    //             done();
    //         });
    // });
});