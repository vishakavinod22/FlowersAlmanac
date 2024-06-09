import { useState } from 'react';
import './styles.css';
import { Button} from 'react-bootstrap';

// Component that downloads the CSV
function DownloadCsv(props){
    const [isDownload, setIsDownload] = useState(false);
    const [message, setMessage] = useState('');

    //Function that downloads the csv file from the s3 bucket after user clicks download
    const handleDownload = () => {
        try {
            // props.url is passed from Home.jsx that calls the API that will trigger the Download Flower Lambda Function
            const url = props.url;
    
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'flowers.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsDownload(true);
            setMessage('File has been downloaded!');
        } catch (error) {
            console.error('Error downloading file:', error);
            setMessage('Error downloading file.');
        }
    }

    return(
        <div className='flower-info-container'>
            {!isDownload ? <p>Click button to download!</p> : <p>{message}</p>}
            <Button className='btn' variant="dark" onClick={handleDownload}>Download</Button>
        </div>
    );
}

export default DownloadCsv;