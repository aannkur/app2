import React, { useState, useEffect } from 'react'
import "./Home.css"
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css';
import NavB from '../../Components/navbar'
import Footer from '../../Components/footer'
import react from "../../images/react-native.svg"
import android from "../../images/android.svg"
import apple from "../../images/apple.svg"
import node from "../../images/node-js.svg"
import php from "../../images/php.svg"
import shopify from "../../images/shopify.svg"
import wordpress from "../../images/wordpress.svg"
import people from "../../images/people.svg"
import doccument from "../../images/doccument.svg"
import time from "../../images/time.svg"
import development from "../../images/development.gif"
import seo from "../../images/seo.gif"
import API from "../../images/api.gif"
import years from "../../images/years.svg"
import desk from "../../images/desk.gif"
import { Button, Container, Row, Card, Col, Accordion } from 'react-bootstrap';
import Slider from 'react-slick'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {

  useEffect(() => {
    AOS.init({ once: true, });
    AOS.refresh();
  }, []);

  const [posts, setPost] = useState([])
  useEffect(() => {
    axios.get("https://aquatecinnovative.com/clone/wp-json/wp/v2/posts?per_page=13").then((response) => {
      setPost([response.data]);

    });
  }, []);

  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    axios.get("https://aquatecinnovative.com/clone/wp-json/wp/v2/portfolio?per_page=16").then((response) => {
      setPortfolio([response.data]);

    });
  }, []);

  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    axios.get("https://aquatecinnovative.com/clone/wp-json/wp/v2/testimonials").then((response) => {
      setTestimonials(response.data);

    });
  }, []);

  const responsive1 = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  const responsive2 = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  const settings1 = {
    responsive: responsive1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1
  }

  const settings2 = {
    response: responsive2,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1
  }

  return (
    <div className="bg-main">
      <NavB />
      <div>
        <header>
          <div className=' bg'>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white '>
                <h3 className='mb-3 mt-3'>WEB DEVELOPMENT COMPANY</h3>
                <h1 className='mb-3 mt-4'>We build websites with < br />
                  integrated SEO</h1>
                <h5 className='mb-3 mt-4'>Creating custom CMS solutions and CRM portals utilizing the <br />
                  latest technologies while providing fully-managed cloud services.</h5>
                <a className='btn btn-outline-light btn-lg mt-4' href='/portfolio' role='button'>
                  Browse Work
                </a>

              </div>
            </div>
          </div>
        </header>

        <div className="p-4">
          <Slider {...settings1}>
            <img src={apple} className="wh14"></img>
            <img src={android} className="wh14"></img>
            <img src={wordpress} className="wh14"></img>
            <img src={shopify} className="wh14"></img>
            <img src={php} className="wh14"></img>
            <img src={react} className="wh14"></img>
            <img src={node} className="wh14"></img>
          </Slider>
        </div>

        <div className='mt-5 mb-5'>
          <Container className="column">
            <h3 className="text-center black">OUR WORK</h3>
            <h1 className="text-center black">Our Project Delievery Status</h1>
            <h5 className="text-center black black-light">Get secret sauce for your success from expertise. Let’s work together to lays the foundation for future <br />
              business intelligence.</h5>
          </Container>
        </div>

        <Container className='center mb-5 mt-5 '>
          <Row >
            <div style={{ width: '12rem' }} data-aos="fade-up">
              <Card className="m-2 p-1 shadow border border-0 border-dark" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={time} className="wh80 center" />
                <Card.Body>
                  <Card.Title className="center">65K</Card.Title>
                  <Card.Text className="center-text">
                    Development Hours
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '12rem' }} data-aos="fade-up" data-aos-delay="200">
              <Card className="m-2 p-1 shadow border border-0 border-dark" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={doccument} className="wh80 center" />
                <Card.Body>
                  <Card.Title className="center">325+</Card.Title>
                  <Card.Text className="center-text">
                    Project Delivered

                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '12rem' }} data-aos="fade-up" data-aos-delay="400">
              <Card className="m-2 p-1 shadow border border-0 border-dark" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={years} className="wh80 center" />
                <Card.Body>
                  <Card.Title className="center">10</Card.Title>
                  <Card.Text className="center-text">
                    Years Of Experience
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '12rem' }} data-aos="fade-up" data-aos-delay="600">
              <Card className="m-2 p-1 shadow border border-0 border-dark" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={people} className="wh80 center" />
                <Card.Body>
                  <Card.Title className="center">25+</Card.Title>
                  <Card.Text className="center-text">
                    Developers Worldwide
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>


          </Row>
        </Container>

        <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">
          <Container className='center ' >
            <Card className="text-center navy-blue mb-5 p-3 radius-2rem">
              <Card.Body >
                <Card.Title><h3 className="white">- Established in 2007 -</h3></Card.Title>
                <Card.Text>
                  <h5 className="white">With clients ranging from Fortune 500 firms requiring detailed structures to boutique <br />
                    companies that need help developing their roadmap, no project is too big or too small.</h5>
                </Card.Text>
                <Card.Text>
                  <h6 className="white-light">100% committed to becoming a strategic partner for all your web services needs.</h6>
                </Card.Text>
                <Button variant="primary" style={{ width: "10rem" }}>Learn More</Button>
              </Card.Body>
            </Card>
          </Container>
        </div>

        <Container className="column mt-5 mb-5">
          <h3 className="text-center black">EMPOWER YOUR BUSINESS WITH THE <br />
            QUALITY-ORIENTED WEB DEVELOPMENT COMPANY</h3>
          <h5 className="text-center black black-light">The internet, design, eCommerce, and web marketing have evolved over time and we’ve developed with it. Since our <br />
            establishment, we’ve been providing an array of services. That include app & web development services to <br />
            our clients to expand their business and brand value online. Aquatec Innovative is a full-service organization with strong abilities in web <br />
            development, mobile app development and web designing. Being a leading web development company. We feel proud to hold <br />
            a proficient in-house team of programmers, developers, designers, and UI/UX experts. Our passionate and talented team has <br />
            expertise in a variety of advanced technologies and tools. Being a part of the IT industry, we enhance your digital presence <br />
            and make your business thrive at the core.</h5>
        </Container>

        <Container className="center mb-5">
          <Row className="row">
            <div style={{ width: '20rem' }} data-aos="fade-up-right" data-aos-duration="1000">
              <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={API} className="wh14 center" />
                <Card.Body>
                  <Card.Title className="center-text">API INTEGRATION SERVICES</Card.Title>
                  <Card.Text className="center-text">
                    At Aquatec Innovative, we offer robust API integration services to help organizations to grow and reduce barriers
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={desk} className="wh14 center" />
                <Card.Body>
                  <Card.Title className="center-text">WEB DEVELOPMENT SERVICES</Card.Title>
                  <Card.Text className="center-text">
                    Boost efficiency of your business and generate more revenue with custom web development services from Aquatec.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={development} className="wh14 center" />
                <Card.Body>
                  <Card.Title className="center-text">MOBILE APP DEVELOPMENT SERVICES</Card.Title>
                  <Card.Text className="center-text">
                    Our highly-experienced app developers develop professional user-centric applications for iOS and Android.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ width: '20rem' }} data-aos="fade-up-left" data-aos-delay="600" data-aos-duration="1000">
              <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={seo} className="wh14 center" />
                <Card.Body>
                  <Card.Title className="center-text">TECHNICAL SEO</Card.Title>
                  <Card.Text className="center-text">
                    We provide SEO consulting for your in-house developing team, enterprise-level SEO Audits and other search engine optimization solutions
                  </Card.Text>
                </Card.Body >
              </Card>
            </div>
          </Row>
        </Container>

        <div className="navy-blue">
          <Container className="center mb-5 ">
            <Row className=" p-5 wh100">
              <Col className='column'>
                <h1 className="white">FAQs</h1>
                <h6 className="white">Some of our general frequently asked questions about the web services we offer are
                  listed here. We pride ourselves on quick response times and look forward to exceeding
                  your expectations on a web project uniquely built for you!</h6>
                <h6 className="white">If you have a specific question in mind, feel free to use our <a href="/contact-us">contact page</a> to get in touch.</h6>
              </Col>
              <Col className='column'>
                <div data-aos="fade-up">
                  <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What CMS platform do you work with?</Accordion.Header>
                      <Accordion.Body>
                        While we are specialists using Craft CMS and WordPress, we can help with any CMS, including Joomla, Drupal, Ghost, Statamic, and others.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div data-aos="fade-up">
                  <Accordion className="mb-2">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How long does it take to see SEO results?</Accordion.Header>
                      <Accordion.Body>
                        While results can depend on each website's current state of authority and other metrics, don't be fooled by SEO sales tactics. Proper technical SEO implementations typically show positive results within 1-2 months.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div data-aos="fade-up">
                  <Accordion className="mb-2">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Do uou design logos?</Accordion.Header>
                      <Accordion.Body>
                        Yes, We design Logos, Buisness Cards, Illustrations and much more. Our in house Graphic designer is an expert in Adobe Photoshop , Adobe illustrtions etc.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div data-aos="fade-up">
                  <Accordion className="mb-2">
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Do you provide web hosting?</Accordion.Header>
                      <Accordion.Body>
                        Yes, absolutely! Our custom web servers are lightning fast for any Linux-based tech stack, can be tailored to specific processing needs, and come with many unique features.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div data-aos="fade-up">
                  <Accordion className="mb-2">
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>What's included in web maintainence?</Accordion.Header>
                      <Accordion.Body>
                        You can use support hours to resolve any performance or website issues, make website content updates, or for general consulting.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container className="column mt-5 mb-5">
            <h1 className="text-center black">Browse web projects</h1>
            <h5 className="text-center black ">Showcasing recent work and the strategies used to create better digital products.</h5>
          </Container>

          <Container className="center mb-5">
            {portfolio.map((item) => (
              <Row>
                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[0]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[0]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button as={Link} to="/machineReliability" variant="primary"  >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[1]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[1]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button variant="primary" as={Link} to="/stemx" >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[2]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[2]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button variant="primary" as={Link} to="/psh" >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[3]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[3]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button variant="primary" as={Link} to="/efw" >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[4]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[4]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button variant="primary" as={Link} to="/learnitnow" >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '24rem' }} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item[5]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[5]?.title?.rendered}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center">
                      <Button variant="primary" as={Link} to="/aybiz" >View Details</Button>
                    </Card.Footer>
                  </Card>
                </div>

              </Row>
            ))}
          </Container>
          <Container className="center">
            <Button as={Link} to="/portfolio" variant="primary" className="center mb-5 p-2" style={{ width: '8rem' }}>View Work</Button>
          </Container>
        </div>

        <div>
          <Container className="center mb-5 mt-5" >
            <Row className="wh100 center" style={{ width: '70rem' }}>
              <Col className='column'>
                <h1>Recent Insights</h1>
                <h6>Browse articles discussing the latest in all things web related.</h6>
              </Col>
              <Col className="center" xs lg="2">
                <Button as={Link} to="/blogs" variant="primary" className="center mb-5 p-2" style={{ width: '10rem' }}>View Articles</Button>
              </Col>
            </Row>
          </Container>

          <Container className="center mb-5">
            {posts.map((item) => (
              <Row>
                <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "21rem" }}>
                    <Card.Img variant="top" src={item[0]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[0]?.acf?.title_1}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center" style={{ width: '17rem' }}>
                      <Button variant="primary" as={Link} to="/shopifyCustomApp" >Read More</Button>
                    </Card.Footer>
                  </Card>
                </div>

                <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "21rem"}}>
                    <Card.Img variant="top" src={item[1]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[1]?.acf?.title_1}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center" style={{ width: '17rem' }}>
                      <Button variant="primary" as={Link} to="/shopifyAndSquare" >Read More</Button>
                    </Card.Footer>
                  </Card>
                </div>


                <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "21rem" }}>
                    <Card.Img variant="top" src={item[2]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[2]?.acf?.title_1}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center" style={{ width: '17rem' }}>
                      <Button variant="primary" as={Link} to="/graphQlVsRest" >Read More</Button>
                    </Card.Footer>
                  </Card>
                </div>


                <div style={{ width: '20rem' }} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <Card className='m-2 p-1 shadow border border-0 border-dark radius-1rem' style={{ width: '18rem', height: "21rem" }}>
                    <Card.Img variant="top" src={item[3]?.acf?.image_0?.url} className="maxwh center radius-1rem" />
                    <Card.Body>
                      <Card.Title className="center-text">
                        {item[3]?.acf?.title_1}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer as="Button" className="border-0 bg-white center" style={{ width: '17rem' }}>
                      <Button variant="primary" as={Link} to="/agencyOverFreelance">Read More</Button>
                    </Card.Footer>
                  </Card>
                </div>



              </Row>
            ))}
          </Container>
        </div>

        {/* <div className="center mb-5">
          <Row style={{ width: '90rem' }}>
            <Slider {...settings2} >
              {testimonials.map((item) => (
                <div className="p-5">
                  <Card className=' shadow border border-0 border-dark radius-1rem ' style={{ height: '11rem' }} >
                    <Card.Body>
                      <Card.Title className="justify-text">
                        {item?.acf?.reviews}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>-{item?.acf?.name}</Card.Footer>
                  </Card>
                </div>
              ))}
            </Slider>
          </Row>
        </div> */}

      </div>
      <Footer />
    </div >
  )
}

