import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";

function PickoftheWeek()
{

    const [show, setShow] = useState(true);
    return(
        <div>

        {/* Must try */}

            <section id="must try">
                <div className="text-center my-3 ps-2">
                <h2 className="h1 text-primary "><i class="bi bi-search-heart"></i> Pick Of the Week!</h2>
                </div>
               <Container>
                <Row className="align-items-center">
                    <Col md={7} >
                 <Image src={require('../assest/center.jpeg')}fluid={true} alt='center'></Image>
                    </Col>
                    <Col md={5} >
                    <div className="my-2 p-2">

                    <h2 className="h1">Douable Cheese Fajita</h2>
                    <p className="lead text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A expedita ipsa quidem, tempora repellendus.</p>
                       
                        <Button variant='primary  ' onClick={() => setShow(true)}  ><i class="bi bi-cart-dash"></i> Buy Now</Button>
                    </div>
                    </Col>
                    </Row>
                    {/* Toast Meassage */}
<ToastContainer
         className="p-3 position-fixed bottom-0 end-0 "
          position= 'bottom-end'
          style={{ zIndex: 1 }}
        
        >
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Your Item added</Toast.Body>
          </Toast>
        </ToastContainer>
               </Container>
            </section>
        </div>
    )
}
export default PickoftheWeek;