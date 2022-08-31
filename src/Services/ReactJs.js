import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import REACT from "../images/REACT.svg"
import { TiTick } from 'react-icons/ti';



export default function ReactJs() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">React JS Development</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">                       
                        <h6>Hire React JS developer from Aquatec Innovative because we have skilled team of Java developers at Aquatec Innovative to bring your project to life. We are the top React JS development company who have great expertise in creating best-in-class frontend web apps. Being the best JavaScript framework, React JS is used to build fast, reliable web user interfaces. React JS is the most preferred JavaScript library model that renders consistent page performance.</h6>
                        <h6>At Aquatec, we have developed full-scale web applications and reusable React components. Our well-experienced java developers provide custom React JS development services. From building custom websites to developing effective systems, React is one of the best frontend tools. We as a React JS development company develop advanced JS based applications for all sizes of enterprises. Hire React JS developer from us to make your heavy apps perform efficiently and gain a competitive edge.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h4 className="mb-5 mt-5 bold7 ">React JS Development Service Offerings by Aquatec Innovative:</h4>
                            <h6><span><TiTick />Code reusability</span></h6>
                            <h6><span><TiTick />Lightweight code based</span></h6>
                            <h6><span><TiTick />Easy learning curve</span></h6>
                            <h6><span><TiTick />Interactive interface design</span></h6>
                            <h6><span><TiTick />Excellent component support</span></h6>                     
                        </Col>
                        <Col className="column">
                            <img src={REACT} className="wh25 center"></img>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </div>
    )
}
