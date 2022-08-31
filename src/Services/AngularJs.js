import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function AngularJs() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Angular.JS Framework</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>Craft flexible, scalable enterprise applications with our diverse AngularJS framework services. Aquatec Innovative is a leading AngularJS development company who provide cost-effective business solutions. We help you create dynamic, intuitive web designs and applications for your business. AngularJS is a structural framework for effective application feature-rich websites, and applied to the front-end mobile applications. This open source JavaScript framework is used to develop single-page applications. Choose Aquatec Innovative to get responsive and customized AngularJS services. Our team of developers have decades of experience in implementing advanced technologies. Our approach is transparent and user friendly to deliver cost-effective solutions.  </h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h3 className="mb-5 mt-5 bold7 ">Benefits of using AngularJS development services by Aquatec Innovative:</h3>
                            <h6><span ><TiTick />Agile and dynamic methodologies for building AngularJS  web <span className='ml1'>development</span></span></h6>
                            <h6><span ><TiTick />Premium code quality</span></h6>
                            <h6><span ><TiTick />Enhanced Plug n Play components</span></h6>
                            <h6><span ><TiTick />User defined directives to extend the HTML functionality in apps</span></h6>
                            <h6><span ><TiTick />Quality driven web app development</span></h6>
                            <h6><span ><TiTick />Supports two way data binding</span></h6>
                            <h6>Hire us to obtain custom, user-centric web applications blended with flawless features. Being the best AngularJS service provider company, we have been providing top-notch solutions to end customers. We build well-structured application architectures for businesses using our knowledge of core JS frameworks, programming. Our skilled and experienced developers deliver projects within the deadline. We have rich experience in designing, developing, testing web apps using AngularJS technologies.</h6>
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
