'use strict';

var mongoose = require('mongoose'),
    Menu = mongoose.model('Menu');

exports.getMenu = function (req, res, next){
    var userId = req.params.id;

    Menu.find({"user_id":userId}, function (err, menu){
        if (err) return next(err);
        if (!menu) return res.send(404);

        return res.json(menu);
    });

//    return Menu.find(function (err, structure) {
//        if (!err) {
//            return res.json(structure);
//        } else {
//            return res.send(err);
//        }
//    });
};

/**
 *  Get profile of specified user
 */
//exports.show = function (req, res, next) {
//    var userId = req.params.id;
//
//    User.findById(userId, function (err, user) {
//        if (err) return next(err);
//        if (!user) return res.send(404);
//
//        res.send({ profile: user.profile });
//    });
//};