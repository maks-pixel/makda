import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

function Header(props) {
    return (
        <header>
            <Navbar className="navbar" sticky="top" style={{color: '#d8eefe', display: 'flex', justifyContent: 'space-between' }}>
                    <Navbar.Brand style = {{color: '#d8eefe'}}>Maks Girmay</Navbar.Brand>
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
            </Navbar>
        </header>
    );
}
export default Header;