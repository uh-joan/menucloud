'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Menu Schema
 */
var StructureSchema = new Schema({
    _id: Number,
    title: String,
    items: Array,
    __v: Number
});

mongoose.model('Structure', StructureSchema);

//module.exports = {
//    Structure: Structure
//};