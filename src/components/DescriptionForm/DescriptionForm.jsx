import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { create } from "../../api/apiDescription.js";

function DescriptionList() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
const [imageLink, setImageLink] = useState(""); 

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      title: title,
      text: text,
      image_link: imageLink, 
    };

    create(formData)
      .then((response) => {
        console.log("Description envoyée :", response);
      })
      .catch((error) => {
        console.error("L'envoi de la description a échoué :", error);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Titre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez un titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formText">
        <Form.Label>Texte</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Entrez le texte"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formImageLink">
        <Form.Label>Lien de l'image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrez l'URL de l'image"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
      </Form.Group> 

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default DescriptionList;
