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
});