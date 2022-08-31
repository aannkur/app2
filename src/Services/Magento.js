import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import REACT from "../images/REACT.svg"
import { TiTick } from 'react-icons/ti';



export default function Magento() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">Magento Development</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>Looking for skilled Magento developers to build a user-centric and feature-set eCommerce store? Hire the most experienced and well-trained developers from Aquatec Innovative. Empower your wholesale operations and drive your business to the next level with unified Magento development services.</h6>
                        <h6>Magento is an eCommerce platform that offers SEO, marketing, and catalog management tools. It is built on advanced open-source technology for providing online merchants with a flexible shopping cart system. To grow your online business and generate more revenue, hire our skilled team of Magento developers.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h4 className="mb-5 mt-5 bold7 ">Our Magento development services include:</h4>
                            <h6><span><TiTick />Magento custom development</span></h6>
                            <h6><span><TiTick />Magento web development</span></h6>
                            <h6><span><TiTick />Magento module development</span></h6>
                            <h6><span><TiTick />Magento theme development</span></h6>
                            <h6><span><TiTick />Magento shopping cart development</span></h6>
                            <h6>At Aquatec Innovative, we use the advanced AI-assisted tools and cutting-edge technology to build the Magento store. Moreover, we offer customized Magento development services and equip your store with customized features. Our Magento developers build a theme that aligns with your brand that expands your brand value online. Our aim is to provide our clients robust storefront models by using the latest Magento version like Magento 1.9, Magento 2.0. Get your online store developed from the best Magento development company today.</h6>
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
