import { useState, useEffect } from "react";
import { Col, Row, Card, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export function PizzaHome() {
    const [data, setData] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setFetchPending(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get("https://pizza.kando-dev.eu/Pizza");
                const result = response.data;

                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setFetchPending(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center align-items-center">
                {isFetchPending ? (
                    <Col className="text-center">
                        <Spinner animation="border" role="status" className="mb-3">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <p>Loading...</p>
                    </Col>
                ) : (
                    data.map((pizza) => (
                        <Col key={pizza.id}>
                            <Card>
                                <NavLink key={pizza.id} to={"/pizza/" + pizza.id}>
                                    <Card.Img className="picture" variant="top" src={pizza.kepURL} alt={pizza.name} />
                                </NavLink>
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                    <Card.Text>
                                        {pizza.isGlutenFree ? "Gluten-free" : "Not gluten-free"}    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
}