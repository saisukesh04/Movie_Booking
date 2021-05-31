const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        unique: true,
        required: true, 
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true, 
        minLength: 6,
    },
    bookings: [{
        movieName: {
            type: String, 
            trim: true, 
            required: true
        },
        date: {
            type: String,
            required: true,
        },
        seatNo: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        }
    }]
});

userSchema.statics.findByCredentials = async (email, pass) => {
    let user = await User.findOne({email: email});
    // console.log(email, pass);
    if (!user) {
      throw new Error('Unable to login');
    }
  
    if(!(user.password == pass)) {
        throw new Error('Incorrect Credentials');
    }
    return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;