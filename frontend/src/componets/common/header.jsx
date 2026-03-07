import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const header = () => {
  return (
      <header>
    <div className="container py-3">
      <Navbar expand="lg">
      
        <Navbar.Brand href="#home" className='logo'><span>UrbanEdege</span> construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
             <Nav.Link href="/about" className='nav-link'>about us</Nav.Link>
             <Nav.Link href="#" className='nav-link'>services</Nav.Link>
              <Nav.Link href="#" className='nav-link'>project</Nav.Link>
              <Nav.Link href="#" className='nav-link'>bolgs</Nav.Link>
              <Nav.Link href="#" className='nav-link'>contact us</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
    
      </Navbar>
      </div>
       
    </header>
  )
}

export default header
