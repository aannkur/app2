import React from 'react'
import "./DetailedBlog.css"
import Animation from '../Components/animation'
import { Row, Container } from 'react-bootstrap'
import Footer from '../Components/footer'
import { TiTick } from 'react-icons/ti';

export default function AgencyOverFreelance({ posts, isLoading }) {
    return isLoading ? (
        <Animation />
    ) : (
        <div>
            <div>
                <Container className=" mt7-7 mb-5 center wh100">
                    <div >
                        {posts.map((item, index) => {
                            { console.log(item, "items") }
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    <img className="center wh73 mt-5" src={item?.acf?.image_0?.url}></img>
                                    <h4 className=" bold7 mt-5">{item?.acf?.title_1}</h4>
                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className="  mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    {item?.acf?.description_1.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>


                <Container className=" mt-4 mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    <h1 className=" center bold7 ">{item?.acf?.title_2}</h1>
                                    <h4 className="center bold7 ">{item?.acf?.sub_title_2}</h4>
                                    {item?.acf?.description_2.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mt-4 mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                     <h4 className="center bold7 ">{item?.acf?.sub_title_3}</h4>
                                    {item?.acf?.description_3.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mt-4 mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    <h4 className=" center bold7 ">{item?.acf?.sub_title_4}</h4>
                                    {item?.acf?.description_4.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mt-4 mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                   <h4 className=" center bold7 ">{item?.acf?.sub_title_5}</h4>
                                    {item?.acf?.description_5.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mt-4 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    <h1 className="center bold7 ">{item?.acf?.title_6}</h1>
                                   
                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mb-5  " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    {item?.acf?.description_6.map((items) =>
                                     <h6 className="mb-2"><span ><TiTick />{items.para}</span></h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

                <Container className=" mt-4 mb-5 center " style={{ width: "73rem" }}>
                    <div >
                        {posts.map((item, index) => {
                            return item?.id == '6028' ? (
                                <div className=" column">
                                    <h4 className=" bold7 ">{item?.acf?.title_7}</h4>
                                    {item?.acf?.description_7.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}

                                </div>

                            ) : (
                                <><h1></h1></>
                            )
                        }
                        )}
                    </div>
                </Container>

            </div>
            <Footer />
        </div>
    )
}
