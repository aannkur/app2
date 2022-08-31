import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function ECom() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">E-commerce Website Development</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h5 className="mb-5 mt-5 bold7 center">Custom eCommerce Web Development and Design</h5>
                        <h6>Build delightful web experiences and enhance brand exposure with the seamless eCommerce web development services.
                            At Aquatec Innovative, we have been offering tailored eCommerce services for leading enterprises. Our highly
                            skilled eCommerce developers have a rich industry experience in building eCommerce websites and apps. We use
                            innovative ideas to develop eCommerce solutions to help our clients establish a digital presence and achieve
                            business goals. Our experienced team at Aquatec merge brand imaginations with its tech stack to manifest your
                            dream store. We understand your requirements and recognize the roadblocks to outline the eCommerce development plan. </h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7 ">Some key elements of effective eCommerce web development services</h5>
                            <h6><span className='red bold7'>User-Friendly eCommerce Website Design:</span>{" "}We work dedicatedly to deliver feature-rich, exclusive eCommerce websites to all sizes of businesses. Our eCommerce web design solutions scale-up your online business and boost traffic. Our professionals formulate the right strategies and skills in eCommerce design and development.</h6>
                            <h6><span className='red bold7'>Build your product brand:</span>{" "}At Aquatec Innovative, we develop websites by integrating your promotion efforts and aligning your online portal with the brand. </h6>
                            <h6><span className='red bold7'>Seamless website experience:</span>{" "}Our eCommerce developers implement a smart approach for plugin and module development.</h6>
                            <h6><span className='red bold7'>eCommerce plugins and module development:</span>{" "}We develop custom eCommerce plugins and modules which align perfectly with your business needs that enhance your online store’s functionalities.</h6>
                            <h6><span className='red bold7'>Responsive eCommerce website:</span>{" "}We create interactive and responsive websites to help you elevate the customer shopping experience that derives maximum customer growth.</h6>
                            <h6><span className='red bold7'>Website maintenance & support:</span>{" "} We, at Aquatec Innovative, offer maintenance and on-demand support to keep your online store running smoothly and to ensure a seamless online shopping experience.</h6>
                            <h6><span className='red bold7'>Payment Gateway Integration:</span>{" "}For better security and user convenience, we integrate popular payment gateways into business online stores.</h6>
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
                            <h5 className="mb-5 mt-5 bold7 ">Partner with Aquatec Innovative</h5>
                            <h6>Our team of eCommerce developers apply best practices to increase conversions and sales. We are passionate about developing, designing, and marketing eCommerce sites to boost traffic and business. Aquatec Innovative is an experienced eCommerce web development agency that helps you enhance your brand’s online visibility. Our professionals will understand your business needs and offer solutions that achieve your eCommerce goals. Hire us as your eCommerce web development partner to drive your business to the next level.</h6>
                            <h6>Our top-notch eCommerce solutions offer benefits like:</h6>
                            <h6><span><TiTick />Skilled and well-experienced developer team who work dedicatedly to deliver projects within time. </span></h6>
                            <h6><span><TiTick />We have successfully delivered several successful eCommerce projects.</span></h6>
                            <h6><span><TiTick />Our team of developers have built highly scalable, reliable, innovative, and performance-oriented online stores.</span></h6>
                            <h6><span><TiTick />We have been offering cost-effective solutions for small scale and large scale enterprises.</span></h6>
                            <h6><span><TiTick />Moreover, we offer cutting-edge solutions on various platforms like Shopify, WordPress, and Laravel.</span></h6>                        
                        </Col>
                    </Row>
                </Container>

                
            </div>
            <Footer />
        </div>
    )
}
