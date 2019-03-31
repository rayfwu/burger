var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll(function (res) {
            cb(res);
        }) 
    },
    create: function(newBurger, cb) {
        orm.insertOne(newBurger, function (res) {
            cb(res);
        })
    },
    update: function(burgerToUpdate, newStatus, cb) {
        orm.updateOne(burgerToUpdate, newStatus, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;