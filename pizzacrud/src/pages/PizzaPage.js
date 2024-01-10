import { useState, useEffect } from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PizzaPage() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.pizzaId;
    const [pizza, setPizza] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await axios.get(`https://pizza.kando-dev.eu/Pizza/${id}`);
                const pizza = await response.data;

                setPizza(pizza);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setPending(false);
            }
        };

        fetchData();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://pizza.kando-dev.eu/Pizza/${pizza.id}`);
            navigate("/");
        } catch (error) {
            console.error("Error deleting pizza:", error);
        }
    }

    return(
        <div className="p-5 m-auto text-center content bg-ivory">
            {
                isPending || !pizza.id ? (
                <Col className="text-center">
                    <Spinner animation="border" role="status" className="mb-3">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p>Loading...</p>
                </Col>
            ) : (
                    <div>
                            <Card key={pizza.id}>
                                <Card.Img className="picture" variant="top" src={pizza.kepURL} alt={pizza.name} />
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                    <Card.Text>
                                        {pizza.isGlutenFree ? "Gluten-free" : "Not gluten-free"}

                                        <br/>

                                        <NavLink to={`/edit-pizza/${pizza.id}`}>
                                            <i className="bi bi-pencil"></i>
                                        </NavLink>

                                        <button onClick={() => handleDelete(pizza.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </div>
                )
            }
        </div>
    );
}