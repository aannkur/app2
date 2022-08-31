import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function CakePHP() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Cake PHP</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>CakePHP is a popular web development framework that allows you to create websites quickly. This is a PHP-based MVC framework that enables an extensible architecture for developing, updating, and deploying web applications. It is modelled after Ruby on Rails. By employing its high-end capability, the frameworks assist developers in creating powerful and secure online applications.</h6>
                        <h6>Aquatec Innovative is a prominent CakePHP Development Company, providing well-structured codes and web applications with features like translation, database access, caching, validation, and authentication. Our professionals have extensive market experience that can assist you in developing feature-rich and highly effective online solutions for your company. We can provide scalable, robust PHP development services for all sizes of businesses, all thanks to our passionate developer base with extensive industry expertise and in-depth technical knowledge. Built-in caching, translations, database access, validations, and authentication are just a few of the useful features we use.</h6>
                        <h6>We are recognized for adhering to the highest CakePHP web development standards and are capable of handling a wide range of projects. We offer custom-built solutions for your needs, whether you’re a small or mid-size business experimenting with PHP or a large corporation with enterprise-level requirements. For any CakePHP development project, we pledge to give a result-oriented solution.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Our CakePHP Services include</h5>
                            <h6><span ><TiTick />Dynamic web application</span></h6>
                            <h6><span ><TiTick />Module Development</span></h6>
                            <h6><span ><TiTick />App Integration</span></h6>
                            <h6><span ><TiTick />ECommerce solution</span></h6>
                            <h6><span ><TiTick />API development</span></h6>
                            <h6><span ><TiTick />CakePHP based enterprise solution </span></h6>
                            <h6><span ><TiTick />Maintenance and up-gradation services</span></h6>
                        </Col>
                        <Col className="column">
                            <img src={api} className="wh25 center ml6"></img>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <img src={api} className="wh25 center"></img>
                        </Col>
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Why Choose us?</h5>
                            <h6>When you work with us, you can rest assured that the CakePHP development services we provide are built on a solid architecture, which is critical for cost-effective development. Hire CakePHP professionals with in-depth knowledge of the framework from us to create consistent web apps faster and provide a good user experience to your clients.</h6>
                            <h6><span ><TiTick />Reliable, Responsive Services</span></h6>
                            <h6><span ><TiTick />Certified In House Team</span></h6>
                            <h6><span ><TiTick />Seamless Performance </span></h6>
                            <h6><span ><TiTick />Flexible Engagement Models</span></h6>
                            <h6><span ><TiTick />Growth Mindset</span></h6>
                            <h6><span ><TiTick />Easy and Quick Onboarding</span></h6>
                            <h6><span ><TiTick />Focus on Customer Satisfaction</span></h6>
                        </Col>
                    </Row>
                </Container>

              
            </div>
            <Footer />
        </div>
    )
}
