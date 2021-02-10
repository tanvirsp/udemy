import React from 'react';
import './Header.css';
import {Navbar, Nav, Form, Button, FormControl, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import logo from '../../images/logo.png';
import heroPic from '../../images/hero-b2.png';

const Header = (props) => {
    const courseCount = props.courseCount;
    return (
        <div>
              <Navbar bg="light" variant="light" className="fixed-top">
                    <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                            <span className ="top-cart">{courseCount.length}</span>
                    </Form>
                </Navbar>


        {/* hero Section  */}
                <div className="hero-section">
                    <Container>
                        <Row>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="hero-text">
                                    <h1>Your Course to Success</h1>
                                    <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                                    <button className="btn btn-success px-4 py-3 mt-3">Join for Free</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-img">
                                    <img src={heroPic} alt=""/>
                                </div>
                            </div>
                        </Row>
                    </Container>

                </div>

        </div>
    );
};

export default Header;