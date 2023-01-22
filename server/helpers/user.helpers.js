import userModel from "../models/user.model"

export default {
    authenticate: (userID, password) => {
        userModel.findById(userID).then((user) => {
            return encryptPassword(password, user.user_salt) === user.hashed_password
        }).catch((err) => {
            console.log(err)
            return "User not found"
        })
    },
    encryptPassword: (password, salt) => {
        if (password == '' || password == null || password == undefined) return ''
        try {
            return crypto
                .createHmac('sha1', salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return err
        }
    },
    makeSalt: () => {
        return Math.round(new Date().valueOf() * Math.random()).toString()
    }
}