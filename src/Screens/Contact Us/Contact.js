import React, { useRef } from 'react'
import './Contact.css'
import NavB from '../../Components/navbar'
import Footer from '../../Components/footer'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import doc from '../../images/doc.svg'
import rocket from '../../images/rocket.svg'
import system from '../../images/system.svg'
import comment from '../../images/comment.svg'
import emailjs from "emailjs-com"

export default function Contact() {


    function refreshPage() {
        window.location.reload(false);
      }
      
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dz4405f', 'template_bs5std8', form.current, 'D3hGRq8_TQHKw9185')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className='mainbg'>
            <NavB />

            <Container className='center mt124 '>
                <Row className='wh100 mt-5 mb-5 row'>
                    <Col className=" column mt-5 mb-5 column">
                        <h1 className="black text4 ml3">Contact</h1>
                        <h6 className='black-light mt-2 ml3'>Let's create something amazing together!</h6>
                        <h6 className="black mt-2 ml3">If you're ready for fresh ideas, we're up for the challenge.</h6>
                        <h6 className="black mt-2 ml3">Help us learn about your project so we can create a successful strategy <br /> together.</h6>
                        <h6 className="black mt-2 ml3">Below is a general outline of our process. However, we strive on custom <br /> web projects tailored to your specific business needs.</h6>

                        <Container className='mt-3 p-3 shadow border border-0 border-dark radius-1rem bg-white' style={{ width: "34rem" }}>
                            <img src={comment} className="wh5"></img>
                            <h6 className="black mt-2 ml2">
                                First, we have a conversation and learn more about your website needs to make sure we're a great fit for each other.
                            </h6>
                        </Container>
                        <Container className='mt-3 p-3 shadow border border-0 border-dark radius-1rem bg-white' style={{ width: "34rem" }}>
                            <img src={doc} className="wh5"></img>
                            <h6 className="black mt-2 ml2">
                                After answering all your questions and concerns, we'll explore your industry, communicate our findings, and prepare an agreement for your review.
                            </h6>
                        </Container>
                        <Container className='mt-3 p-3 shadow border border-0 border-dark radius-1rem bg-white' style={{ width: "34rem" }}>
                            <img src={system} className="wh5"></img>
                            <h6 className="black mt-2 ml2">
                                Let the fun begin! You're involved at each step along the design and development process. Changes are expected along the way.
                            </h6>
                        </Container>
                        <Container className='mt-3 p-3 shadow border border-0 border-dark radius-1rem bg-white' style={{ width: "34rem" }}>
                            <img src={rocket} className="wh5"></img>
                            <h6 className="black mt-2 ml2">
                                Whether a fresh build or a migration, testing is critical to make sure nothing gets missed. Once you're 100% statisfied, we go live!
                            </h6>
                        </Container>
                    </Col>
                    <Col className=" mt-5 mb-5 column">
                        <Container className="shadow border border-0 border-dark radius-1rem mt-5">
                            <Form ref={form} className='center column mt-4 mb-4' onSubmit={sendEmail}>
                                <Row className="center " style={{ width: '40rem' }}>
                                    <Col className="column">
                                        <Form.Group className="mb-3 " controlId="formBasicName">
                                            <Form.Label for="name">Full Name</Form.Label>
                                            <Form.Control type="text" id="name" name='name' placeholder="John" />
                                        </Form.Group>
                                    </Col>
                                    <Col  className="column">
                                        <Form.Group className="mb-3">
                                            <Form.Label for ="technology">Select Technology</Form.Label>
                                            <Form.Select id="technology" name='technology'>
                                                <option>Web Development</option>
                                                <option>Web Design</option>
                                                <option>Mobile App Development</option>
                                                <option>Api Integration</option>
                                                <option>SEO</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="center " style={{ width: '40rem' }}>
                                    <Col  className="column">
                                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                                            <Form.Label for="email">Email address</Form.Label>
                                            <Form.Control id="email" name="email" type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col  className="column">
                                        <Form.Group className="mb-3 " controlId="formBasicNumber">
                                            <Form.Label for="phone">Phone</Form.Label>
                                            <Form.Control id="phone" name='phone' type="number-pad" placeholder="(+91) 0000000000" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="center " style={{ width: '40rem' }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label for="budget">Estimated budget</Form.Label>
                                        <Form.Select if="budget" name="budget">
                                            <option>$ 0-100</option>
                                            <option>$ 100-500</option>
                                            <option>$ 500-2000</option>
                                            <option>$ 2000-5000</option>
                                            <option>$ 5000 +</option>
                                            <option>Not Sure yet</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="center " style={{ width: '40rem' }}>
                                    <Form.Group className="mb-3 " controlId="formBasicRequirements">
                                        <Form.Label for="requirements">Requirements</Form.Label>
                                        <Form.Control id="requirements" name="requirements" as="textarea" aria-label="With textarea" />
                                    </Form.Group>
                                </Row>

                                {/* <Row className="center " style={{ width: '40rem' }}>
                                    <Form.Group controlId="formFileLg" className="mb-3">
                                        <Form.Label>Project Files</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>
                                </Row> */}

                                <Row className="center mt-4" style={{ width: '35rem' }}>
                                    <Button type='submit' variant='secondary' > 
                                        Request Quote
                                    </Button>
                                    {/* onClick={refreshPage} */}
                                </Row>
                                <Row className="center mt-4" style={{ width: '40rem' }}>
                                    <h6 className="black-light smallt">
                                        We'll only use the information you provide here to reply to your message. No marketing spam (ever) and your submission is fully encrypted.
                                    </h6>
                                </Row>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
