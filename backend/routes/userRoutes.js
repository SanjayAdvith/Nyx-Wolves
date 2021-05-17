import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  getUsers
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(getUsers)
//router.post('/', registerUser)
//router.get('/', getUsers)
router.get('/profile', protect, getUserProfile)
router.post('/login', authUser)




export default router
