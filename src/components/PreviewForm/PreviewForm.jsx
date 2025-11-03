import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addPreview } from '../../api/apiPreview.js';

function PreviewForm() {

    const [form, setForm] = useState();
    // const form = document.getElementById('addPreview');
    // console.log(form);
    

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('dans handleSubmit début');
        setForm(document.getElementById('addPreview'));
        console.log(form);

        const formData = new FormData(form);
        console.log('formData', formData);
        
        const previewInfo = await addPreview(formData);
        console.log('previewInfo : ', previewInfo);
        
    }

    return (
        <Form onSubmit={handleSubmit} id='addPreview' method='post' encType="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label htmlFor='previewTitle'>Titre de l'extrait</Form.Label>
                <Form.Control id='previewTitle' name='title' type="text" placeholder="Entrer le titre" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='previewFile'>Parcourir les fichiers</Form.Label>
                <Form.Control id='previewFile' name='previewFile' type="file" />
            </Form.Group>
            {/* ajout star ou pas */}
            <Button type="submit">Submit</Button> 
        </Form>
    )

}

export default PreviewForm;