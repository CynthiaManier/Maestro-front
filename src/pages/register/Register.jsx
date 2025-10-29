import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Register.scss";
import { create } from "../../api/apiUser";

function Register() {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);

    function handelSubmit(event) {
        event.preventDefault();
        if (!acceptPrivacy) {
            alert("Vous devez accepter la politique de confidentialité");
            return;
        }
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }
        const registerData = {
            email: email,
            password: password,
            pseudo: pseudo,
            confirmPassword: confirmPassword,
        };
        create(registerData)
            .then((response) => {
                console.log("inscription réussi", response);
            })
            .catch((error) => {
                console.error("inscription échoué", error);
            });
    }
    return (
        <div className="register-wrapper">
            <div className="header-register">
                <h2>Créer un compte</h2>
                <p>Les champs marqués d'un astérisque (*) sont obligatoires</p>
            </div>

            <Container className="register-container">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form
                            method="post"
                            onSubmit={(event) => handelSubmit(event)}
                        >
                            <Form.Group controlId="pseudo" className="mb-3">
                                <Form.Label>Pseudo *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre pseudo"
                                    name="name"
                                    value={pseudo}
                                    onChange={(event) =>
                                        setPseudo(event.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Adresse-mail *</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre adresse-mail"
                                    name="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>Mot de passe *</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Entrez votre mot de passe"
                                    name="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="ConfirmPassword"
                                className="mb-3"
                            >
                                <Form.Label>
                                    Confirmer le mot de passe *
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirmer votre mot de passe"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setconfirmPassword(event.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="privacyPolicy"
                                className="mb-4"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="J'accepte que mes données soient traitées conformément à la politique de confidentialité"
                                    checked={acceptPrivacy}
                                    onChange={(event) =>
                                        setAcceptPrivacy(event.target.checked)
                                    }
                                    required
                                />
                            </Form.Group>

                            <div className="form-actions">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="rounded-btn"
                                >
                                    S'inscrire
                                </Button>
                                <p className="mt-3 mb-0">
                                    Déjà un compte ?{" "}
                                    <a href="#">Se connecter</a>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
