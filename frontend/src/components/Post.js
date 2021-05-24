import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Post = ({ photo }) => {

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/posts/${photo._id}`}>
        <Card.Img src={photo.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/posts/${photo._id}`}>
          <Card.Title as='div'>
            <strong>{photo.name}</strong>
          </Card.Title>
        </Link>


        <Card.Text as='h3'>{photo.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Post
