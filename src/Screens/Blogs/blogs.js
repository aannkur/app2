import React, { useEffect, useState } from 'react'
import "./blogs.css"
import axios from 'axios'
import NavB from '../../Components/navbar'
import Footer from '../../Components/footer'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link, useNavigate, generatePath } from 'react-router-dom'
import Animation from '../../Components/animation'

export default function Blogs({ posts, isLoading }) {

    const [id, setId] = useState();

    const [key, setKey] = useState('all');

    return isLoading ? (
        <Animation />
    ) : (
        <div className='bg-main'>
            <NavB />
            < div >
                <header>
                    <div className="bg-blog">
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white mt-5'>
                                <h1 className='mt-5'>Explore Our Articles</h1>
                                <div className="sepratorsmall"></div>
                            </div>
                        </div>
                    </div>
                </header>

                <div>
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
                            <Tab eventKey="all" title="All" >
                                <div>
                                    <Container className="center wh100 mt-5 mb-5">
                                        <Row className="center ">
                                            {posts.map((item) => (
                                                <Col className="center mt-2 mb-2">
                                                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "22rem" }}>
                                                        <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{ height: '10rem' }} />
                                                        <Card.Body>
                                                            <Card.Title className="center-text">
                                                                {item?.title?.rendered}
                                                            </Card.Title>

                                                            <Card.Text >
                                                                <h6 className="text-justify">{item?.acf?.mini_title}</h6>
                                                            </Card.Text>

                                                        </Card.Body>
                                                        <Card.Footer className="border-0 bg-white center">
                                                            <Button as={Link} to={"/blogs/"+item?.id} variant="primary"  >Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                            <Tab eventKey="life at aquatecinnovative" title="LIFE AT AQUATEC INNOVATIVE">
                                <div>
                                <Container className="center wh100 mt-5 mb-5">
                                        <Row className="center ">
                                            {posts.map((item) => (
                                                <Col className="center mt-2 mb-2">
                                                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "22rem" }}>
                                                        <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{ height: '10rem' }} />
                                                        <Card.Body>
                                                            <Card.Title className="center-text">
                                                                {item?.title?.rendered}
                                                            </Card.Title>

                                                            <Card.Text >
                                                                <h6 className="text-justify">{item?.acf?.mini_title}</h6>
                                                            </Card.Text>

                                                        </Card.Body>
                                                        <Card.Footer className="border-0 bg-white center">
                                                            <Button as={Link} to="/devMasters" variant="primary"  >Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                            <Tab eventKey="mobile" title="MOBILE APP DEVELOPMENT">
                                <div>
                                <Container className="center wh100 mt-5 mb-5">
                                        <Row className="center ">
                                            {posts.map((item) => (
                                                <Col className="center mt-2 mb-2">
                                                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "22rem" }}>
                                                        <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{ height: '10rem' }} />
                                                        <Card.Body>
                                                            <Card.Title className="center-text">
                                                                {item?.title?.rendered}
                                                            </Card.Title>

                                                            <Card.Text >
                                                                <h6 className="text-justify">{item?.acf?.mini_title}</h6>
                                                            </Card.Text>

                                                        </Card.Body>
                                                        <Card.Footer className="border-0 bg-white center">
                                                            <Button as={Link} to="/devMasters" variant="primary"  >Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                            <Tab eventKey="shopify" title="SHOPIFY">
                                <div>
                                <Container className="center wh100 mt-5 mb-5">
                                        <Row className="center ">
                                            {posts.map((item) => (
                                                <Col className="center mt-2 mb-2">
                                                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "22rem" }}>
                                                        <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{ height: '10rem' }} />
                                                        <Card.Body>
                                                            <Card.Title className="center-text">
                                                                {item?.title?.rendered}
                                                            </Card.Title>

                                                            <Card.Text >
                                                                <h6 className="text-justify">{item?.acf?.mini_title}</h6>
                                                            </Card.Text>

                                                        </Card.Body>
                                                        <Card.Footer className="border-0 bg-white center">
                                                            <Button as={Link} to="/devMasters" variant="primary"  >Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                            <Tab eventKey="web" title="WEB DEVELOPMENT">
                                <div>
                                <Container className="center wh100 mt-5 mb-5">
                                        <Row className="center ">
                                            {posts.map((item) => (
                                                <Col className="center mt-2 mb-2">
                                                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "22rem" }}>
                                                        <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{ height: '10rem' }} />
                                                        <Card.Body>
                                                            <Card.Title className="center-text">
                                                                {item?.title?.rendered}
                                                            </Card.Title>

                                                            <Card.Text >
                                                                <h6 className="text-justify">{item?.acf?.mini_title}</h6>
                                                            </Card.Text>

                                                        </Card.Body>
                                                        <Card.Footer className="border-0 bg-white center">
                                                            <Button as={Link} to="/devMasters" variant="primary"  >Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                        </Tabs>
                    </Container>
                </div>
            </div >
            <Footer />
        </div >
    )
}
