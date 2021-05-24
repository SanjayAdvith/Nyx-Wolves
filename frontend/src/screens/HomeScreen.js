import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Post from '../components/Post'
import { listPhotos, deletePhoto ,createPhoto} from '../actions/photoActions'


const HomeScreen = ({ match }) => {

  const dispatch = useDispatch()

  const photoList = useSelector((state) => state.photoList)
  const { loading, error, photos } = photoList

  useEffect(() => {
    dispatch(listPhotos())
  }, [dispatch])

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
      {loading ? <h3>Loading...</h3> : error ? <h4>{error}</h4> : (
        <Row>
          {photos.map((props) => (
            <Col key={props._id} sm={12} md={6} lg={4} xl={3}>
              <Post photo={props} />

              <Button
                variant='danger'

                onClick={() => deleteHandler(props._id)}
              >Delete</Button>
            </Col>
          ))}
        </Row>
      )}

    </>
  )
}

export default HomeScreen
