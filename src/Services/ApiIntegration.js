import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import NavB from '../Components/navbar'
import Footer from '../Components/footer'

import Animation from '../Components/animation'


export default function ApiIntegration({ services, isLoading }) {
    return isLoading ? (
        <Animation />
    ) : (
        <div>
            < div >
                <header>

                    <div className=' bg-services mb-5'>
                        <Row>
                            {services.map((item, index) => (
                                <div className='center mt-5 column' style={{ width: '35.2rem', height: '20.2rem' }}>
                                    <h1 className="center bold7">{item[23]?.acf?.heading}</h1>
                                </div>
                            ))}
                        </Row>
                    </div>

                </header>

                <Container className="mt-5 mb-5 w7">
                    <Row className="column mt-5">
                        {services.map((item, index) => (
                            <div>
                                {item[23]?.acf?.description_1.map((items) => (
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
                                    <h4>{item[23]?.acf?.title_2}</h4>
                                    {item[23]?.acf?.description_2.map((items) => (
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
                                    <img src={item[23]?.acf?.image_1?.url} className="whimg center"></img>
                                </div>

                            ))}
                        </Col>

                    </Row>
                </Container>

                <Container className="mt-5 mb-5 w7">
                    <Row className="row">
                        <Col className="column">
                            {services.map((item, index) => (
                                <div>
                                    <img src={item[23]?.acf?.image_2?.url} className="whimg center"></img>
                                </div>

                            ))}
                        </Col>
                        <Col className="column">
                            {services.map((item, index) => (
                                <div>
                                    <h4>{item[23]?.acf?.title_3}</h4>
                                    {item[23]?.acf?.description_3.map((items) => (
                                        <div>
                                            {items?.para}
                                        </div>
                                    ))}
                                </div>

                            ))}
                        </Col>

                    </Row>
                </Container>
            </div >
            <Footer />
        </div >
    )
}
