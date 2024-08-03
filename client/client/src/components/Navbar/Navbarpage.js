import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbarpage = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' >
       <Container fluid>
        <h6 className='text-color'>

      MotorsCars
        </h6>
        <Nav className='ms-auto'>
        <LinkContainer to='/'>
            <Nav.Link>
                Home
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Nav.Link>
                Register
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link>
                Login
            </Nav.Link>
            </LinkContainer>
            
        </Nav>

       </Container>
      </Navbar>
    </>
  )
}

export default Navbarpage
