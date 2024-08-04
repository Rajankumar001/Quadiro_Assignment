import React,{useState,useEffect}from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbarpage = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
  }, []);
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' >
       <Container fluid>
        <h6 className='text-color'>

      MotorsCars
        </h6>
        <Nav className='ms-auto'>
        <LinkContainer to={userRole === 'admin' ? '/admin' : '/user'}>
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
