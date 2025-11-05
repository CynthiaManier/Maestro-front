import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext.jsx";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updatePreview } from "../../api/apiPreview.js";
import { getPreviewById } from "../../api/apiPreview.js";


function UpdatePreviewForm({ genreList, id }) {

    const [previewData, setPreviewData] = useState({});
    const [switchState, setSwitchState] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newIsStar, setNewIsStar] = useState("");
    const [newGenres, setNewGenres] = useState("");

    const {userIs} = useContext(UserContext)
    
    // il faut recevoir les infos de la preview

    async function getPreview(previewId) {
        const selectedPreview = await getPreviewById(previewId);
        setPreviewData(selectedPreview);
        if (previewData.isStar === true) {
            setSwitchState(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPreviewData = {
            title: newTitle,
            date: newDate,
            isStar: newIsStar,
            listGenres: newGenres
        }
        // il va falloir update preview avec newPreviewData
    }

    useEffect(() => {
        getPreview(id);
    }, [])

    return (

        <>
            <Form onSubmit={handleSubmit} id='updatePreview' method='patch'>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='previewTitle'>Titre de l'extrait</Form.Label>
                    <Form.Control defaultValue={previewData.title} id='previewTitle' name='title' type="text" placeholder="Entrer le titre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='previewDate'>Date de l'extrait</Form.Label>
                    <Form.Control defaultValue={previewData.date} id='previewDate' name='date' type="date"/>
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
                        <Form.Check key={genre.id}
                            className='checkBox'
                            inline
                            label={genre.label}
                            name={genre.label}
                            type="checkbox"
                            id={genre.id}
                        />
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