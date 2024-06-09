import './styles.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// Component that displays all the flowers
function DisplayAllFlowers(){

    const [flowerData, setFlowerData] = useState([]);

    useEffect(() => {
        const fetchFlowers = async () => {
            try {
                // calling the API that will trigger the Get all Flowers Lambda Function
                const response = await axios.get('https://0ngvbvj23k.execute-api.us-east-1.amazonaws.com/build/getAllFlowers');
                const data = JSON.parse(response.data.body);
                setFlowerData(data);
            } catch (error) {
                console.error('Error fetching flowers:', error);
            }
        };

        fetchFlowers();
    }, []);

    console.log(flowerData);

    return(
        <Container>
            <Row>
                {flowerData.map(flower => (
                    <Col xs={12} md={6} lg={4} key={flower.id} className='flower-info-container'>
                        <div>
                            <p><span>Common Name</span>: {flower.common_name}</p>
                            <p><span>Scientific Name</span>: {flower.scientific_name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default DisplayAllFlowers;