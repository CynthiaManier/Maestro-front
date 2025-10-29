import "./ClientList.scss";
import { getAllUsers } from "../../api/apiUser.js";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ClientList() {
    const [clientList, setClientList] = useState([]);

    async function getAllClients() {
        const allClients = await getAllUsers();
        setClientList(allClients);
    }
    useEffect(() => {
        getAllClients();
    }, []);

    return (
        <Container className="client-list">
            {/* Header-mobile*/}
            <Row className="client-list-header client-list-header-mobile">
                <Col>Liste des clients</Col>
            </Row>
            {/* Header-desktop */}
            <Row className="client-list-header client-list-header-desktop">
                <Col
                    sm={2}
                    className="client-list-header_item client-list-header_name_item"
                >
                    Identité
                </Col>
                <Col
                    sm={3}
                    className="client-list-header_item client-list-header_email_item"
                >
                    Email
                </Col>
                <Col
                    sm={5}
                    className="client-list-header_item client-list-header_adress_item"
                >
                    Adresse
                </Col>
                <Col
                    sm={2}
                    className="client-list-header_item client-list-header_phone-number_item"
                >
                    N° de téléphone
                </Col>
            </Row>
            {/* Lite des clients */}
            {clientList != [] &&
                clientList.map((client) => (
                    <Row key={client.id} className="client-list-result">
                        <Col
                            sm={2}
                            className="client-list-result_item client-list-result_name_item"
                        >
                            {client.firstname} {client.lastname}
                        </Col>
                        <Col
                            sm={3}
                            className="client-list-result_item client-list-result_email_item"
                        >
                            {client.email}
                        </Col>
                        <Col
                            sm={5}
                            className="client-list-result_item client-list-result_adress_item"
                        >
                            {client.localisation}
                        </Col>
                        <Col
                            sm={2}
                            className="client-list-result_item client-list-result_phone-number_item"
                        >
                            {client.phonenumber}
                        </Col>
                    </Row>
                ))}
        </Container>
    );
}

export default ClientList;
