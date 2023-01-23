import jwt from "jsonwebtoken"
import { expressjwt } from "express-jwt"
import userModel from "../models/user.model"
import config from "../../config/config"
import userHelpers from "../helpers/user.helpers"

async function signin (req, res) {
    try {
        let user = await userModel.findOne({"email": req.body.email})
        let userID = user._id.toString()
        if (!user) return res.status(401).json({error: "User not found"})
        if (!userHelpers.authenticate(userID, req.body.password)) return res.status(401).json({error: "Login credentials do not match"})

        const token = jwt.sign({ _id: userID }, config.jwtSecret)

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
        console.log(err)
        return res.status(401).json({ error: "Could not sign in"})
    }
}

function signout (req, res) {
    res.clearCookie("t")
    return res.status(200).json({message: "Signed out"})
}

function hasAuthorization (req, res, next) {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!authorized) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    } else {
        next()
    }
}

const requireSignin = expressjwt({
    secret: config.jwtSecret,
    algorithms: ["HS256"],
    userProperty: 'auth'
})

export default {
    signin,
    signout,
    requireSignin,
    hasAuthorization
}