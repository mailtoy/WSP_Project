const assert = require('assert');
const expect = require('chai').expect
// const request = require('supertest');
var request = require('superagent');
const app = require('../app')

var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Response Testing', function() {
    it('GET invalid route', function(done) {
        chai.request(app)
            .get('/asdsadasd')
            .end(function (err, res) {
                assert.equal(res.status, 404);
            });
        done();
    });

    it('GET home', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    it('GET login', function(done) {
        chai.request(app)
            .get('/user/login')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    it('GET signin', function(done) {
        chai.request(app)
            .get('/user/register')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    it('GET ladies', function(done) {
        chai.request(app)
            .get('/product/ladies/page/1')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    it('GET men', function(done) {
        chai.request(app)
            .get('/product/men/page/1')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    it('GET kids', function(done) {
        chai.request(app)
            .get('/product/kids/page/1')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                res.should.be.json;
                res.body.should.be.a('array');
            });
        done();
    })

    // it('POST register', function(done) {
    //     var user = {
    //         'email': 'test@hotmail.com',
    //         'password': 'testy',
    //         'firstName': 'Mr.Test',
    //         'lastName': 'Eiei',
    //         'address': 'Somewhere',
    //         'city': 'On Earth',
    //         'state': 'In the world',
    //         'zip': '12345s'
    //     }
    //     chai.request(app)
    //       .post('/user/register')
    //       .send(user)
    //       .end(function(err, res){
    //         assert.equal(res.status, 200);
    //         // res.should.be.json;
    //         // res.body.should.be.a('object');
    //         // res.body.should.have.property('SUCCESS');
    //         // res.body.SUCCESS.should.be.a('object');
    //         // res.body.SUCCESS.should.have.property('email');
    //         // res.body.SUCCESS.should.have.property('password');
    //         // res.body.SUCCESS.should.have.property('_id');
    //         // res.body.SUCCESS.name.should.equal('Java');
    //         // res.body.SUCCESS.lastName.should.equal('Script');
    //         done();
    //       });
    //   });

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