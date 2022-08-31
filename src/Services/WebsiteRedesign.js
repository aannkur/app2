import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function WebsiteRedesign() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Website Redesign</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>Transform your website from a pamphlet to a performance-driven product. Your website is undoubtedly the most important marketing asset. Visitors never visit your website again that has poor UI/UX design. Users are visually drawn to professional, effective, and beautiful websites. If your website no longer reflects your brand, then it’s time to consider a website redesign. </h6>
                        <h6>Being a top-notch website redesign company, Aquatec Innovative is offering the best website redesign services. Our primary goal is to help brands increase the value of their websites, drive more traffic, get more leads, and ultimately generate more revenue. We are a top web designing company that focuses on innovation, quality, and speed. Our professional designers redesign the responsive, effective websites according to your requirements. We aim to improve the functionality of your websites thus helping you attract more online visitors. Our designers produce large-scale websites that accelerate future growth for businesses.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 red">Website Redesign services we offer include</h5>
                            <h6><span ><TiTick />Support traffic and lead generation </span></h6>
                            <h6><span ><TiTick />Streamline website administrative experience</span></h6>
                            <h6><span ><TiTick />Streamline website administrative experience</span></h6>
                            <h6><span ><TiTick />Streamline website administrative experience</span></h6>
                           
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
