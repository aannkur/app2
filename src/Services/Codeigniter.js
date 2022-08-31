import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function Codeigniter() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">CodeIgniter</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>When it comes to open-source solutions, CodeIgniter is undoubtedly one of the most popular development frameworks. This MVC framework is the go-to alternative for businesses looking for high-performing and dynamic websites. It develops web applications with PHP and follows simple coding conventions. CodeIgniter development services provides users with an interactive interface and easy-to-use tools in addition to being a development-friendly platform. CodeIgniter is known for its speed and performance, and if you use it to its maximum capacity, your business can benefit greatly.</h6>
                        <h6>Use the power of CodeIgniter to propel your business to new heights of success. Hire our top-notch CodeIgniter programming team and take advantage of services to create robust and dynamic enterprise applications. We’ve a team of highly trained and experienced developers that are well-known in the industry for their expertise and knowledge. Our team uses the most up-to-date technologies as well as all of the required tools to create trustworthy and secure applications and websites. When you hire us as your CodeIgniter developers, you can rest assured that our work will be completed with the utmost efficiency. Rest assured that we will go to great lengths to make the entire development process as simple and convenient as possible for you.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Robust Codeigniter development services by Aquatec Innovative</h5>
                            <h6><span ><TiTick />CodeIgniter Migration Services</span></h6>
                            <h6><span ><TiTick />Corporate Application Development</span></h6>
                            <h6><span ><TiTick />CodeIgniter portal development</span></h6>
                            <h6><span ><TiTick />API Integration Services</span></h6>
                            <h6><span ><TiTick />Back-end for Mobile Apps</span></h6>
                            <h6><span ><TiTick />CodeIgniter Support & Maintenance</span></h6>
                            <h6><span ><TiTick />CodeIgniter eCommerce Solution</span></h6>
                        </Col>
                        <Col className="column">
                            <img src={api} className="wh25 center"></img>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <img src={api} className="wh25 center"></img>
                        </Col>
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Why should you hire us to develop the CodeIgniter Framework?</h5>
                            <h6><span ><TiTick />Seamless Implementation</span></h6>
                            <h6><span ><TiTick />Experienced Team</span></h6>
                            <h6><span ><TiTick />Custom Solutions </span></h6>
                            <h6><span ><TiTick />Multiple PLatform Applications</span></h6>
                            <h6><span ><TiTick />Transparency</span></h6>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">                            
                            <h6>You don’t need to understand the methods and processes for designing custom web applications to succeed in the digital world. At Aquatec Innovative, we speak your language and take responsibility for creating a website that meets your clients’ needs. You are a professional in your field. With our experience, we turn that knowledge into growth. </h6>
                        </Col>
                        <Col className="column">
                            <img src={api} className="wh25 center"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
