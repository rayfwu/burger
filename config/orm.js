var connection = require('./connection.js');

var orm = {
    selectAll: function(cb) {
        var tableToGet = "burger";
        var queryString = "SELECT * FROM ??";
        connection.query(   queryString,
                            [tableToGet], 
                            function (err, result) {
                                if (err) throw err;
                                console.log(result);
                                cb(result);
        });

    },
    insertOne: function(newBurger, cb) {
        var tableToGet = "burger";
        var columns = ["burger_name", "devoured"];
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(   queryString, 
                            [tableToGet, columns[0], columns[1]], 
                            newBurger, 
                            false, 
                            function (err, result) {
                                if (err) throw err;
                                console.log(result);
                                cb(result);
        });
    },
    updateOne: function(burgerName, updatedStatus, cb) {
        var tableToGet = "burger";
        var columns = ["burger_name", "devoured"];
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ??";
        connection.query(   queryString, 
                            [tableToGet, columns[1], updatedStatus, columns[0], burgerName], 
                            function (err, result) {
                                if (err) throw err;
                                console.log(result);
                                cb(result);
        });
    }
}

module.export = orm;