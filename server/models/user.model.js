import mongoose from "mongoose"
import crypto from "crypto"
import userHelpers from "../helpers/user.helpers"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\../, "Invalid email address format"],
        required: "Email is required"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    },
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    user_salt: {
        type: String
    }
})

// userSchema functions
userSchema
    .virtual('password')
    .set(function(password) {
        this._password = password
        this.user_salt = userHelpers.makeSalt()
        this.hashed_password = userHelpers.encryptPassword(password, this.user_salt)
    })
    .get(function() {
        return this._password
    })

// TODO: find out why the passed this is undefined
// userSchema.path('hashed_password').validate((v) => {
//     console.log(this)
//     if(this._password &&this._password.length < 6) {
//         this.invalidate('password', 'Password must be at least 6 characters.')
//     }
//     if (this.isNew && !this._password) {
//         this.invalidate('password', 'Password is required')
//     }
// }, null)

export default mongoose.model('users', userSchema)