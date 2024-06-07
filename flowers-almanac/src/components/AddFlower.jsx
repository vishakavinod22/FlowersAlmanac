import { useState } from 'react';
import './styles.css';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
// import { useContext, useState } from 'react';
// import UserContext from './UserContext';
// import { useNavigate } from 'react-router-dom';

function AddFlower(){

    const [flowerData, setFlowerData] = useState({
        commonName: '',
        scientificName: ''
    });

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        if(inputName === "commonName"){
            setFlowerData({
                ...flowerData,
                "commonName": inputValue
            });
        } else if(inputName === "scientificName"){
            setFlowerData({
                ...flowerData,
                "scientificName": inputValue
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestBody = {
                common_name: flowerData.commonName,
                scientific_name: flowerData.scientificName
            };
            await axios.post('https://yzle8hyh6h.execute-api.us-east-1.amazonaws.com/build/add', {body: JSON.stringify(requestBody)});
            // alert('Flower added successfully!');
            // Optionally, clear the form fields after successful submission
            setFlowerData({
                commonName: '',
                scientificName: ''
            });
        } catch (error) {
            console.error('Error adding flower:', error);
            alert('Failed to add flower. Please try again later.');
        }
    };

    return(
        <div>
            <div>
                <Form className="form-container" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 form-item" controlId="formCommonName">
                        <Form.Label className='form-label'>Common Name of Flower</Form.Label>
                        <Form.Control 
                            name="commonName"
                            type="text" 
                            placeholder="Enter the common name" 
                            onChange={handleInputChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3 form-item" controlId="formScientificName">
                        <Form.Label className='form-label'>Scientific Name of Flower</Form.Label>
                        <Form.Control 
                            name="scientificName"
                            type="text"
                            placeholder="Enter the scientific name"
                            onChange={handleInputChange} />
                    </Form.Group>
                    {/* <Form.Label className='form-label'>Upload Image</Form.Label>
                    <Form.Group className="mb-3 form-item drop-box" controlId="formImageUpload">
                        <p>Drag 'n' drop task files here, or click to select files</p>
                    </Form.Group> */}
                    <Button className='form-btn' variant="dark" type="submit">
                        Add New Flower
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddFlower;