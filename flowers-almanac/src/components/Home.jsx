import './styles.css';
import flower from './images/flower.png';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AddFlower from './AddFlower';
import ViewFlower from './ViewFlower';
import { useState } from 'react';
import axios from 'axios';

function Home() {
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
    const [isRandomBtnClicked, setIsRandomBtnClicked] = useState(false);

    const handleAddBtn = () => {
        setIsAddBtnClicked(!isAddBtnClicked);
        setIsRandomBtnClicked(false);
    }

    const handleRandomBtn = async (e) => {
        setIsAddBtnClicked(false);
        setIsRandomBtnClicked(!isRandomBtnClicked);
        try {
            const response = await axios.get('https://eppyrzn88l.execute-api.us-east-1.amazonaws.com/build', {
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                }
            });
            console.log(response);
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    return (
        <div>
            <h1 className="header">
                <img src={flower} alt="flower logo" />
                Flowers Almanac
                <img src={flower} alt="flower logo" />
            </h1>
            <Container className="btn-container">
                <Row className='btn-row'>
                    <Col xs={6} md={3}>
                        <Button className='btn' variant="dark" size="lg" onClick={handleAddBtn}>Add Flower</Button>
                    </Col>
                    <Col xs={6} md={3}>
                        <Button className='btn' variant="dark" size="lg" onClick={handleRandomBtn}>Random Flower</Button>
                    </Col>
                    <Col xs={6} md={3}>
                        <Button className='btn' variant="dark" size="lg">Display Flowers</Button>
                    </Col>
                    <Col xs={6} md={3}>
                        <Button className='btn' variant="dark" size="lg">Upload Flower</Button>
                    </Col>
                </Row>
            </Container>
            {isAddBtnClicked && <AddFlower />}
            {isRandomBtnClicked && <ViewFlower isClicked={isRandomBtnClicked} />}
        </div>
    );
}

export default Home;
