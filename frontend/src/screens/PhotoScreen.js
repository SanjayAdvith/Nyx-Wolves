import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import posts from '../posts'
const PhotoScreen = ({ match }) => {
    //const product = { name: 'sanay', price: '200', image: 'photos', brand: 'tata' }
    const product = posts.find((p) => p._id === match.params.id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/' >
                Go Back
                </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>
        </>
    )
}

export default PhotoScreen
