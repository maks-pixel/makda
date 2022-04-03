import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function Header(props) {

    return (
        <header>
            
            <Navbar className="navbar" sticky="top" style={{color: '#d8eefe', display: 'flex', justifyContent: 'space-between',  backgroundColor: '#094067' }} collapseOnSelect expand="lg">
                
                    <Navbar.Brand style = {{color: '#d8eefe', marginLeft:'10px'}} onClick={() => { props.handlePageChange('Home') }}>Maks Girmay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                    <div className='nav-buttons'>
                        <Nav.Item>
                            <Button variant="outline-light" style = {{color: '#d8eefe'}} onClick={() => { props.handlePageChange('About') }}>About me</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" style = {{color: '#d8eefe'}} onClick={() => { props.handlePageChange('Portfolio') }}>Portfolio</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" style = {{color: '#d8eefe'}} onClick={() => { props.handlePageChange('Contact') }}>Contact</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" style = {{color: '#d8eefe'}} href={require('../../assets/resume/Resume.pdf')}>
                                Resume
                            </Button>
                        </Nav.Item>
                    </div>
                    </Navbar.Collapse>
                    
            </Navbar>
        </header>
    );
}
export default Header;