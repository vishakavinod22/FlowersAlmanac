import { useState } from 'react';
import './styles.css';
import { Button} from 'react-bootstrap';

function DownloadCsv(props){
    const [isDownload, setIsDownload] = useState(false);

    const handleDownload = () => {
        const url = props.url;
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownload(true);
    }

    return(
        <div className='flower-info-container'>
            {!isDownload ? <p>Click button to download!</p> : <p>File has been downloaded!</p>}
            <Button className='btn' variant="dark" onClick={handleDownload}>Download</Button>
        </div>
    );
}

export default DownloadCsv;