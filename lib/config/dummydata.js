'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Structure = mongoose.model('Structure'),
  Menu = mongoose.model('Menu');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
//User.find({}).remove(function() {
//  User.create({
//    provider: 'local',
//    name: 'Test User',
//    email: 'test@test.com',
//    password: 'test'
//  }, function() {
//      console.log('finished populating users');
//    }
//  );
//});


//Structure.find({}).remove(function() {
//    Structure.create({
//            "_id": 1,
//            "title": "Nibbles",
//            "items": [],
//            "__v": 0
//        },{
//            "_id": 2,
//            "title": "Mains",
//            "items": [],
//            "__v": 0
//        },{
//            "_id": 3,
//            "title": "Dishes to share",
//            "__v": 0,
//            "items": [
//                {
//                    "_id": 31,
//                    "title": "Meat",
//                    "items": [],
//                    "__v": 0
//                },
//                {
//                    "_id": 32,
//                    "title": "Fish",
//                    "items": [],
//                    "__v": 0
//                },
//                {
//                    "_id": 33,
//                    "title": "Vegetables",
//                    "items": [],
//                    "__v": 0
//                }
//            ]
//        },{
//            "_id": 4,
//            "title": "Sides",
//            "__v": 0,
//            "items": []
//        }, function() {
//            console.log('finished populating structures');
//        }
//    );
//});


//Menu.find({}).remove(function() {
//    Menu.create({
//            "user_id" : "53ab28d14bef14821c8fb5fc",
//            "name" : "Lunch menu",
//            "description" : "Served from noon till 3 p.m.",
//            "structure" : [{
//                "_id": 1,
//                "title": "Nibbles",
//                "items": []
//            },{
//                "_id": 2,
//                "title": "Mains",
//                "items": []
//            },{
//                "_id": 3,
//                "title": "Dishes to share"
//                "items": [
//                    {
//                        "_id": 31,
//                        "title": "Meat",
//                        "items": []
//                    },
//                    {
//                        "_id": 32,
//                        "title": "Fish",
//                        "items": []
//                    },
//                    {
//                        "_id": 33,
//                        "title": "Vegetables",
//                        "items": []
//                    }
//                ]
//            },{
//                "_id": 4,
//                "title": "Sides"
//                "items": []
//            }]
//        },function() {
//        console.log('finished populating menus');
//    }),{ versionKey: false };
//});
