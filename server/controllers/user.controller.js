import userModel from "../models/user.model"
import errorHandler from "../helpers/dbErrorHandler"

export default {
    create: (req, res) => {
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
    },
    list: (req, res) => {
        let usersList
        userModel.find().select('firstName lastName email createdAt updatedAt').then( (users) => {
            usersList = users
            res.json(usersList)
        }).catch( (err) => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        })
    },
    read: () => {},
    update: () => {},
    delete: () => {},
    userByID: () => {}
}