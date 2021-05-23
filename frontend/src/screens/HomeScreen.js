import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import posts from '../posts'

const HomeScreen = ({ match }) => {
  return (
    <>

      <h1>All Posts</h1>
      <>
        <Row>
          {posts.map((props) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Post posts={props} />
            </Col>
          ))}

        </Row>
      </>

    </>
  )
}

export default HomeScreen
