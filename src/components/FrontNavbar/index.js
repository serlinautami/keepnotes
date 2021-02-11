import React from 'react';
import { Navbar } from 'react-bootstrap';

const FrontNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">KeepNotes</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Serlina Utami</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default React.memo(FrontNavbar)