import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addPreview } from '../../api/apiPreview.js';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'

function PreviewForm({genreList}) {

    const [form, setForm] = useState();
    
    // const [selectedGenre, setSelectedGenre] = useState([])
    // const form = document.getElementById('addPreview');
    // console.log(form);
    
    // function initGenreState() {
    //     if (genreList.length > 0) {
    //         for (const genre of genreList) {
    //             selectedGenre[genre.label] = false;
    //         }
    //     }
    // }

    // function handleChange(e) {
    //     console.log(e.target.id);
    //     selectedGenre[e.target.id] = !selectedGenre[e.target.id];
    //     console.log(selectedGenre);
        
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        setForm(document.getElementById('addPreview'));
        const formCheckbox = event.target;
        const checkedBoxes = formCheckbox.querySelectorAll('input[type="checkbox"]:checked');
        console.log('checkboxes', checkedBoxes);
        console.log('dans handleSubmit début');
        console.log(form);
        
        const formData = new FormData(form);
        const genres = [];
        checkedBoxes.forEach((checkbox) => {
            genres.push(parseInt(checkbox.id));
        });
        formData.append("genres", genres);
        console.log(genres);
        
        console.log('formData', formData);
        const previewInfo = await addPreview(formData);
        console.log('previewInfo : ', previewInfo);
        
    }

    // useEffect(() => {
    //     initGenreState();
    // }, []);

    return (
        <Form onSubmit={handleSubmit} id='addPreview' method='post' encType="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label htmlFor='previewTitle'>Titre de l'extrait</Form.Label>
                <Form.Control id='previewTitle' name='title' type="text" placeholder="Entrer le titre" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='genre'>Ajoute un ou plusieurs genres</Form.Label>
                {genreList.length > 0 && genreList.map((genre) => (
                    <div key={genre.id}>
                    <Form.Check
                        inline
                        label={genre.label}
                        name={genre.label}
                        type="checkbox"
                        id={genre.id}
                        // onChange={handleChange}
                    />
                    </div>
                ))}
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