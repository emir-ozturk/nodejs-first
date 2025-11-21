const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    is_active: {
        type: Boolean,
        default: true,
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

class Categories extends mongoose.Model { }
schema.loadClass(Categories);

module.exports = mongoose.model('categories', schema);