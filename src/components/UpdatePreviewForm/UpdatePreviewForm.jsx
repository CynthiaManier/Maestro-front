import { useContext, useState } from "react";
import UserContext from "../../UserContext.jsx";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updatePreview } from "../../api/apiPreview.js";


function UpdatePreviewForm({ genreList, id, pencilIsClicked }) {

    const {userIs} = useContext(UserContext)
    const [formVisible, setFormVisible] = useState(false);

    pencilIsClicked === true ? setFormVisible(true) : setFormVisible(false);

    // console.log(id);
    

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (

        <>
            <Form onSubmit={handleSubmit} id='updatePreview' method='patch'>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='previewTitle'>Titre de l'extrait</Form.Label>
                    <Form.Control id='previewTitle' name='title' type="text" placeholder="Entrer le titre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='previewDate'>Date de l'extrait</Form.Label>
                    <Form.Control id='previewDate' name='date' type="date"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='star-switch'>Voulez-vous rendre cet extrait accessible sur la page d'accueil ?</Form.Label>
                    <Form.Check
                        name='isStar'
                        type="switch"
                        id="star-switch"
                        label="Rendre l'extrait star"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='genre'>Ajoute un ou plusieurs genres</Form.Label>
                    {genreList.length > 0 && genreList.map((genre) => (
                        <div key={genre.id}>
                        <Form.Check
                            className='checkBox'
                            inline
                            label={genre.label}
                            name={genre.label}
                            type="checkbox"
                            id={genre.id}
                        />
                        </div>
                    ))}
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label htmlFor='previewFile'>Parcourir les fichiers</Form.Label>
                    <Form.Control id='previewFile' name='previewFile' type="file" />
                </Form.Group> */}
                {/* ajout star ou pas */}
                <Button type="submit">Submit</Button> 
            </Form>
        </>
    
    )


}

export default UpdatePreviewForm;