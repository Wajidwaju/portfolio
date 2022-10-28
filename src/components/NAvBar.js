import { useState, useEffect } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'


const NAvBar = () => {

  const [links, setlinks] = useState("home");
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscroll(true);
      } else {
        setscroll(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)

  }, []);
  const onUpdatelinks = (value) => {
    setlinks(value);
  }

  return (
    <Navbar expand="lg" className={ scroll ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={links === 'home' ? 'links navbar-link' : 'navbar-link'} onClick={() => onUpdatelinks('home')}>Home</Nav.Link>
            <Nav.Link href="#SKils" className={links === 'Skils' ? 'links navbar-link' : 'navbar-link'} onClick={() => onUpdatelinks('Skils')}>Skils</Nav.Link>
            <Nav.Link href="#Projects" className={links === 'Projects' ? 'links navbar-link' : 'navbar-link'} onClick={() => onUpdatelinks('Project')}>Projects</Nav.Link>
            </Nav>
      <span className='navbar-text'>
        <div className='social-icon'>
          <a href='#'><img src={NavIcon1} alt="" /> </a>
          <a href='#'><img src={NavIcon2} alt="" /> </a>
          <a href='#'><img src={NavIcon3} alt="" /> </a>
        </div>
        <button className='vvn' onClick={() => console.log("connect ")} > <span>Let's Connect</span></button>
      </span>
    </Navbar.Collapse>
  

      </Container >
    </Navbar >
  );
}

export default NAvBar;