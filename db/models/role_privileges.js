const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    permission: String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

class RolePrivileges extends mongoose.Model { }
schema.loadClass(RolePrivileges);

module.exports = mongoose.model('role_privileges', schema);