import React from 'react'
import "./DetailedBlog.css"
import Animation from '../Components/animation'
import { Row, Container } from 'react-bootstrap'
import Footer from '../Components/footer'
import { TiTick } from 'react-icons/ti';

export default function Christmass({ posts, isLoading }) {
    return isLoading ? (
        <Animation />
    ) : (
        <div>
            <div>
                <Container className=" mt7-7 mb-5 center wh100">
                    <div >
                        {posts.map((item, index) => {
                            { console.log(item, "items") }
                            return item?.id == '6010' ? (
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
                            return item?.id == '6010' ? (
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


                
                
            </div>
            <Footer />
        </div>
    )
}
