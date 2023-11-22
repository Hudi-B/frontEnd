import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const Pizzas = () => {
  const [isFetchPending, setFetchPending] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchPending(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await fetch('https://pizza.kando-dev.eu/Pizza');
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setFetchPending(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='text-center'>

      <h1>Pizzák</h1>

      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center align-items-center">
        {isFetchPending ? (
          <Col className="text-center">
            <Spinner animation="border" role="status" className="mb-3">
              <span className="visually-hidden">Betoltes...</span>
            </Spinner>
            <p>Betoltes...</p>
          </Col>
        ) : (
          data.map(pizza => (
            <Col key={pizza.id}>
              <Card>
                <Card.Img className='picture' variant="top" src={pizza.kepURL} alt={pizza.name} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                  <Card.Text>
                    {pizza.isGlutenFree ? 'Gluten mentes' : 'Nem gluten mentes'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Pizzas;
