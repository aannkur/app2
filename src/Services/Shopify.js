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


export default function Shopify() {

    const [key, setKey] = useState('product');

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
       
    }

   
    return (
        <div>
            <NavB />

            <header>
                <div className=' bg-services mb-5'>
                    <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                        <h1 className="center bold6">Shopify Development Services</h1>
                        <h4 className="center red">Reliable Shopify e-Commerce solutions</h4>
                    </div>
                </div>
            </header>


            <Container className="mb-5">
                <Row>
                    <h4 className="bold7 red">Solid Shopify online business solutions</h4>
                    <h5 className="mt-3">Aquatec Innovative is a leading Shopify development firm that provides Shopify development services such
                        as bespoke Shopify eCommerce solutions, themes, API integration, and more.</h5>
                    <h5 className="mt-3">We have a dedicated in-house team of 10+ Shopify developers to provide diverse solutions,
                        from setting up a new site to improving the performance and functionality of an existing business.</h5>
                    <h5 className="mt-3">As a top Shopify development services supplier, our skilled team can create a comprehensive customized
                        Shopify eCommerce shop for businesses of all sizes.</h5>

                    <h1 className="centerItem center bold7 mt-5">We are EXPERT <span><img className='wh4 center' src={shopify}></img></span>
                        <span>shopify</span><span><h6 className='center text bold3 italic'>partner</h6></span></h1>
                </Row>
            </Container>

            <Container className="center">
                <div className="sepratorRed center wh100"></div>
            </Container>

            <Container className="mt-5">
                <Row>
                    <h5 className="mt-3">Get an e-commerce shop for all of your online business needs with our Shopify Development services. Our Shopify online business services
                        are designed to provide you with simple administration of items, content, and orders, allowing you to have complete control over your Shopify store.</h5>
                    <h5 className="mt-3">Hire Shopify developer for immediate assistance with your online retail site. We can assist you in creating a Shopify shop that will
                        aid you in launching and maintaining a profitable brand.</h5>
                    <h5 className="mt-3">Our Shopify website building team, with a broad range of eCommerce services, can aid our customers in developing distinctive online stores
                        to engage clients with their unique selling advice.</h5>
                    <h5 className="mt-3">As a reputable Shopify development company, we provide a full range of Shopify development services such as Shopify Online Store Setup and
                        Customization, Shopify Custom App Development, Customizing Existing Shopify Themes, PSD to Shopify Theme Development, Quality Analysis, Migration to Shopify from
                        other platforms, Shopify Plus Enterprise benefits, and Back-end Maintenance services.</h5>
                </Row>
            </Container>


            <Container className="mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <Col xs={5} className="center">
                        <img className='wh18 neg-mt6' src={circle}></img>
                        <div className="column neg-ml8 " >
                            <h1>Clear scope.</h1>
                            <h1>Predefined budget.</h1>
                            <h1>No surprises.</h1>
                        </div>
                    </Col>
                    <Col xs={5} className="column">
                        <h4 className="bold7 red">Everything You Need To Create And Maintain</h4>
                        <h4 className="bold7 red">A Shopify ECommerce Store</h4>
                        <h5 className="mt-3">To achieve professional results, choose an experienced Shopify eCommerce development company.</h5>
                        <h5 className="mt-3">We at The Aquatec Innovative assume full responsibility for Shopify development, playing a proactive
                            role through regular communication. So, consider twice before you hire Shopify developer.</h5>
                        <h5 className="mt-3 cursor">It requires a moment to Reach Us </h5>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 center">
                <Row className="">
                    <h1 className="mt-3 text-center bold7">Shopify Development Services</h1>
                    <h6 className="mt-5 mb-5  text-center">Explore the eCommerce services offered by our custom Shopify web <br /> development agency</h6>
                </Row>
            </Container>

            <Container className="center mt-5 mb-5">
                <div className="sepratorRed center wh100"></div>
            </Container>


            <Container className="center column">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3 mt-5 center "
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    justify
                    style={{ width: "80rem" }}
                >
                    <Tab eventKey="product" title={<span className="column"><img className='wh4 center' src={doccument} />"Shopify Setup & Product Import"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column">
                                <h1>Shopify Setup {"&"} Product Import</h1>
                                <h6>Our Shopify website creation services assist you with getting started with Shopify by installing custom themes,
                                    adding products, configuring installment/delivery doors, and providing enough guidance.</h6>
                                <h6>We provide an innovative and advanced environment for your online business store since we are familiar with the
                                    Shopify online business Platform.</h6>
                                <h6>The following services are provided:</h6>
                                <h6><span><TiTick />Free 30 days support & maintenance</span></h6>
                                <h6><span><TiTick />Keep up with Consistency in Store Database</span></h6>
                                <h6><span><TiTick />Complete site review with nitty-gritty announcing</span></h6>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="theme" title={<span className="column"><img className='wh4 center' src={doccument} />"Comprehensive Shopify Theme Development"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column">
                                <h1>Comprehensive Shopify Theme Development</h1>
                                <h6>Our innovative and energetic Shopify theme development company assists you with creating wonderful and engaging
                                    e-commerce business stores affordable.</h6>
                                <h6>We offer customer-centred design and a conversion-driven way to deal with converting your vision into the real world.</h6>
                                <h6>Our services include the following:</h6>
                                <h6><span><TiTick /> Convert PSD to a Shopify viable, responsive theme</span></h6>
                                <h6><span><TiTick /> Shopify Theme Customization to add custom features</span></h6>
                                <h6><span><TiTick />Mobile Centric Custom Theme Design & Layout</span></h6>
                                <h6><span><TiTick /> Offer any liquid theme customization</span></h6>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="app" title={<span className="column"><img className='wh4 center' src={doccument} />"
                        API Integration, Plug-In & Module Management"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column ">
                                <h1>Shopify App Development Company</h1>
                                <h6>Alongside our Shopify website development services, we likewise have some expertise in Shopify custom development
                                    of applications and additional product highlights that fit your requirements.</h6>
                                <h6>Our Shopify experts group can develop an application for the Shopify administrator, Shopify POS, or Shopify online store.</h6>
                                <h6>The Shopify web development company delivers the accompanying administrations:</h6>
                                <h6><span><TiTick /> </span></h6>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="api" title={<span className="column"><img className='wh4 center' src={doccument} />"Shopify Mobile App Development"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column">
                                <h1>API Integration, Plug-In & Module Management</h1>
                                <h6>At Aquatec Innovative, we offer you restrictive administrations to help you in managing product inventory and
                                    increment business deals transformations.</h6>
                                <h6>Our Shopify e-commerce based business solutions assist you with following the entire stock movement and deal with
                                    different Module Management arrangements, which assist you with remaining coordinated and staying away from exorbitant missteps.</h6>
                                <h6>Services offered are as follows:</h6>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="mobile" title={<span className="column"><img className='wh4 center' src={doccument} />"Shopify Support And Maintenance Services"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column">
                                <h1>Shopify Mobile App Development</h1>
                                <h6>We broaden our assistance in making profoundly versatile and custom portable customer-centric facades with Shopify
                                    Mobile App Development services.</h6>
                                <h6>We make a fast and simple-to-use Shopify Mobile App for your clients that offers an intelligent perusing experience
                                    while investigating your web-based business store.</h6>
                                <h6>We offer the accompanying administrations:</h6>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="supports" title={<span className="column"><img className='wh4 center' src={doccument} />"Shopify Setup & Product Import"</span>}>
                        <Row className="row">
                            <Col xs={5}>
                                <img className="center wh30" src={work}></img>
                            </Col>
                            <Col xs={5} className="center column">
                                <h1>Shopify Support And Maintenance Services</h1>
                                <h6>Our Shopify custom development service work with our customers with the best quality support and maintenance post
                                    finishing of the task.</h6>
                                <h6>Our custom Shopify development services stretch out its contributions to furnish you with handy solutions and the
                                    up-gradation of any work done by our Shopify specialists.</h6>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>


            <Container className="mt-5 mb-5">
                <Row className="mt-5 mb-5">
                    <Col xs={5} className="center">
                        <img className='wh18 neg-mt6' src={circle}></img>
                        <div className="column neg-ml8 " >
                            <h1>Our</h1>
                            <h1>Knowledge</h1>
                            <h1>Base</h1>
                        </div>
                    </Col>
                    <Col xs={5} className="column">
                        <Row style={{ width: '42rem' }}>
                            <Slider {...settings2} >
                                {posts.map((item) => (
                                    <div className="p-5">
                                        <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '16rem', height: "22rem" }}>
                                            <Card.Img variant="top" src={item?.yoast_head_json?.og_image[0]?.url} className="maxwh center radius-1rem" />
                                            <Card.Body>
                                                <Card.Title className="center-text">
                                                    {item?.title?.rendered}
                                                </Card.Title>
                                                <Card.Text className="center-text">
                                                    {item?.yoast_head_json?.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer as="Button" className="border-0 bg-white center"><Button variant="primary"  >Read More</Button></Card.Footer>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Container className="mt-5 center">
                <Row className="">
                    <h1 className="mt-3 mb-5 text-center bold7">How To Hire Our Shopify Experts: The Hiring Process</h1>
                    <Container className="center mt-5">
                        <div className="sepratorRed center wh100"></div>
                    </Container>
                    <h6 className="mt-3 mb-3  text-center">We provide flexible employment methods for the creation of Shopify stores.</h6>
                    <h6 className="mb-5  text-center">Hire Shopify developers from us, and we’ll keep you informed about the project’s progress, use a standardized <br />
                        approach to store development, and promise complete client pleasure.</h6>
                </Row>
            </Container>


            <Container className="column center">
                <Row className="row center" style={{ width: '62rem' }}>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 1</Button>
                        <h6 className="bold7">First, schedule a free consultation</h6>
                        <h6>If you are considering starting a business, you can schedule a free consultation with one of our Shopify professionals
                            via <span className='bold7'>Skype, Email</span> and other communication channels. We'll be in touch with you right away.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 2</Button>
                        <h6 className="bold7">Project Discussion in the second step</h6>
                        <h6>For a further project talk, one of our colleagues will get in touch with you at your convenient time. <br />
                            We will review your needs to ensure that we don't overlook any essential information.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 3</Button>
                        <h6 className="bold7">Terms & Conditions for Step three Finalization</h6>
                        <h6>After that, we will provide you with a detailed task suggestion with a realistic time estimate and cost
                            as well as more modest goals for the project's execution.</h6>
                    </Col>
                </Row>
                <Row className="row center" style={{ width: '40rem' }}>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 4</Button>
                        <h6 className="bold7">Step four - Delivery of the project</h6>
                        <h6>The best coding conventions are followed by our company's custom Shopify development team. <br />
                            We provide you with completely bug-free and well-tested projects.</h6>
                    </Col>
                    <Col className="column">
                        <img src={doccument} className='wh4 circleImg m-2'></img>
                        <Button variant="warning" disabled={true} className="m-2" style={{ width: "6rem" }}>Step 5</Button>
                        <h6 className="bold7">Shopify Step five - Maintenance and Support 30 days Support Duration</h6>
                        <h6>Our Shopify development services include a 30-day post-delivery support and maintenance period. <br />
                            You can extend this time by working with a Shopify developer.</h6>
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


            <Container className="mt-5 center column mb-5" style={{ width: "60rem"}}>
                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>The number of colleagues will be allocated to the projects, and what will be their roles on my project?</Accordion.Header>
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
