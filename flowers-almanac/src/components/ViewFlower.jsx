import './styles.css';
import { Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function ViewFlower(props){

    const [flowerData, setFlowerData] = useState({
        commonName: 'Rose',
        scientificName: 'Rosa'
    });

    const generateRandomFlower = async(e) => {
        try {
            const response = await axios.get('https://0ngvbvj23k.execute-api.us-east-1.amazonaws.com/build/fetchRandom');
            setFlowerData({
                commonName: response.data.body.commonName,
                scientificName: response.data.body.scientificName
            });
            console.log(flowerData);
            
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    return(
        <div className='flower-info-container'>
            <p><span>Common Name</span>:</p> <p>{flowerData.commonName}</p>
            <p><span>Scientific Name</span>:</p> <p>{flowerData.scientificName}</p>
            <Button className='btn' variant="dark" onClick={generateRandomFlower}>Generate</Button>
        </div>
    );
}

export default ViewFlower;