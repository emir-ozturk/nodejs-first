const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    role_name: String,
    is_active: {
        type: Boolean,
        default: true,
    },
    permissions: mongoose.Schema.Types.Mixed,
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

class Roles extends mongoose.Model { }
schema.loadClass(Roles);

module.exports = mongoose.model('roles', schema);