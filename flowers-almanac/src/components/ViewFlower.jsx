import './styles.css';
import flower from './images/flower.png';

function ViewFlower(){
    return(
        <div className='flower-info-container'>
            <img src={flower} alt="flower logo" />
            <p><span>Common Name</span>: Flower Common Name</p>
            <p><span>Scientific Name</span>: Flower Scientific Name</p>
        </div>
    );
}

export default ViewFlower;