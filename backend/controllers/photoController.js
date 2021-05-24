import asyncHandler from 'express-async-handler'
import Photo from '../models/photoModel.js'



// @desc    Create a photo
// @route   POST photos

const createPhoto = asyncHandler(async (req, res) => {
  const photo = new Photo({
    name: 'Sample name',
    user: req.user._id,
    image: '/images/sample.jpg',
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await photo.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a photo
// @route   PUT /posts/:id
// @access  Private
const updatePhoto = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    image,
  } = req.body

  const photo = await Photo.findById(req.params.id)

  if (photo) {
    photo.name = name

    photo.description = description
    photo.image = image

    const updatedPhoto = await photo.save()
    res.json(updatedPhoto)
  } else {
    res.status(404)
    throw new Error('Photo not found')
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
  updatePhoto,
  getPhotos,
  getPhotoById,
  deletePhoto,


}
