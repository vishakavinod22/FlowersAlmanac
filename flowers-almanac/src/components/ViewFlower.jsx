import './styles.css';
import { Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function ViewFlower(){

    const [isGenerate, setIsGenerate] = useState(false);
    const [flowerData, setFlowerData] = useState({
        commonName: '',
        scientificName: ''
    });

    const generateRandomFlower = async(e) => {
        setIsGenerate(true);
        try {
            const response = await axios.get('https://0ngvbvj23k.execute-api.us-east-1.amazonaws.com/build/fetchRandom');
            setFlowerData({
                commonName: response.data.body.commonName,
                scientificName: response.data.body.scientificName
            });
            
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    return(
        <div className='flower-info-container'>
            {isGenerate ? 
            <div>
                <p><span>Common Name</span>:</p> <p>{flowerData.commonName}</p>
                <p><span>Scientific Name</span>:</p> <p>{flowerData.scientificName}</p> 
            </div>
            : <p>Click button to generate!</p>}
            <Button className='btn' variant="dark" onClick={generateRandomFlower}>Generate</Button>
        </div>
    );
}

export default ViewFlower;