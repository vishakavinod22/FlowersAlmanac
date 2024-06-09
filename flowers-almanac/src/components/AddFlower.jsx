import { useState } from 'react';
import './styles.css';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

// Component to add flower to the database
function AddFlower(){

    const [flowerData, setFlowerData] = useState({
        commonName: '',
        scientificName: ''
    });

    // Function is called when user enters data into the input fields of the form
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        // sets the common name entered by the user
        if(inputName === "commonName"){
            setFlowerData({
                ...flowerData,
                "commonName": inputValue
            });
            // sets the scientific name entered by the user
        } else if(inputName === "scientificName"){
            setFlowerData({
                ...flowerData,
                "scientificName": inputValue
            });
        }
    }

    // Function is called when user clicks the submit button
    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            const requestBody = {
                common_name: flowerData.commonName,
                scientific_name: flowerData.scientificName
            };
            // calling the API that will trigger the Add Flower Lambda Function
            axios.post('https://0ngvbvj23k.execute-api.us-east-1.amazonaws.com/build/addFlower', {body: JSON.stringify(requestBody)});
            alert('Flower added successfully.');
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
                    <Button className='form-btn' variant="dark" type="submit">
                        Add New Flower
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddFlower;