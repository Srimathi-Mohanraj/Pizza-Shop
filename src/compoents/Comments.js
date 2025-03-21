
import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Comments() {
    return (
        <section id="contact us">
            <Container>
                <div className="text-primary text-center my-3 py-2">
                    <h2 className="h1">Comments <i class="bi bi-chat-left-heart"></i></h2>
                </div>
                <div>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open"></i></InputGroup.Text>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email"

                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open"></i></InputGroup.Text>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"

                                    >
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </FloatingLabel>
                                </InputGroup>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Comments"
                                    className="mb-3"
                                >
                                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                                </FloatingLabel>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    )
}

export default Comments;