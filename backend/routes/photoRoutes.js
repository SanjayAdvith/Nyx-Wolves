import express from 'express'
const router = express.Router()
import {
  getPhotos,
  getPhotoById,
  deletePhoto,
  createPhoto,

} from '../controllers/photoController.js'

router.route('/').get(getPhotos).post(createPhoto)
router.route('/:id').get(getPhotoById).delete(deletePhoto)

export default router
