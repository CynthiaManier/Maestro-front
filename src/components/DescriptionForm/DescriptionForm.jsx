import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { create, update, deleteDescription } from "../../api/apiDescription.js";
import { PlusSquareFill, DashSquareFill } from "react-bootstrap-icons";
import "./DescriptionForm.scss";

//Crée plusieurs états "useState"  pour gérer les valeurs du formulaire, les champs à mettre à jour, et l’affichage du formulaire.
function DescriptionForm({ onAction }) {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [fieldsToUpdate, setFieldsToUpdate] = useState({
        title: false,
        text: false,
        image: false,
    });
    const [showForm, setShowForm] = useState(false);

    //Gère la soumission du formulaire pour créer une description. Elle empêche le rechargement de la page, construit un objet FormData, envoie la requête d’ajout, et réinitialise le formulaire après succès.
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", text);
        if (imageFile) formData.append("image", imageFile);

        create(formData)
            .then((response) => {
                console.log("Description créée :", response);
                resetForm();
                if (onAction) onAction();
            })
            .catch((error) => console.error("Erreur :", error));
    }
//on aura besoin de l'id pour mettre a jour ou supprimer 
//Gère la mise à jour d’une description. Vérifie l’ID, construit les données à envoyer selon les champs cochés, et appelle la fonction 
    function handleUpdate() {
        if (!id) {
            alert(
                "Veuillez renseigner un ID pour mettre à jour une description"
            );
            return;
        }

        const formData = new FormData();
        if (fieldsToUpdate.title) formData.append("title", title);
        if (fieldsToUpdate.text) formData.append("text", text);
        if (fieldsToUpdate.image && imageFile)
            formData.append("image", imageFile);

        update(id, formData)
            .then((response) => {
                console.log("Description mise à jour :", response);
                resetForm();
                if (onAction) onAction();
            })
            .catch((error) => console.error("Erreur :", error));
    }
    
    //Gère la suppression d’une description. Vérifie l’ID, appelle la fonction deleteDescription, et réinitialise le formulaire.
    function handleDelete() {
        if (!id) {
            alert("Veuillez renseigner un ID pour supprimer une description");
            return;
        }

        deleteDescription(id)
            .then((response) => {
                console.log("Description supprimée :", response);
                resetForm();
                if (onAction) onAction();
            })
            .catch((error) => console.error("Erreur :", error));
    }

    //Permet de basculer l’état d’un champ (titre, texte, image) pour indiquer s’il doit être mis à jour.
    function toggleField(field) {
        setFieldsToUpdate({
            ...fieldsToUpdate,
            [field]: !fieldsToUpdate[field],
        });
    }

    //Réinitialise tous les états du formulaire
    function resetForm() {
        setId("");
        setTitle("");
        setText("");
        setImageFile(null);
        setFieldsToUpdate({
            title: false,
            text: false,
            image: false,
        });
    }

    return (
        <div className="mb-4">
            <div
                className="icon-container"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? (
                    <DashSquareFill size={28} color="#E07A5F" />
                ) : (
                    <PlusSquareFill size={28} color="#E07A5F" />
                )}
            </div>

            <div className="d-flex justify-content-center">
                <div className="border rounded ">
                    {showForm && (
                        <Form
                            onSubmit={handleSubmit}
                            method="post"
                            encType="multipart/form-data"
                            className="mt-4"
                        >
                            <Form.Group controlId="formId">
                                <Form.Label>
                                    ID (pour mise à jour) {/* / suppression) */}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={id}
                                    placeholder="Entrez l'ID existant"
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTitle" className="mt-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Modifier le titre"
                                    checked={fieldsToUpdate.title}
                                    onChange={() => toggleField("title")}
                                />
                                <Form.Control
                                    type="text"
                                    value={title}
                                    placeholder="Titre de la description"
                                    onChange={(e) => setTitle(e.target.value)}
                                    disabled={!fieldsToUpdate.title}
                                />
                            </Form.Group>

                            <Form.Group controlId="formText" className="mt-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Modifier le texte"
                                    checked={fieldsToUpdate.text}
                                    onChange={() => toggleField("text")}
                                />
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={text}
                                    placeholder="Texte de la description"
                                    onChange={(e) => setText(e.target.value)}
                                    disabled={!fieldsToUpdate.text}
                                />
                            </Form.Group>

                            <Form.Group controlId="formImage" className="mt-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Modifier l'image"
                                    checked={fieldsToUpdate.image}
                                    onChange={() => toggleField("image")}
                                />
                                <Form.Control
                                    type="file"
                                    onChange={(e) =>
                                        setImageFile(e.target.files[0])
                                    }
                                    disabled={!fieldsToUpdate.image}
                                />
                            </Form.Group>

                            <div className="mt-4">
                                <Button variant="primary" type="submit">
                                    Créer
                                </Button>
                                <Button
                                    variant="warning"
                                    type="button"
                                    className="ms-2"
                                    onClick={handleUpdate}
                                >
                                    Mettre à jour
                                </Button>
                                <Button
                                    variant="danger"
                                    type="button"
                                    className="ms-2"
                                    onClick={handleDelete}
                                >
                                    Supprimer
                                </Button>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DescriptionForm;
