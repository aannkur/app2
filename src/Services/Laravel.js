import React, { useEffect, useState } from 'react'
import "./Services.css"
import Footer from '../Components/footer'
import NavB from '../Components/navbar'
import { Col, Container, Row, Tab, Tabs, Card, Button, Accordion } from 'react-bootstrap'
import shopify from "../images/shopify.svg"
import circle from "../images/circle.gif"
import work from "../images/work.gif"
import doccument from "../images/doccument.svg"
import axios from 'axios'
import Slider from 'react-slick'
import { TiTick } from 'react-icons/ti';


export default function Laravel() {

    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get("https://aquatecinnovative.com/wp-json/wp/v2/posts?per_page=13").then((response) => {
            setPost(response.data);

        });
    }, []);

    const settings2 = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    }

    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "red" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "green" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    return (
        <div>
            <NavB />

            <header>
                <div className=' bg-services mb-5'>
                    <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                        <h1 className="center bold6">Laravel Development Services</h1>
                        <h4 className="center red">Reliable Laravel e-Commerce solutions</h4>
                    </div>
                </div>
            </header>


            <Container className="mb-5">
                <Row>
                    <h6 className="mt-3">Since Laravel’s inception, The Aquatec Innovative has employed a team of devoted Laravel
                        professionals to provide Laravel development services. By examining the many exteriors of the Laravel development
                        process, we have delivered a few very safe and robust online apps.</h6>
                    <h6><span><TiTick /> Result-oriented team of Laravel developers.</span></h6>
                    <h6><span><TiTick /> Reporting and updates in order.</span></h6>
                    <h6><span><TiTick /> 100% guarantee of client satisfaction.</span></h6>

                    <h1 className="centerItem center bold7 mt-5">We are Skilled Laravel Programmers </h1>
                </Row>
            </Container>

            <Container className="center">
                <div className="sepratorRed center wh100"></div>
            </Container>

            <Container className="mt-5">
                <Row>
                    <h6 className="mt-3">Laravel sometimes referred to “the PHP system for Online Artisans,”
                        is a PHP framework that enables programmers to benefit from MVC engineering to create effective web applications.</h6>
                    <h6 className="mt-3">Due to its optimum development pace at Laravel development services, a broad range of expansions,
                        and the incredibly helpful Artisan CLI, Laravel is one of the most popular open-source PHP frameworks and is the best
                        option for creating large-scale/enterprise-stage web applications.</h6>
                    <h6 className="mt-3">According to a Built with analysis, a few of Laravel’s well-known website specialties include business,
                        entertainment, media, news, shopping, technology, and vehicles. This highlights how flexible Laravel is because it can be
                        used for any sort of company.</h6>
                    <h6 className="mt-3">You can trust us when you hire Laravel developer for a goal-oriented, client-driven cycle throughout
                        the project lifecycle while using Aquatec Innovative’s Laravel development services. Whether it’s a cost estimate, a time
                        estimate, frequent contact, or daily reporting, we promise complete client satisfaction and continually uphold a completely
                        clear commitment.</h6>
                    <h6 className="mt-3">We typically look for engaging and adaptable Laravel development solutions that ensure reliable success
                        for a firm with the hope of fostering incredibly powerful solutions and participating in a long-term association.</h6>
                </Row>
            </Container>



            <Container className="mt-5 center">
                <Row className="">
                    <h1 className="mt-3 text-center bold7 mb-5">Broad Clarity. Prepared financial Strategy. No Surprises.</h1>
                    <Container className="center mt-5">
                        <div className="sepratorRed center wh100"></div>
                    </Container>
                    <h5 className="mt-3 mb-3  text-center red ">Everything you need to construct and maintain a Laravel eCommerce store</h5>
                    <h6 className="mt-2 mb-3  text-center">Hire Laravel developers for effective results</h6>
                    <h6 className="mt-2 mb-3  text-center">Because we at Aquatec Innovative undertake a proactive role and maintain constant
                        communication, we assume full responsibility for Laravel development.</h6>
                    <h5 className="mt-2 mb-3  text-center red bold7">It requires a moment to Reach Us</h5>
                </Row>
            </Container>


            <Container className="mt-5 center">
                <Row className="">
                    <h1 className="mt-3 text-center bold7 mb-5">The Hiring Process: <br />
                        How To Hire Our Laravel Experts?</h1>
                    <Container className="center mt-5">
                        <div className="sepratorRed center wh100"></div>
                    </Container>
                    <h5 className="mt-3 mb-3  text-center red ">In order to construct Laravel stores, we provide flexible staffing models.</h5>
                    <h6 className="mt-2 mb-3  text-center">Hire Laravel developer from us, and we’ll keep you informed about how the project
                        is going, use a standardized <br /> approach to store development, and promise complete client happiness or
                        <span className="bold7 red"><h5>guarantee 100% customer <br /> satisfaction.</h5></span>
                    </h6>

                </Row>
            </Container>


            <Container className="column center mt-5">
                <Row className="row center" style={{ width: '62rem' }}>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 1</Button>
                        <h6 className="bold7">First, schedule a free consultation</h6>
                        <h6>If you are considering starting a business, you can schedule a free consultation with one of our Laravel professionals
                            via <span className='bold7'>Skype, Email</span> and other communication channels. We'll be in touch with you right away.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 2</Button>
                        <h6 className="bold7">Task Discussion</h6>
                        <h6>For a further project talk, one of our colleagues will get in touch with you at your convenient time. <br />
                            We will review your needs to ensure that we don't overlook any essential information.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 3</Button>
                        <h6 className="bold7">Agreement to Terms and Conditions</h6>
                        <h6>After that, we will provide you with a detailed task suggestion with a realistic time estimate and cost
                            as well as more modest goals for the project's execution.</h6>
                    </Col>
                </Row>
                <Row className="row center" style={{ width: '40rem' }}>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 4</Button>
                        <h6 className="bold7">Project Execution & Delivery</h6>
                        <h6>The best coding conventions are followed by our company's custom Laravel development team. <br />
                            We provide you with completely bug-free and well-tested projects.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 5</Button>
                        <h6 className="bold7">30-days Support Period</h6>
                        <h6>Our Laravel development services include a 30-day post-delivery support and maintenance period. <br />
                            You can extend this time by working with a Laravel developer.</h6>
                    </Col>
                </Row>
            </Container>


            <Container className="mt-5 center">
                <Row className="">
                    <h1 className="mt-3 mb-5 text-center bold7">Frequently asked questions</h1>
                </Row>
            </Container>
            <Container className="center mt-5 mb-5">
                <div className="sepratorRed center wh100"></div>
            </Container>


            <Container className="mt-5 center column mb-5" style={{ width: "60rem" }}>
                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How long do you need to finish the Laravel Web Application?</Accordion.Header>
                        <Accordion.Body>
                            <h6>At Aquatec Innovative, we generally attempt to stay reasonable and straightforward in our
                                dealings. Along these lines, we never practice counterfeit responsibilities with customers.
                                To realize the specific time needed for your project, we generally encourage you to examine
                                the full subtleties and prerequisites of it with us. Then, at that point, just our specialists
                                will share the time assessment.</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who will be my resource wghen I hire your Shopify development Services?</Accordion.Header>
                        <Accordion.Body>
                            <h6>At the point when you choose our Shopify development services, you will get simple admittance to the
                                concerned Shopify developer and the project process might be chipping away at your task.</h6>
                            <h6>As we have faith in straightforwardness, we permit direct communication with the developers on Skype,
                                Slack, Trello, Basecamp, or JIRA gatherings and keep you all around informed regarding the venture’s advancement.</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>The number of colleagues will be allocated to the projects, and what will be their roles on my project</Accordion.Header>
                        <Accordion.Body>
                            <h6>At whatever point you hire our Shopify development services, we by and large dole out a group of 4 specialized specialists, as referenced beneath:</h6>
                            <h6>Setup and Personalized Fully automated e-commerce solution. A business expert would play out a possibility check and evaluate your Shopify necessities.
                                He would separate the entire project into more modest achievements and give a sensible expense for each achievement. Two Shopify developers will be there-one
                                uphold the frontend, and the other will chip away at the venture and update you day by day. A committed Quality Analyst to audit the work done and keep a beware
                                of its exactness while following a project process.</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>The number of colleagues will be allocated to the projects, and what will be their roles on my project</Accordion.Header>
                        <Accordion.Body>
                            <h6>At whatever point you hire our Shopify development services, we by and large dole out a group of 4 specialized specialists, as referenced beneath:</h6>
                            <h6>Setup and Personalized Fully automated e-commerce solution. A business expert would play out a possibility check and evaluate your Shopify necessities.
                                He would separate the entire project into more modest achievements and give a sensible expense for each achievement. Two Shopify developers will be there-one
                                uphold the frontend, and the other will chip away at the venture and update you day by day. A committed Quality Analyst to audit the work done and keep a beware
                                of its exactness while following a project process.</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>The number of colleagues will be allocated to the projects, and what will be their roles on my project</Accordion.Header>
                        <Accordion.Body>
                            <h6>At whatever point you hire our Shopify development services, we by and large dole out a group of 4 specialized specialists, as referenced beneath:</h6>
                            <h6>Setup and Personalized Fully automated e-commerce solution. A business expert would play out a possibility check and evaluate your Shopify necessities.
                                He would separate the entire project into more modest achievements and give a sensible expense for each achievement. Two Shopify developers will be there-one
                                uphold the frontend, and the other will chip away at the venture and update you day by day. A committed Quality Analyst to audit the work done and keep a beware
                                of its exactness while following a project process.</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>


            <Footer />
        </div>
    )
}
