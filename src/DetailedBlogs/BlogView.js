import React, { useEffect }from 'react'
import "./DetailedBlog.css"
import Animation from '../Components/animation'
import { TiTick } from 'react-icons/ti'
import { Container, Row, Col, } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export default function BlogsView({ posts, isLoading }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const parms = useParams();
    const { id } = parms

    return isLoading ? (
        <Animation />
    ) : (
        <div className="mt7-7 " >
            {posts.map((item) => {
                return id == item?.id ? (
                    <Container className=" mt7-7 mb-5 center wh100 column">
                        <div className="center column">
                            <img className="center wh73 mt-5 " src={item?.acf?.image_0?.url}></img>
                        </div>
                        <div className=" column">
                            <h2 className=" bold7 mt-5">{item?.acf?.title_1}</h2>
                        </div>
                        <div className=" column">
                            {item?.acf?.description_1.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            )}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_2 ? (
                                    <h4>{item?.acf?.title_2}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                        </div>
                        <div className=" column">
                            {item?.acf?.description_2 ? item?.acf?.description_2.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_3 ? (
                                    <h4>{item?.acf?.title_3}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_3 ? item?.acf?.description_3.map((items) => {
                                return items || items == "true" ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_3 ? (
                                    <h4>{item?.acf?.title_3}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_3 ? item?.acf?.description_3.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.image_1 ? (
                                    <img className="wh63" src={item?.acf?.image_1?.url}></img>
                                ) : (
                                    <div></div>
                                )
                            })}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_5 ? (
                                    <h4>{item?.acf?.title_5}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_5 ? item?.acf?.description_5.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.image_2 ? (
                                    <img className="wh73" src={item?.acf?.image_2?.url}></img>
                                ) : (
                                    <div></div>
                                )
                            })}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_6 ? (
                                    <h4>{item?.acf?.title_6}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_6 ? item?.acf?.description_6.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.image_3 ? (
                                    <img className="wh73" src={item?.acf?.image_3?.url}></img>
                                ) : (
                                    <div></div>
                                )
                            })}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_7 ? (
                                    <h4>{item?.acf?.title_7}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_7 ? item?.acf?.description_7.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.image_4 ? (
                                    <img className="wh73" src={item?.acf?.image_4?.url}></img>
                                ) : (
                                    <div></div>
                                )
                            })}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_8 ? (
                                    <h4>{item?.acf?.title_8}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_8 ? item?.acf?.description_8.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_9 ? (
                                    <h4>{item?.acf?.title_9}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_9 ? item?.acf?.description_9.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                        <div className=" column">
                            {posts.map((item) => {
                                return id == item?.id && item?.acf?.title_10 ? (
                                    <h4>{item?.acf?.title_10}</h4>
                                ) : (
                                    <div></div>
                                )
                            })}
                            {item?.acf?.description_10 ? item?.acf?.description_10.map((items) => {
                                return items ? (
                                    <h6 className="mb-2">{items.para}</h6>
                                ) : (
                                    <div></div>
                                )
                            }
                            ) : ""}
                        </div>
                    </Container>
                ) : (
                    <div></div>
                )
            }
            )}
        </div>
    )
}
