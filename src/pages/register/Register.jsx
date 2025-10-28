/* import React, { useState } from "react"; */
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Register() {
/*     const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and submission logic here
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(
            `Registered with name: ${formData.name} and email: ${formData.email}`
        );
    }; */

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Créer un compte</h2>
                    <p>
                        Les champs marquées d'un astérique(*) sont obligatoires
                    </p>
                    <Form> {/* onSubmit={handleSubmit} */}
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Pseudo *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez votre pseudo"
                                name="name"
                                /* value={formData.name}
                                onChange={handleChange} */
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Adresse-mail *</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Entrez votre adresse-mail"
                                name="email"
                                /*  value={formData.email}
                                onChange={handleChange} */
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Mot de passe *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                name="password"
                                /* value={formData.password}
                                onChange={handleChange} */
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            controlId="formConfirmPassword"
                            className="mb-3"
                        >
                            <Form.Label>Comfirmer le mot de passe *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Comfirmer votre mot de passe"
                                name="confirmPassword"
                                /* value={formData.confirmPassword}
                                onChange={handleChange} */
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="formPrivacyPolicy"
                            className="mb-3"
                        >
                            <Form.Check
                                type="checkbox"
                                label="J'accepte que mes données soient traitées conformément à la politique de confidentialité"
                                name="agree"
                                /*  checked={formData.agree}
                                onChange={handleChange} */
                            />
                        </Form.Group>
                        <Button className="mb-0 text-center" variant="primary" type="submit">
                            S'inscrire
                        </Button>
                        <div className="mt-3">
                            <p className="mb-0 text-center">
                                Déjà un compte ?{" "}
                                <a href="#">Se connecter</a>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
