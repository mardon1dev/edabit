import React from 'react'
import Challenge from './Challenge/Challenge'
import Practice from './Practice/Practice'
import Shuffle from './Shuffle/Shuffle'
import Tutorial from './Tutorial/Tutorial'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import "./Main.scss"
const Main = () => {
  return (
    <div>
        <Navbar expand="md">
            <Container>
              <Navbar.Brand>
                <NavLink to = '/challenge'>edabit</NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to='/tutorial'>Tutorial</NavLink>
                  <NavLink to='/challenge'>Challenge</NavLink>
                  <NavLink to='/practice'>Practice</NavLink>
                  <NavLink to='/shuffle'>Shuffle</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
    </Navbar>
    </div>
  )
}

export default Main;