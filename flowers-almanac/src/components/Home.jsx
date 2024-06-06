import './styles.css';
import flower from './images/flower.png';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AddFlower from './AddFlower';
import ViewFlower from './ViewFlower';
import { useState } from 'react';

function Home(){
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
    const [isRandomBtnClicked, setIsRandomBtnClicked] = useState(false);

    const handleAddBtn = () => {
        setIsAddBtnClicked(!isAddBtnClicked);
        setIsRandomBtnClicked(false);
    }

    const handleRandomBtn = () => {
        setIsAddBtnClicked(false);
        setIsRandomBtnClicked(!isRandomBtnClicked);
    }

    return(
        <div>
            <h1 className="header">
                <img src={flower} alt="flower logo"/>
                Flowers Almanac
                <img src={flower} alt="flower logo"/>
            </h1>
            <Container className="btn-container">
                <Row className='btn-row'>
                    <Col>
                        <Button className='btn' variant="dark" size="lg" onClick={handleAddBtn}>Add Flower</Button>
                    </Col>
                    <Col>
                        <Button className='btn' variant="dark" size="lg" onClick={handleRandomBtn}>Random Flower</Button>
                    </Col>
                    <Col>
                        <Button className='btn' variant="dark" size="lg">Display Flowers</Button>
                    </Col>
                </Row>
            </Container>
            {isAddBtnClicked && <AddFlower />}
            {isRandomBtnClicked && <ViewFlower />}
        </div>
    );
}

export default Home;