import './styles.css';
import flower from './images/flower.png';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import AddFlower from './AddFlower';
import ViewFlower from './ViewFlower';
import DisplayAllFlowers from './DisplayAllFlowers';
import DownloadCsv from './DownloadCsv';
import axios from 'axios';

function Home() {

    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
    const [isRandomBtnClicked, setIsRandomBtnClicked] = useState(false);
    const [isDisplayBtnClicked, setIsDisplayBtnClicked] = useState(false);
    const [isDownloadBtnDisplayed, setIsDownloadBtnDisplayed] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleAddBtn = () => {
        setIsAddBtnClicked(!isAddBtnClicked);
        setIsRandomBtnClicked(false);
        setIsDisplayBtnClicked(false)
        setIsDownloadBtnDisplayed(false);
    }

    const handleRandomBtn = () => {
        setIsAddBtnClicked(false);
        setIsRandomBtnClicked(!isRandomBtnClicked);
        setIsDisplayBtnClicked(false);
        setIsDownloadBtnDisplayed(false);
    }

    const handleDisplayBtn = () => {
        setIsAddBtnClicked(false);
        setIsRandomBtnClicked(false);
        setIsDisplayBtnClicked(!isDisplayBtnClicked);
        setIsDownloadBtnDisplayed(false);
    }

    const handleDownloadBtn = async(e) => {
        setDownloadUrl('');
        setIsAddBtnClicked(false);
        setIsRandomBtnClicked(false);
        setIsDisplayBtnClicked(false);
        setIsDownloadBtnDisplayed(!isDownloadBtnDisplayed);

        try {
            const response = await axios.get('https://0ngvbvj23k.execute-api.us-east-1.amazonaws.com/build/downloadFlowers');
            setDownloadUrl(response.data.body.url);
        } catch (error) {
            console.error('Error downloading file:', error);
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
                        <Button className='btn' variant="dark" size="lg" onClick={handleDisplayBtn}>Display Flowers</Button>
                    </Col>
                    <Col xs={6} md={3}>
                        <Button className='btn' variant="dark" size="lg" onClick={handleDownloadBtn}>Download Flowers</Button>
                    </Col>
                </Row>
            </Container>
            {isAddBtnClicked && <AddFlower />}
            {isRandomBtnClicked && <ViewFlower />}
            {isDisplayBtnClicked && <DisplayAllFlowers />}
            {isDownloadBtnDisplayed && <DownloadCsv url={downloadUrl} />}
        </div>
    );
}

export default Home;
