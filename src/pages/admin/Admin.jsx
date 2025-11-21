import ContactRequestList from "../../components/ContactRequestList/ContactRequestList.jsx";
import GenreForm from "../../components/GenreForm/GenreForm.jsx";
//import ClientList from "../../components/ClientList/ClientList.jsx"
import ProjectList from "../../components/ProjectList/ProjectList.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Admin.scss";
import FullClientCard from "../../components/ClientList/FullClientCard.jsx";
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
            <h1 className="admin-page-title">Mon espace administrateur</h1>

            <div className="dashbord-items">
                <Container className="admin-container">
                    {/*A PROPOSER EN VERSION 2 */}
                    {/* <Row className="list-item project-list-item">
                        <h2 className="admin-item-title">Les projets en cours</h2>
                    </Row> */}
                    <Row>
                        <Col className=" component-admin-container list-item contact-request-list-item">
                            <h2 className="admin-item-title">
                                Les demandes de contact
                            </h2>
                            <ContactRequestList />
                        </Col>
                        <Col className="component-admin-container list-item waiting-project-list-item">
                            <h2 className="admin-item-title">Les projets</h2>
                            <ProjectList />
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            lg={5}
                            className="component-admin-container list-item genre-list-item"
                        >
                            <h2 className="admin-item-title">Les genres</h2>
                            <GenreForm />
                        </Col>
                        <Col className="component-admin-container list-item full-card-list-item">
                            <h2 className="admin-item-title">
                                La liste des clients
                            </h2>
                            <FullClientCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Admin;
