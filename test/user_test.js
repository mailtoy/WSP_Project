var mongoose = require('mongoose');
var User = require("../models/user.js");
var should = require('chai').should();


describe('User testing', function () {

    before(function (done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function (done) {
        mongoose.connection.close()
        done();
    });

    it('save a user', function (done) {
        var account = new User({
            email: 'test@hotmail.com',
            password: 'testy',
            firstName: 'Mr.Test',
            lastName: 'Eiei',
            address: 'Somewhere',
            city: 'On Earth',
            state: 'In the world',
            zip: '12345s'
        });

        account.save(function (error) {
            should.not.exist(error);
            done();
        });
    });

    it('encypted/decypted a user\'s password', function (done) {
        var user = new User();
        user.password = user.encryptPassword("1234")
        var isValidPassword = user.validPassword("1234")
        isValidPassword.should.be.true
        done()
    });

    it('find a user by email', function (done) {
        User.findOne({ email: 'test@hotmail.com' }, function (err, account) {
            should.not.exist(err);
            account.email.should.equal('test@hotmail.com');
            account.password.should.equal('testy')
            done();
        });
    });

    it('find a user by firstname', function (done) {
        User.findOne({ firstName: 'Mr.Test' }, function (err, account) {
            should.not.exist(err);
            account.email.should.equal('test@hotmail.com');
            account.password.should.equal('testy')
            done();
        });
    });

    it('update a user', function (done) {
        User.update({ email: 'test@hotmail.com' }, { $set: { email: 'modified@hotmail.com' } }, function (err, product) {
            should.not.exist(err);
        })
        done();
    });

    it('find a user after update', function(done){
        User.findOne({ email: 'modified@hotmail.com' }, function (err, account) {
            should.not.exist(err);
            account.email.should.equal('modified@hotmail.com');
            account.password.should.equal('testy')
            done();
        });
    });

    it('delete a user', function (done) {
        User.remove({}, function (err) {
            should.not.exist(err);
            done();
        });
    });

});
