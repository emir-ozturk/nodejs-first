const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    is_active: Boolean,
    phone: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

class Users extends mongoose.Model { }
userSchema.loadClass(Users);

module.exports = mongoose.model('users', userSchema);