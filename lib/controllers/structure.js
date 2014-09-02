'use strict';

var mongoose = require('mongoose'),
    Structure = mongoose.model('Structure');

exports.getStructure = function (req,res){
    return Structure.find(function (err, structure) {
        if (!err) {
            return res.json(structure);
        } else {
            return res.send(err);
        }
    });
};



exports.saveStructure = function (req, res){
    var structureList = req.body;
    //console.log("hey Jo: "+ req.body);

    Structure.find({}).remove(function() {
        structureList.forEach(function(item){
            var newStructure = new Structure(item);
            //console.log("New Menu: "+newMenu);
            var newTitle=String(newStructure.title);
            var newId=Number(newStructure._id);
            var newItems=newStructure.items;
            var newV=Number(newStructure.__v);
            Structure.create({
                "_id": newId,
                "title": newTitle,
                "items": newItems,
                "__v": newV
            });
            res.send(200);
        });
    });
};
    /*structureList.forEach(function(item){
        var newMenu = new Menu(item);
        //console.log("New Menu "+ newMenu);
        //console.log("New Menu title "+ newMenu.title);
        var newTitle=String(newMenu.title);
        //var newItems=Array(newMenu.items);

        Menu.findById(newMenu._id, function (err, menu) {
            if (!menu) {
                newMenu.create(function(err) {
                    if (err) {
                        console.log("couldnt create");
                        return res.send(400);
                    }

                    res.send(200);
                });

            } else {
                console.log ("Menu to save " + menu);
                menu.title=newTitle;
                //menu.items = newItems;
                menu.save(function(err) {
                    if (err){
                        console.log("couldnt save");
                        return res.send(400);
                    }

                    res.send(200);
                });
            }
        });

    });*/


exports.show = function (req, res){
    console.log(req.body);
};