import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactRequestList from "../../components/ContactRequestList/ContactRequestList.jsx";
import ProjectList from "../../components/ProjectList/ProjectList.jsx";
import ClientList from "../../components/ClientList/ClientList.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Admin.scss";
import GenreList from "../../components/GenresList.jsx";
import WaitingProjectList from "../../components/WaitingProjectList/WaitingProjectList.jsx";

function Admin() {
    // LES COMPOSANTS QUI SERONT SUR LA PAGE:

    // Nouvelles demandes de projets
    // => WaitingProjectList
    // Liste des clients avec leurs informations
    // => ClientList
    // Les projets validés (avec leur statut etc)
    // => ProjectList (version admin)
    // Nouvelles demandes de contact
    // => ContactRequestList

    return (
        <>
            <h1>Mon espace administrateur</h1>

            <Container className="admin-container">
                <Row className="project-list-item">
                    <ProjectList />
                </Row>

                <Row>
                    <Col className="contact-request-list-item">
                        <ContactRequestList />
                    </Col>

                    <Col className="waiting-project-list-item">
                        <WaitingProjectList />
                    </Col>
                </Row>

                <Row className="list-item">
                    <GenreList />
                </Row>

                <Row className="list-item">
                    <ClientList />
                </Row>
            </Container>
        </>
    );
}

export default Admin;
