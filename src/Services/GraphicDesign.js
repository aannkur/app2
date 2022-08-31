import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function GraphicDesign() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Graphic Design</h1>
                        </div>
                    </div>
                </header>



                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Creative Web Designing Company</h5>
                            <h6>Your website design compels visitors to trust your brand and defines how innovative you are. Our designers know how to produce websites that are</h6>
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
                            <h5 className="mb-5 mt-5 bold7 red">Visual Graphic Design Services</h5>
                            <h6>When you work with us, you can rest assured that the CakePHP development services we provide are built on a solid architecture, which is critical for cost-effective development. Hire CakePHP professionals with in-depth knowledge of the framework from us to create consistent web apps faster and provide a good user experience to your clients.</h6>

                        </Col>
                    </Row>
                </Container>


                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Graphic Design Services We Offer:</h5>
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

            </div>
            <Footer />
        </div>
    )
}
