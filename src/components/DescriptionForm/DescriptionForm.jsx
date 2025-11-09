import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { create } from "../../api/apiDescription.js";

function DescriptionForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("image", imageFile);

    create(formData)
      .then((response) => console.log("Description envoyée :", response))
      .catch((error) => console.error("Erreur :", error));
  }

  return (
    <Form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <Form.Group controlId="formTitle">
        <Form.Label>Titre</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formText">
        <Form.Label>Texte</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default DescriptionForm;
