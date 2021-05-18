import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
       // console.log('Logout...')
       dispatch(logout())
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Home</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to='/user'>
                            <Nav.Link>New User</Nav.Link>
                        </LinkContainer>
                        {userInfo
                            ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            )
                            : <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        }

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>


        </>
    )
}

export default Header
