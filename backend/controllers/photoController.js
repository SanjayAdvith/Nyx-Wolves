import asyncHandler from 'express-async-handler'
import Photo from '../models/photoModel.js'



// @desc    Create a photo
// @route   POST photos

const createPhoto = asyncHandler(async (req, res) => {
  const {user, name, image, description } = req.body

  const photos = await Photo.create({
    user,
    name,
    image,
    description
  })

  if (photos) {
    res.status(201).json({
      _id: photos._id,
      name: photos.name,
      image: photos.image,
      description: photos.description,
    })
  } else {
    res.status(400)
    throw new Error('Invalid photos data')
  }
})



// @desc    Fetch all photos
// @route   GET /photos
// @access  Public
const getPhotos = asyncHandler(async (req, res) => {

  const photos = await Photo.find({})
  res.json(photos)

})

// @desc    Fetch single photo
// @route   GET /photos/:id
// @access  Public
const getPhotoById = asyncHandler(async (req, res) => {
  const photo = await Photo.findById(req.params.id)

  if (photo) {
    res.json(photo)
  } else {
    res.status(404)
    throw new Error('photo not found')
  }
})

// @desc    Delete a photo
// @route   DELETE /photos/:id

const deletePhoto = asyncHandler(async (req, res) => {
  const photo = await Photo.findById(req.params.id)

  if (photo) {
    await photo.remove()
    res.json({ message: 'photo removed' })
  } else {
    res.status(404)
    throw new Error('photo not found')
  }
})


export {
  createPhoto,
  getPhotos,
  getPhotoById,
  deletePhoto,


}
