var mongoose = require('mongoose');
var User = require("../models/user.js");
// var expect = require('chai').expect;
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

    // it('update a user', function (done) {
    //     var update_account = new User({
    //         email: 'test2@hotmail.com',
    //         password: 'testy',
    //         firstName: 'Mr.Test',
    //         lastName: 'Eiei',
    //         address: 'Somewhere',
    //         city: 'On Earth',
    //         state: 'In the world',
    //         zip: '12345s'
    //     });
    //     User.findOneAndUpdate({ 'email': 'test@hotmail.com' }, update_account, function (err, done) {
    //         if (err) {
    //             console.log("FUCk");
    //         } else {
    //             console.log("pass");
    //         }
    //     })
    //     done()
    // });

    it('delete a user', function (done) {
        User.remove({}, function (err) {
            should.not.exist(err);
            done();
        });
    });

});
