import React, { useEffect, useState } from 'react'
import "./AboutUs.css"
import Animations from '../../Components/animation'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../../Components/footer'


export default function AboutUs({ services, isLoading }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return isLoading ? (
    <Animations />
  ) : (
    <div className="mt7-7 mainbg">
      <div>
        <Container className=" mt-5 mb-5">
          <Row className="row">
            <Col xs={8} className="column mt-5 mb-5" >
              <h1>ABOUT US</h1>
              <h3 className="mt-3">Who can we help?</h3>
              <h6>Aquatec Innovative can help startups, scale-ups, and large enterprises build transformative products & platforms that evolve their business. We’re the trusted partner you can count on for future-forward apps and websites. We have been delivering full-suite design, development solutions to startups, growing companies, and tech giants for bridging their ideas to fruition. We have been assisting worldwide clients in becoming high-performance businesses.</h6>
              <h3>Our Process</h3>
              <h4 className="red mt-5">We use agile methodologies to offer offshore and onshore solutions like</h4>
              <h6>Responsive, scalable web applications.</h6>
              <h6>Native & Hybrid Mobile Apps.</h6>
              <h6>Digital Marketing.</h6>
              <h6>We implement an agile approach to discover, define, design, deploy, and deliver bespoke solutions to our global clients. We provide flawless and transformative solutions to our clients by upholding high standards of principles in our work values.</h6>
              <h3 className="mt-5">Perks of choosing Aquatec Innovative</h3>
              <h6>Our highly-experienced team delivers high-quality work that exceeds client’s expectations.</h6>
              <h6>Our diverse culture drives success to our global customers that supports long-term business relationships.</h6>
              <h6>At Aquatec Innovative, we’ve been providing our valuable clients with exceptional IT solutions and support.</h6>
              <h6>To meet our clients demands, our creative and innovative team of developers, designers adopt the latest technologies.</h6>
            </Col>
            <Col xs={2} className="column mt-5 mb-5" >
              <Card className='m-2 p-2 shadow border border-0 border-dark radius-1rem' style={{ width: '20rem', height: "10rem" }}>
                <Card.Img />
                <Card.Body>
                  <Card.Title className="center-text ">
                    OUR MISSION
                  </Card.Title>
                  <Card.Text className="justify-text ">
                    The mission of Aquatec Innovative is to provide user-centric, cost-competitive IT solutions to its valuable clients.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='m-2 p-2 shadow border border-0 border-dark radius-1rem' style={{ width: '20rem', height: "12rem" }}>
                <Card.Img />
                <Card.Body>
                  <Card.Title className="center-text ">
                    OUR VISION
                  </Card.Title>
                  <Card.Text className="justify-text ">
                    To keep pace with the cutting-edge technology that empower businesses while giving us the chance to be a globally recognized software development company.                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='m-2 p-2 shadow border border-0 border-dark radius-1rem' style={{ width: '20rem', height: "10rem" }}>
                <Card.Img />
                <Card.Body>
                  <Card.Title className="center-text ">
                    OUR STRATEGY
                  </Card.Title>
                  <Card.Text className="justify-text ">
                    We believe in building a strong business model, delivering tangible results, and solving real-world business problems.                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
