import userModel from "../models/user.model"
import crypto from "crypto"

function encryptPassword (password, salt) {
    if (password == '' || password == null || password == undefined) return ''
    try {
        return crypto
            .createHmac('sha1', salt)
            .update(password)
            .digest('hex')
    } catch (err) {
        return err
    }
}

async function authenticate (userID, password) {
    let user = await userModel.findById(userID)
    if (user) {
        return encryptPassword(password, user.user_salt) === user.hashed_password
    } else {
        return "User not found"
    }

}

function makeSalt () {
    return Math.round(new Date().valueOf() * Math.random()).toString()
}

export {
    authenticate,
    encryptPassword,
    makeSalt
}