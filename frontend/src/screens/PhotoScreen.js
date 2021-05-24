import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
//import posts from '../posts'
import { listPhotoDetails } from '../actions/photoActions'
const PhotoScreen = ({ match }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listPhotoDetails(match.params.id))
    }, [dispatch, match])

    const photoDetails = useSelector((state) => state.photoDetails)
    const { loading, error, photo } = photoDetails

    //const photo = {}

    //const product = posts.find((p) => p._id === match.params.id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/' >
                Go Back
                </Link>
            {loading ? <h3>Loading...</h3> : error ? <h4>error</h4> : (
                <Row>
                    <Col md={5}>
                        <Image src={photo.image} alt={photo.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h3>{photo.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {photo.description}
                            </ListGroup.Item>
                        </ListGroup>

                    </Col>
                </Row>
            )}
        </>
    )
}

export default PhotoScreen
