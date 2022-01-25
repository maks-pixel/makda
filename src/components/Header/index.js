import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(props) {
    return (
        <header>
            <Navbar bg="dark" variant="dark" sticky="top">
            <Nav >
            <Navbar.Brand >Maks Girmay</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link onClick={() => { props.handlePageChange('About') }}>About me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { props.handlePageChange('Portfolio') }}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { props.handlePageChange('Contact') }}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={require('../../assets/resume/Resume.pdf')}>
                        Resume
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
        </header>
    );
}
export default Header;