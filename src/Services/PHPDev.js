import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'
import PHP from "../images/phpo.svg"
import api from "../images/api.svg"
import { TiTick } from 'react-icons/ti';



export default function PHPDev({ services, isLoading }) {
    return (
        <div>
            < div >
                <header>

                    <div className=' bg-services mb-5'>
                        {services.map((item, index) => (
                            <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                                <h1 className="center bold7">{item[22]?.acf?.heading}</h1>
                            </div>
                        ))}
                    </div>

                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        {services.map((item, index) => (
                            <div>
                                <h4>{item[22]?.acf?.title_1}</h4>
                                {item[22]?.acf?.description_1.map((items) => (
                                    <div>
                                        {items?.para}
                                    </div>
                                ))}
                            </div>

                        ))}
                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            {services.map((item, index) => (
                                <div>
                                    <h4>{item[22]?.acf?.title_2}</h4>
                                    {item[22]?.acf?.description_2.map((items) => (
                                        <div>
                                            <span><TiTick />{items?.para}</span>
                                        </div>
                                    ))}
                                    {item[22]?.acf?.description_3.map((items) => (
                                        <div>
                                            {items?.para}
                                        </div>
                                    ))}
                                </div>

                            ))}
                        </Col>
                        <Col className="column">
                            {services.map((item, index) => (
                                <div>
                                    <img src={item[22]?.acf?.image_1?.url} className="whimg center"></img>
                                </div>

                            ))}
                        </Col>

                    </Row>
                </Container>


            </div >
            <Footer />
        </div>
    )
}
