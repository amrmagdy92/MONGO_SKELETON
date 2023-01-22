import express from "express"
import userController from "../controllers/user.controller"
import authController from "../controllers/auth.controller"

const router = express.Router()

router.route('/')
    .get(userController.list)
    .post(userController.create)

router.route('/:userId')
    .get(authController.requireSignin, userController.read)
    .put(authController.requireSignin, authController.hasAuthorization, userController.update)
    .delete(authController.requireSignin, authController.hasAuthorization, userController.delete)

router.param('userId', userController.userByID)

export default router