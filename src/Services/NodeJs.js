import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function NodeJs() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Node.JS Framework</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>Looking to hire NodeJS developers for building high-performance web applications? Aquatec Innovative is a leading
                            web development company who has expertise in developing Node JS applications. With our NodeJS development services,
                            you can fabricate feature-rich, reliable enterprise solutions. NodeJS is a JavaScript runtime platform that offers
                            dynamic, powerful full-stack development solutions for maximum efficiency. It lets you use the same language to
                            write the frontend and backend of our app. We have a team of NodeJS developers who have a great understanding of
                            advanced technologies.  </h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h3 className="mb-5 mt-5 bold7 ">NodeJS development services we offer include: </h3>
                            <h6><span ><TiTick />AJAX Development</span></h6>
                            <h6><span ><TiTick />Node.js API Development</span></h6>
                            <h6><span ><TiTick />Plug-ins Development</span></h6>
                            <h6><span ><TiTick />Interactive App Development</span></h6>
                            <h6><span ><TiTick />Node.js for UI/UX Design</span></h6>
                            <h6>NodeJS allows customers to work fast without compromising the developed software quality. Our NodeJS framework services are the most reliable solutions for big projects. If you want to develop scalable, feature-rich database related apps for your enterprise, then choose us as your NodeJS development partner. Our team of developers have in-depth knowledge in creating fast, robust web applications. We strive to provide our clients with end-to-end NodeJS development services using our innovative practices. Our well-trained developers have expertise in scaling functions of the applications that boost our clients’ businesses. We help you frame your project needs and deploy comprehensive NodeJS solutions. </h6>
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
