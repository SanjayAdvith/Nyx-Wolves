import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Post from '../components/Post'
import { listPhotos, deletePhoto, createPhoto } from '../actions/photoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PHOTO_CREATE_RESET } from '../constants/photoConstants'

const HomeScreen = ({ history, match }) => {

  const dispatch = useDispatch()


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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

  useEffect(() => {
    dispatch({ type: PHOTO_CREATE_RESET })

    if (!userInfo) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/users/posts/${createdPhoto._id}/edit`)
    }
    else {
      dispatch(listPhotos())
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdPhoto])

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
      <center>
        <h1>All Posts</h1>
      </center>
      <Button
        variant='primary'
        onClick={createPhotoHandler}
      >Add New Post</Button>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? <h3>Loading...</h3> : error ? <h4>{error}</h4> : (
        <Row>
          {photos.map((props) => (
            <Col key={props._id} sm={12} md={6} lg={4} xl={3}>
              <Post photo={props} />

              <Button
                variant='danger'

                onClick={() => deleteHandler(props._id)}
              >Delete</Button>

              <LinkContainer to={`/users/posts/${props._id}/edit`}>
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
