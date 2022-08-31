import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TiTick } from 'react-icons/ti'
import Animation from '../Components/animation'
import Footer from '../Components/footer'
import "./portfoliodetails.css"
import { Carousel } from 'react-bootstrap'

export default function EFW({ isLoading, portfolio }) {
    return isLoading ? (
        <Animation />
    ) : (
        <div className="mt7-7">
            <Container className='center '>
                {portfolio.map((item) => {
                    return item?.id == '6063' ? (
                        <div>
                            <h1 className="center bold7 mt-5">{item?.acf?.heading}</h1>
                        </div>
                    ) : (
                        <div><h1></h1></div>
                    )
                })}
            </Container>
            <Container>
                <div className="sepratorhead"></div>
            </Container>

            <Container className=" mt-5 p-5">
                <Row className="row">
                    <Col className="column">
                        {portfolio.map((item) => {
                            return item?.id == '6063' ? (
                                <div>

                                    <Carousel
                                        interval={2000} fade={true}
                                    >
                                        {item?.acf?.image_slider.map((image) => (
                                            <Carousel.Item>
                                                <img src={image?.img?.url} className="wh40"></img>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>

                                </div>
                            ) : (
                                <div></div>
                            )
                        })}
                    </Col>
                    <Col className="column" >
                        <h4 className="red bold7 mb-4">Project Details</h4>
                        {portfolio.map((item) => {
                            return item?.id == '6063' ? (
                                <div>
                                    <h5>CATEGORY:{" "}<span className='ml1 small1'>{item?.acf?.category}</span></h5>
                                    <div className="sepratorbody mt-5 mb-5"></div>

                                    {
                                        item?.acf?.high_resolution ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column">
                                                        <h5>High Resolution:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.high_resolution}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    {
                                        item?.acf?.technologies ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column">
                                                        <h5>Technologies:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.technologies}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    {
                                        item?.acf?.files_included ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column">
                                                        <h5>Fields Included:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.files_included}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    {
                                        item?.acf?.layout ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column">
                                                        <h5> Layout:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.layout}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    {
                                        item?.acf?.tags ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column " >
                                                        <h5 > Tags:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.tags}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    {
                                        item?.acf?.url ? (
                                            <div>
                                                <Row className="row">
                                                    <Col className="column " >
                                                        <h5 >URL:</h5>
                                                    </Col>
                                                    <Col className="column">
                                                        <h6 className="ml1 small1">{item?.acf?.url}</h6>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}


                                </div>
                            ) : (
                                <div></div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>

            <Container >
                <Row style={{ width: '50rem' }}>
                    {portfolio.map((item) => {
                        return item?.id == '6063' ? (
                            <div>

                                {item?.acf?.title_1 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_1}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_1.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}

                                {item?.acf?.title_2 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_2}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_2.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}


                                {item?.acf?.title_3 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_3}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_3.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}

                                {item?.acf?.title_4 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_4}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_4.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}

                                {item?.acf?.title_5 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_5}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_5.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}

                                {item?.acf?.title_6 ? (
                                    <h4 className="red mt-3 mb-3">{item?.acf?.title_6}</h4>
                                ) : (
                                    <div></div>
                                )}


                                {item?.acf?.description_6.map((items) => {
                                    return items ? (
                                        <h6 className=" small1">{items.para}</h6>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                )}

                            </div>
                        ) : (
                            <div></div>
                        )
                    })}
                </Row>
            </Container>


            <Container className="mb-5">
                <div className="sepratorhead mb-5 mt-5"></div>
            </Container>

            <Footer />
        </div>
    )
}
