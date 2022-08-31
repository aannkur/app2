import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import "./footer.css"
import footerLogo1 from '../images/footerLogo1.png'
import shiv from '../images/shiv.png'
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Animation from './animation'

export default function Footer() {

    const [isLoading, setLoading] = useState(true)

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get("https://aquatecinnovative.com/wp-json/wp/v2/posts?per_page=4").then((response) => {
            setBlogs(response.data);

        });
    }, []);

    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get("https://aquatecinnovative.com/wp-json/wp/v2/pages?per_page=24").then((response) => {
            setServices(response.data);
            setLoading(false)
        });
    }, []);

    return isLoading ?(
        <>{" "}</>
    ):(
        <div className='wh100 navy-blue pt-5'>
            <div className="seprator mt-5"></div>

            <div className="center mt-5">
                <Row className='w120 '>
                    <Col xs={5}>
                        <Row>
                            <Col className="column">
                                <h5 className="white ">Our Company</h5>
                                <Row className='mt-2'><h6 className="white small cursor">Portfolio</h6></Row>
                                <Row className='mt-2'><h6 className="white small cursor">Blogs</h6></Row>
                                <Row className='mt-2'><h6 className="white small cursor">About Us</h6></Row>
                                <Row className='mt-2'><h6 className="white small cursor">Contact Us</h6></Row>
                            </Col>
                            <Col className="column">
                                <h5 className="white mt-4">Recent Blogs</h5>

                                {blogs.map((item) => (
                                    <Row>
                                        <h6 className="white small cursor">{item?.title?.rendered}</h6>
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                    <Col xs={5} className="center column">
                        <Row>
                            <h5 className="white center">Services</h5>
                        </Row>
                        <Row>
                            {services.map((item) => (
                                <Row className='mt-2 ' style={{ width: '13rem' }}>

                                    <h6 className="white small cursor">{item?.title.rendered}</h6>

                                </Row>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>

            <Container style={{ width: '14rem' }} className="navy-blue column negitive-margin26 center">
                <img src={footerLogo1} className="whfooterlogo center"></img>
                <div className="line"></div>
                <FiFacebook className="center white wh2rem mt-4" />
                <FiLinkedin className="center white wh2rem mt-4" />
            </Container>

            <Container className="mb-5 center ">
                <div className="seprator mt-5 mb-5"></div>
            </Container>

            <Container className="center">
                <Row className='wh100 mb-5'>
                    <Col xs={5} className="mt-5">
                        <h4 className="red">We Were Founded In 2018</h4>
                        <h6 className="white">Over the years, we have established ourselves as an acclaimed global Digital
                            Service provider for Consultation, Design, Development & Marketing of Web and
                            Mobile based applications.</h6>
                        <h6 className="white mt-4">We are a Top-rated IT Company based in India serving global clients since 5
                            years. We employ 25+ in-house team of professionals working round the clock to
                            deliver quality Software services.</h6>
                    </Col>
                    <Col></Col>
                    <Col xs={5} className="column negitive-margin6">
                        <img className="center wh120" src={shiv}></img>
                        <h4 className="red center">GET IN TOUCH</h4>
                        <h6 className="white"> 1515, Sector 82, Industrial Park, JLPL Industrial Area, <br />
                            Sahibzada Ajit Singh Nagar, Punjab 160055</h6>
                        <h6 className="white">
                            +91-7837464760 , +91-8264326722</h6>
                        <h6 className="white">
                            info@aquatecinnovative.com</h6>
                        <h6 className="white">Monday - Friday: 9am - 6pm</h6>
                    </Col>
                </Row>
            </Container>

            <Container className="center">
                <h6 className="white small">Copyright © <a href="">Aquatec Innovative</a> 2022. All rights reserved.</h6>
            </Container>
        </div>
    )
}

