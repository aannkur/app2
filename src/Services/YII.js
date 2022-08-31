import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import api from "../images/api.svg"
import API from "../images/api.gif"
import { TiTick } from 'react-icons/ti';


export default function Yii() {
    return (
        <div>
            <NavB />
            <div>
                <header>
                    <div className=' bg-services mb-5'>
                        <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                            <h1 className="center bold7">YII Framework</h1>
                        </div>
                    </div>
                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        <h6>Fuel your business growth with best-in-class Yii Framework development services by Aquatec Innovative. We are a leading PHP Yii framework development company who is offering scalable, flexible solutions to our clients. Backed by a well-experienced team of Yii developers, Aquatec Innovative is providing reliable and high-end solutions to its customers. We have expertise in applying different functional properties of this framework to develop efficient web solutions for all sizes of enterprises. Enhance your brand value with our product-first approach and expertise in intelligent mobile and web app development solutions. </h6>
                        <h6>Yii is a component-based PHP framework that is used to develop large-scale web applications. This framework can significantly accelerate your web app development process. It is especially used for developing web 2.0 applications. Basically, Yii frameworks has two versions: Version 1.1 and Version 2.0. The previous Yii version is under maintenance while the advanced 2.0 version is a completely new update. Yii 2.0 version comes with the latest technologies and protocols like Composer, Namespaces, PSR, Traits, and many more. Yii is a fast, secure, and efficient framework that offers the maximum functionality. Highly intuitive and extensible built-in tools help our developers to write secure codes in less time. If you are looking for comprehensive Yii services, then you can hire our skilled developers.</h6>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h6>At Aquatec Innovative, we believe in excellence and quality services. We implement an inherent feature of the open source PHP framework development to help boost your business. Installing the Yii framework is simple and quick. Developers just need to download the basic structure, extract the files, and configure the database to make it  ready to run. Hire our skilled Yii developers to empower your business. Our team of Yii developers use organizational knowledge and codebase to develop high-quality web development and mobile solutions.</h6>
                            <h5 className="mb-5 mt-5 bold7">Features of PHP Yii2 Framework </h5>
                            <h6><span ><TiTick />Easy and quick installation</span></h6>
                            <h6><span ><TiTick />Highly extensible</span></h6>
                            <h6><span ><TiTick />Less development time</span></h6>
                            <h6><span ><TiTick />Advanced technologies</span></h6>
                            <h6><span ><TiTick />Secured codes</span></h6>
                            <h6><span ><TiTick />MVC design pattern </span></h6>
                            <h6><span ><TiTick />Seamless and faster performance</span></h6>
                            
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
                        <Col className="column">
                            <h5 className="mb-5 mt-5 bold7">Our Yii2 Development Process</h5>
                            <h6 className="bold7 red">Understand the project </h6>
                            <h6>The first step is to meet with our clients to understand their project requirements and discuss our ideas.</h6>
                            <h6 className="bold7 red">Wireframe and Planning</h6>
                            <h6>We analyse wireframing, prototyping and feasibility before proceeding with the designing and developing part.</h6>
                            <h6 className="bold7 red">Design strategy </h6>
                            <h6>After that, we create visual components and plans like PSD, graphic designs, and screens.</h6>
                            <h6 className="bold7 red">Development and optimization</h6>
                            <h6>After completing the designing part, our developers build functional elements, algorithms, and other modules and then integrate them with UI.</h6>
                            <h6 className="bold7 red">Quality and extension</h6>
                            <h6>We recheck our work and then make required changes. Then quality assurance is performed on the completion of a draft.</h6>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            <h3 className="mb-5 mt-5 bold7 red">Avail with our Yii development services</h3> 
                            <h6><span ><TiTick /></span>Yii Website Development</h6>
                            <h6><span ><TiTick /></span>Custom Yii Framework Development</h6>
                            <h6><span ><TiTick /></span>Yii Modules/Plug-in Development</h6>
                            <h6><span ><TiTick /></span>Custom Yii Application Development</h6>
                            <h6><span ><TiTick /></span>Yii Customization Solutions</h6>
                            <h6><span ><TiTick /></span>Yii Maintenance and Support</h6>
                            <h5 className="mb-5 mt-5 bold7 red">Why choose Aquatec Innovative for Yii Framework services?</h5>             
                            <h6>If you are looking to hire Yii developers for your project, then partner with us. We dedicatedly worked to create futuristic and full-featured websites for businesses. Over the years, we have built plenty of apps for enterprises all over the globe. Our developers team build web and mobile applications that are highly scalable, interactive, and responsive. We provide custom application development services as per your business requirements. Our skilled developers have comprehensive knowledge of the Yii framework that enables them to build effective, intuitive web apps. Moreover, our team of developers are proficient in providing plug-in/module installation services. We work hard to offer our clients with effective assistance 24*7. </h6>
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
