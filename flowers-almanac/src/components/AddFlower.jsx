import './styles.css';
import {Button, Form} from 'react-bootstrap';
// import { useContext, useState } from 'react';
// import UserContext from './UserContext';
// import { useNavigate } from 'react-router-dom';

function AddFlower(){
    return(
        <div>
            <div>
                <Form className="form-container">
                    <Form.Group className="mb-3 form-item" controlId="formCommonName">
                        <Form.Label className='form-label'>Common Name of Flower</Form.Label>
                        <Form.Control type="text" placeholder="Enter the common name"  />
                    </Form.Group>
                    <Form.Group className="mb-3 form-item" controlId="formScientificName">
                        <Form.Label className='form-label'>Scientific Name of Flower</Form.Label>
                        <Form.Control type="text" placeholder="Enter the scientific name" />
                    </Form.Group>
                    <Form.Label className='form-label'>Upload Image</Form.Label>
                    <Form.Group className="mb-3 form-item drop-box" controlId="formImageUpload">
                        <p>Drag 'n' drop task files here, or click to select files</p>
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