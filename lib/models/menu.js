'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var StrucSchema = new Schema({
    _id: Number,
    title: String,
    items: Array
},{ versionKey: false });

/**
 * Menu Schema
 */
var MenuSchema = new Schema({
    user_id: ObjectId,
    name : String,
    description: String,
    structure: [StrucSchema]
},{ versionKey: false });

MenuSchema.virtual('id')
    .get(function() {
        return this._id.toHexString();
    });

mongoose.model('Menu', MenuSchema);