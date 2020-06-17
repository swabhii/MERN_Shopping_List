const mongoose = require('mongoose');
const Scehma = mongoose.Schema;

//Create Schema
const ItemSchema = new Scehma({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
