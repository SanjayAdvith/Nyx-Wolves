import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import Post from '../components/Post'
import { listPhotos, deletePhoto, createPhoto, updatePhoto } from '../actions/photoActions'
import { PHOTO_CREATE_RESET } from '../constants/photoConstants'

const HomeScreen = ({ history, match }) => {

  const dispatch = useDispatch()

  const photoList = useSelector((state) => state.photoList)
  const { loading, error, photos } = photoList


  const photoDelete = useSelector((state) => state.photoDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete
  } = photoDelete

  const photoCreate = useSelector((state) => state.photoCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    photo: createdPhoto
  } = photoCreate



  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    dispatch({ type: PHOTO_CREATE_RESET })


    if (!userInfo) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/update/posts/${createdPhoto._id}`)
    }
    else {

      dispatch(listPhotos())
    }
  }, [dispatch, history, successDelete, successCreate, createdPhoto])

  //console.log(photoList)


  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePhoto(id))
    }
  }

  const createPhotoHandler = () => {
    dispatch(createPhoto())
  }

  return (
    <>
      <h1>All photo</h1>
      <Button
        variant='primary'
        onClick={createPhotoHandler}
      >Add New Photo</Button>
      {loadingDelete ? <h2>Loading...</h2> : <h3>{errorDelete}</h3>}
      {loadingCreate ? <h2>Loading...</h2> : <h3>{errorCreate}</h3>}

      {loading ? <h3>Loading...</h3> : error ? <h4>{error}</h4> : (
        <Row>
          {photos.map((props) => (
            <Col key={props._id} sm={12} md={6} lg={4} xl={3}>
              <Post photo={props} />

              <Button
                variant='danger'
                onClick={() => deleteHandler(props._id)}
              >Delete</Button>


              <LinkContainer to={`/update/posts/${props._id}`}>
                <Button variant='primary' className='ml-3'>
                  Update
                </Button>
              </LinkContainer>
            </Col>
          ))}
        </Row>
      )}

    </>
  )
}

export default HomeScreen
