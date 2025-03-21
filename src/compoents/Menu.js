
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

function Menu()
{

    const [menu] = useState([1,2,3,4,5,6]) 
    return(
        <section id="menu" className="text-light">
            <Container>
                <div className="text-center text-primary">
                    <h4>Treate Yourself with our Everyday Menu</h4>
                </div>
                <Row>

                    { menu.map((item) =>{
                        return(
                            <Col md={6} lg={4} key={item}>
                            <PizzaCard/>
                            </Col>)
                    })}
                   
                </Row>
            </Container>

        </section>
    )
}
export default Menu;