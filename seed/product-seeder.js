var Product = require('../models/product')

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/16684191_1431759500227788_4523539130141331084_n.jpg?_nc_cat=0&oh=bc2c631c3aaf6ee4f796ea6089c3e731&oe=5BF96937',
        title: 'Picture 1',
        description: 'Description 1',
        price: 10
    }),
    new Product({
        imagePath: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/1601234_616447308425682_921942241_n.jpg?_nc_cat=0&oh=ef9f3f676297be64e2d415eecf20cda4&oe=5C350C8D',
        title: 'Picture 2',
        description: 'Description 2',
        price: 10
    }), new Product({
        imagePath: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/10934003_816450055092072_1906053053581759871_n.jpg?_nc_cat=0&oh=7e9d618511ec45bfebfd139114e5f952&oe=5BF83C63',
        title: 'Picture 3',
        description: 'Description 3',
        price: 10
    }), new Product({
        imagePath: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/16684191_1431759500227788_4523539130141331084_n.jpg?_nc_cat=0&oh=bc2c631c3aaf6ee4f796ea6089c3e731&oe=5BF96937',
        title: 'Picture 4',
        description: 'Description 4',
        price: 10
    }), new Product({
        imagePath: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/1488253_587652077971872_633961629_n.jpg?_nc_cat=0&oh=350eca776f2d486719731c9ebb62b0b2&oe=5BEF0AAC',
        title: 'Picture 5',
        description: 'Description 5',
        price: 10
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}