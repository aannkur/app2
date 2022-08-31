import React, { useState, useEffect } from 'react'
import "./Portfolio.css"
import axios from 'axios'
import NavB from '../../Components/navbar'
import Footer from '../../Components/footer'
import { Button, Container, Row, Card, Col, } from 'react-bootstrap';
import Animation from '../../Components/animation'
import { Link } from 'react-router-dom'

export default function Portfolio({ portfolio, isLoading }) {




  return isLoading ? (
    <Animation />
  ) : (
    <div className="bg-main ">
      <NavB />
      <div className='mt7'>
        <div >
          <Container className="column center">
            <h1 className="center mt-5 large">Web Projects</h1>
            <h6 className="center mb-5">Showcasing recent work and the strategies used to create better digital products.</h6>
          </Container>
        </div>

        <div>
          <Container className="center mb-5">
            <Row>
              {portfolio.map((item) => {
                return item ? (
                  <Col className="center mt-2 mb-2">
                    <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '17rem',  }}>
                      <Card.Img variant="top" src={item?.acf?.image_0?.url} className="maxwh center radius-1rem" style={{height: "12rem"}} />
                      <Card.Body>
                        <Card.Title className="center-text">
                          {item?.title?.rendered}
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer as="Button" className="border-0 bg-white center" style={{ width: '16rem',  }}>
                        <Button as={Link} to={"/portfolio/"+item?.id} variant="primary"  >View Details</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ) : (
                  <div>
                    <h1>error</h1>
                  </div>
                )
              }
              )}
            </Row>

          </Container>
        </div>
      </div>
      <Footer />
    </div >
  )
}
