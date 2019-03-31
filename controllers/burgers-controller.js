const express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId })
    });
});

router.put("/", function(req, res) {
    burger.update(req.body.burgerToUpdate, true, function(result) {
        if (result.changedRows == 0) {
            return res.status(404), end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;