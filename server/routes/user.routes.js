import express from 'express'
import userController from "../controllers/user.controller"

const router = express.Router()

router.route('/api/users')
    .get(userController.list)
    .post(userController.create)

router.route('/api/users/:userId')
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)

router.param('userId', userController.userByID)

export default router