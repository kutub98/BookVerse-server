import express from 'express'
import UserController from './User.controller'

const router = express.Router()

router.post('/createUser', UserController.createUsers)
router.get('/allUsers', UserController.getAllUsers)
router.get('/singleUser/:id', UserController.getSingleUsers)

export const userRoutes = router
