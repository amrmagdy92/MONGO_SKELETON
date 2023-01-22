import jwt from "jsonwebtoken"
import expressJWT from "express-jwt"
import userModel from "../models/user.model"
import config from "../../config/config"

export default {
    signin: async (req, res) => {
        try {
            let user = await userModel.findOne({"email": req.body.email})

            if (!user) return res.status(401).json({error: "User not found"})
            if (!user.authenticate(req.body.password)) return res.status(401).json({error: "Login credentials do not match"})

            const token = jwt.sign({ _id: this._id }, config.jwtSecret)

            res.cookie('t', token, { expire: new Date() + config.jwtExpiry})

            return res.json({
                token,
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
            })
        
        } catch (err) {
            return res.status('401').json({ error: "Could not sign in"})
        }
    },
    signout: (req, res) => {
        res.clearCookie("t")
        return res.status(200).json({message: "Signed out"})
    },
    requireSignin: expressJWT({
        secret: config.jwtSecret,
        userProperty: 'auth'
    }),
    hasAuthorization: () => {}
}