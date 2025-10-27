import "./ProjectForm.scss";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProjectForm() {
    return (
        <Form className="project-frm">
            <h2 className="title">Nouvelle demande de projet</h2>

            {/* Titre du projet */}
            <Form.Group className="form__title" controlId="FormTitleProject">
                <Form.Label className="form__title">Titre du projet*</Form.Label>
                <Form.Control className="form__titleInput" type="text"/>
            </Form.Group>

            {/* Description */}
            <Form.Group className="form__Description" controlId="FormDescription">
                <Form.Label>Description du projet*</Form.Label>
                <Form.Control className="form__descriptionInput"  as="textarea" rows={4}/>
            </Form.Group>

            {/* bouton*/}
            <Button className="form__button" variant="primary" type="submit">
                Envoyer ma demande
            </Button>
            <p className="form__champsObligatoire">*champs obligatoires</p>
        </Form>
        
    );
}

export default ProjectForm;
