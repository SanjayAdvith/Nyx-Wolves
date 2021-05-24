import express from 'express'
const router = express.Router()
import {
  getPhotos,
  getPhotoById,
  deletePhoto,
  createPhoto,
  updatePhoto,

} from '../controllers/photoController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getPhotos).post(protect, createPhoto)
router.route('/:id').get(getPhotoById).delete(deletePhoto).put(protect, updatePhoto)

export default router
