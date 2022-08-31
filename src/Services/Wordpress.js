import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function WordPress() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">WordPress Development Services</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>The most effective content management system that improves your development experience is WordPress. It has a tonne
                            of features and plugins that make managing websites quick and easy. Affordable WordPress development services are
                            provided by Aquatec Innovative. Our WordPress developers create dependable, strong hybrid websites. This means that
                            you are at the proper spot if you want to employ or hire WordPress developer. Small businesses and start-ups
                            throughout the world may use the WordPress development services provided by our talented experts. We support
                            you in enhancing your brand’s value, generating income, and luring clients. Utilize our excellent services
                            to create individualized, highly optimized websites that will benefit your company.</h6>
                        <h5 className="red bold7">Some of the WordPress development services we offer include the following:</h5>
                        <h6><span><TiTick />WordPress plug-in creation</span></h6>
                        <h6><span><TiTick />WordPress services with no header (Headless CMS)</span></h6>
                        <h6><span><TiTick />Creation of WordPress themes</span></h6>
                        <h6><span><TiTick />Theme customization for WordPress</span></h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Customized WordPress Development Services</h5>
                            <h6>Hire WordPress developer from us to obtain the best-customized, quickest WordPress website possible.
                                Your project requires a team of highly qualified experts that are truly adept at what they do. WordPress
                                website creation is a passion for our team of professionals. They provide high-quality, individualized
                                services that are tailored to your company’s needs. We have been creating WordPress themes and plugins
                                as a leading WordPress development company. Our goal is to provide clients with Google-friendly websites
                                that advance your company’s position in the market. We employ the appropriate techniques and equipment
                                to deliver trustworthy, adaptable solutions to you within the allotted time frames. We provide a variety
                                of WordPress development services, such as building SEO-savvy websites, multi-faced themes, and plugins.
                                To outperform the competition, choose the best WordPress solutions from Aquatec Innovative.</h6>
                        </Col>
                        <Col className="column">
                            <img src={api} className="wh25 center"></img>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <img src={API} className="wh25 center"></img>
                        </Col> 
                        <Col className="column ml6">
                            <h5 className="mb-5 mt-5 bold7 red">Our WordPress development services include:</h5>
                            <h6><span><TiTick />WordPress Blog Development services</span></h6>
                            <h6><span><TiTick />WordPress Web Development services</span></h6>
                            <h6><span><TiTick />Responsive Website Development</span></h6>
                            <h6><span><TiTick />WordPress installation & setup</span></h6>
                            <h6><span><TiTick />Template & Theme for WordPress</span></h6>
                            <h6><span><TiTick />Custom WordPress Plugin Development</span></h6>
                            <h6><span><TiTick />WordPress Migration Support and Maintenance</span></h6>
                            <h6><span><TiTick />WordPress Web Design services</span></h6>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h4 className="mb-5 mt-5 bold8">Why Choose Aquatec Innovative for WordPress Development Services?</h4>
                            <h6>We are the top WordPress or web development company with a focus on innovative technologies and
                                customization. Our proficiency in WordPress design and development spans a range of cutting-edge
                                features that assist you in dominating your market. We firmly think that providing high-quality
                                work and services focused on achieving results will lead to lasting client relationships. In addition
                                to building websites, our team of qualified WordPress developers also optimizes websites for search
                                engines. To strengthen and empower your company, hire WordPress developer from Aquatec Innovative
                                as your WordPress development partner. Here are a few justifications for choosing us as your WordPress
                                developer:</h6>
                            <h6><span><TiTick />We offer smooth website functionality</span></h6>
                            <h6><span><TiTick />Hire WordPress developers with experience and expertise</span></h6>
                            <h6><span><TiTick />Custom WordPress Theme Development</span></h6>
                            <h6><span><TiTick />SEO Friendly Structure</span></h6>
                            <h6><span><TiTick />Assures complete satisfaction</span></h6>
                            <h6><span><TiTick />Furthermore, 24/7 Support</span></h6>
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
