import './styles.css';
import flower from './images/flower.png';
// import { useState, useEffect } from 'react';

// import {Button} from 'react-bootstrap';

function ViewFlower(props){

    return(
        <div className='flower-info-container'>
            {/* <Button className='btn' variant="dark" size="lg" onClick={fetchRandomFlower}>View</Button> */}
            <img src={flower} alt="flower logo" />
            <p><span>Common Name</span>: Flower Common Name</p>
            <p><span>Scientific Name</span>: Flower Scientific Name</p>
        </div>
    );
}

export default ViewFlower;