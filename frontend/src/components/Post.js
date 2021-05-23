import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Post = ({ posts }) => {

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/posts/${posts._id}`}>
        <Card.Img src={posts.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/posts/${posts._id}`}>
          <Card.Title as='div'>
            <strong>{posts.name}</strong>
          </Card.Title>
        </Link>


        <Card.Text as='h3'>{posts.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Post
