import userModel from "../models/user.model"
import errorHandler from "../helpers/dbErrorHandler"
import { extend } from "lodash"

function create (req, res) {
    const user = new userModel(req.body)
    user.save().then( () => {
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    }).catch((err) => {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    })
}

function list (req, res) {
    let usersList
    userModel.find().select('firstName lastName email createdAt updatedAt').then( (users) => {
        usersList = users
        res.json(usersList)
    }).catch( (err) => {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    })
}

function read (req, res) {
    req.profile.hashed_password = undefined
    req.profile.user_salt = undefined
    req.profile.createdAt = undefined
    req.profile.__v = undefined
    return res.json(req.profile)
}

function update (req, res) {
    let user = req.profile
    user = extend(user, req.body)
    user.updatedAt = Date.now()
    user.save().then(() =>{
        user.hashed_password = undefined
        user.user_salt = undefined
        user.__v = undefined
        res.json(user)
    }).catch( (err) => {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    })
}

function remove (req, res) {
    let user = req.profile
    user.deleteOne({_id: user.id }).then((deletedUser) => {
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    }).catch((err) => {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    })
}

function userByID (req, res, next, id) {
    userModel.findById(id).then((user) => {
        req.profile = user
        next()
    }).catch((err) => {
        res.status(400).json({
            error: "Could not retrieve user"
        })
    })
}

export {
    create,
    list,
    read,
    update,
    remove,
    userByID
}