import React, { useState, useEffect } from 'react'
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Image, Row } from 'react-bootstrap';
import aquatechLogo from "../images/aquatechLogo.png"
import skype from "../images/skype.png"
import mobile from "../../src/images/moble.svg"
import framework from "../../src/images/framework.svg"
import webdevelopment from "../../src/images/webdevelopment.svg"
import seo from "../../src/images/seo.svg"
import api from "../../src/images/api.svg"
import Home from '../Screens/Home/Home';
import Portfolio from '../Screens/Portfolio/Portfolio';
import Blogs from '../Screens/Blogs/blogs';
import Contact from '../Screens/Contact Us/Contact';
import AboutUs from '../Screens/About Us/AboutUs';


function NavB({services, isLoading}) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg" fixed='top'>
                    <Container className="container" >
                        <Nav.Link as={Link} to="/"><Image fluid src={aquatechLogo} className="logo" ></Image></Nav.Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown" show={show}
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}>

                                    <Container className='wh100 columnnav menubg '>
                                        <Row className="rownav p-2" style={{ width: '68rem' }}>
                                            <Col className="columnnav m1 m-2 shadow border border-0 border-dark radius-02rem" style={{ height: '25rem' }}>
                                                <div className="rownav">
                                                    <img src={webdevelopment} className="wh2"></img>
                                                    <h6 className='center'>Web Development</h6>
                                                </div>
                                                <NavDropdown.Divider />
                                                <Row className="bg-white-light2 text-align radius-02rem" style={{ height: '25rem' }}>
                                                    <Nav.Link as={Link} to="/api" ><h6 className='black small8'>API Integration</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/php" ><h6 className='black small8'>PHP Development Services</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/reactJs" ><h6 className='black small8'>React Js Development</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/magento" ><h6 className='black small8'>Magento Development</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/shopify" ><h6 className='black small8'>Shopify Development Services</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/wordpress" ><h6 className='black small8'>WordPress Development Services</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/ecommerce" ><h6 className='black small8'>Ecommerce Development Services</h6></Nav.Link>
                                                </Row>
                                            </Col>
                                            <Col className="columnnav m2 m-2 shadow border border-0 border-dark radius-02rem" style={{ height: '25rem' }}>
                                                <div className="rownav">
                                                    <img src={framework} className="wh2"></img>
                                                    <h6 className='center'>Web FrameWorks</h6>
                                                </div>
                                                <NavDropdown.Divider />
                                                <Row className="bg-white-light1 text-align radius-02rem" style={{ height: '25rem' }}>
                                                    <Nav.Link as={Link} to="/node" ><h6 className='black small8'>Node Js</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/angular" ><h6 className='black small8'>Angular Js</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/yii" ><h6 className='black small8'>YII</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/laravel" ><h6 className='black small8'>Laravel</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/codeIgniter" ><h6 className='black small8'>CodeIgniter</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/cakephp" ><h6 className='black small8'>Cake PHP</h6></Nav.Link>
                                                </Row>

                                            </Col>
                                            <Col className="columnnav m3 m-2 shadow border border-0 border-dark radius-02rem" style={{ height: '25rem' }}>
                                                <div className="rownav">
                                                    <img src={api} className="wh2"></img>
                                                    <h6 className='center'>Web Design </h6>
                                                </div>
                                                <NavDropdown.Divider />
                                                <Row className="bg-white-light0 text-align radius-02rem" style={{ height: '25rem' }}>
                                                    <Nav.Link as={Link} to="/webRedesign" ><h6 className='black small8'>Website Redesign</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/graphicDesign" ><h6 className='black small8'>Graphic Design</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/mobileApplication" ><h6 className='black small8'>Mobile Application Design</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/responsiveWeb" ><h6 className='black small8'>Responsive Web Design</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/logoDesign" ><h6 className='black small8'>Logo Design</h6></Nav.Link>
                                                </Row>
                                            </Col>
                                            <Col className="columnnav m4 m-2 shadow border border-0 border-dark radius-02rem" style={{ height: '25rem' }}>
                                                <div className="rownav">
                                                    <img src={mobile} className="wh2"></img>
                                                    <h6 className="center">Mobile Development</h6>
                                                </div>
                                                <NavDropdown.Divider />
                                                <Row className="bg-white-light1 text-align radius-02rem" style={{ height: '25rem' }}>
                                                    <Nav.Link as={Link} to="/ios" ><h6 className='black small8'>IOS App Development</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/android" ><h6 className='black small8'>Android App Development</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/flutter" ><h6 className='black small8'>Flutter App Development</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/reactNative" ><h6 className='black small8'>React Native App Development</h6></Nav.Link>
                                                </Row>
                                            </Col>
                                            <Col className="columnnav m5 m-2 shadow border border-0 border-dark radius-02rem" style={{ height: '25rem' }}>
                                                <div className="rownav">
                                                    <img src={seo} className="wh2"></img>
                                                    <h6 className='center'>Digital Marketing</h6>
                                                </div>
                                                <NavDropdown.Divider />
                                                <Row className="bg-white-light2 text-align radius-02rem" style={{ height: '25rem' }}>
                                                    <Nav.Link as={Link} to="/seo" ><h6 className='black small8'>SEO</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/ssm" ><h6 className='black small8'>Social Media Marketing</h6></Nav.Link>
                                                    <Nav.Link as={Link} to="/email" ><h6 className='black small8'>Email Marketing</h6></Nav.Link>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row >
                                        </Row>
                                    </Container>

                                </NavDropdown>

                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                                <Nav.Link as={Link} to='/about-us'>About Us</Nav.Link>
                                <Nav.Link as={Link} to='/contact-us' >Contact Us</Nav.Link>
                            </Nav>
                            <Image className='skype' fluid src={skype}></Image>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

            <section>
                <Outlet />
            </section>
        </>
    )
}

export default NavB;
