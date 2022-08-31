import React, { useEffect } from 'react'
import "./DetailedBlog.css"
import Animation from '../Components/animation'
import { Row, Container } from 'react-bootstrap'
import Footer from '../Components/footer'

export default function InhanseResponseTime({ posts, isLoading }) {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return isLoading ? (
        <Animation />
    ) : (
        <div>
            <div>
                <Container className=" mt7-7 mb-5 center wh100">
                    <div >
                        {posts.map((item, index) => {
                            { console.log(item, "items") }
                            return item?.id == '5520' ? (
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
                            return item?.id == '5520' ? (
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
                            return item?.id == '5520' ? (
                                <div className=" column">
                                    <h4 className=" bold7 red ">{item?.acf?.title_2}</h4>
                                    {item?.acf?.description_2.map((items) =>
                                        <h6 className="mb-4">{items.para}</h6>
                                    )}
                                    <h5 className=" red">{item?.acf?.text_1}</h5>
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
                            return item?.id == '5520' ? (
                                <div className=" column">
                                    <h4 className=" bold7 red">{item?.acf?.title_3}</h4>
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
                            return item?.id == '5520' ? (
                                <div className=" column">
                                    <h4 className=" bold7 red">{item?.acf?.title_4}</h4>
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
                            return item?.id == '5520' ? (
                                <div className=" column">
                                    <h4 className=" bold7 red">{item?.acf?.title_5}</h4>
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

              

            </div>
            <Footer />
        </div>
    )
}
