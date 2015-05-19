var Item = require('../models/item');

exports.save = function(name, callback, errback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.list = function(callback, errback) {
    Item.find(function(err, items) {
        if (err) {
            errback(err);
            return;
        }
        callback(items);
    });
};

exports.update = function( id, new_name, callback, errback) {
    
        Item.findByIdAndUpdate(id,{ $set: { name: new_name }}, function(err, item) {
            if (err) {
                errback(err);
                return;
            }
            callback(item);
        });
        
};

exports.del = function( id, callback, errback) {
    
    var query = {
        '_id': id
    };

        Item.findOneAndRemove(query, function(err, item) {
            if (err) {
                errback(err);
                return;
            }
            callback(item);
        });
        
};
