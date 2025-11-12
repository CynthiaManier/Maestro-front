import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../DataForm.scss";
import { useState } from "react";
import { getMyProfile } from "../../../api/apiUser.js";
import { updateMyProfile } from "../../../api/apiUser.js";
import { useEffect } from "react";

function UserDataForm() {
    // Voir mes informations
    const [setting, setSetting] = useState({});

    async function getMySetting() {
        const myProfile = await getMyProfile();
        setSetting(myProfile.user);
        // console.log("setting log :", myProfile);
    }

    useEffect(() => {
        getMySetting();
    }, []);

    function handelSubmit(event) {
        event.preventDefault();
        updateMyProfile(setting);
    }

    return (
        <>
            <Container className="dataForm-container">
                <Row>
                    {/* PARTICULIER */}
                    {/* <Col sm={6}> */}
                    <Col>
                        <Form
                            className="profile-form"
                            method="post"
                            onSubmit={(event) => handelSubmit(event)}
                        >
                            <Container className="profil-item">
                                {/* EN-TETE */}
                                <Row className="profil-item-header">
                                    <Col>Mon Profil</Col>
                                </Row>

                                {/* NOM */}
                                <Row className="item lastname-item">
                                    <Form.Group
                                        className="profile-form-item"
                                        controlId="lastname"
                                    >
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control
                                            className="profile-form-item-input"
                                            type="lastname"
                                            placeholder="Votre nom"
                                            defaultValue={
                                                setting?.lastname
                                                    ? setting.lastname
                                                    : ""
                                            }
                                            onChange={(event) =>
                                                setSetting((prevSetting) => ({
                                                    ...prevSetting, // ← on copie l’ancien objet
                                                    lastname:
                                                        event.target.value, // ← on remplace seulement fistname
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                {/* PRENOM */}
                                <Row className="item">
                                    <Form.Group
                                        className="profile-form-item"
                                        controlId="firstname"
                                    >
                                        <Form.Label>Prénom</Form.Label>
                                        <Form.Control
                                            className="profile-form-item-input"
                                            type="firstname"
                                            placeholder="Votre prénom"
                                            defaultValue={
                                                setting?.firstname
                                                    ? setting.firstname
                                                    : ""
                                            }
                                            onChange={(event) =>
                                                setSetting((prevSetting) => ({
                                                    ...prevSetting,
                                                    firstname:
                                                        event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                {/* EMAIL */}
                                <Row className="item">
                                    <Form.Group
                                        className="profile-form-item"
                                        controlId="email"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            className="profile-form-item-input"
                                            type="email"
                                            placeholder="Votre email"
                                            defaultValue={
                                                setting?.email
                                                    ? setting.email
                                                    : ""
                                            }
                                            onChange={(event) =>
                                                setSetting((prevSetting) => ({
                                                    ...prevSetting,
                                                    email: event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                {/* ADRESSE*/}
                                <Row className="item">
                                    <Form.Group
                                        className="profile-form-item"
                                        controlId="localisation"
                                    >
                                        <Form.Label>Adresse</Form.Label>
                                        <Form.Control
                                            className="profile-form-item-input"
                                            type="localisation"
                                            placeholder="Votre adresse"
                                            defaultValue={
                                                setting?.localisation
                                                    ? setting.localisation
                                                    : ""
                                            }
                                            onChange={(event) =>
                                                setSetting((prevSetting) => ({
                                                    ...prevSetting,
                                                    localisation:
                                                        event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                {/* NUMERO DE TELEPHONE*/}
                                <Row className="item profile-item">
                                    <Form.Group
                                        className="profile-form-item"
                                        controlId="phonenumber"
                                    >
                                        <Form.Label>
                                            Numero de téléphone
                                        </Form.Label>
                                        <Form.Control
                                            className="profile-form-item-input"
                                            type="phonenumber"
                                            placeholder="Votre numero de téléphone"
                                            defaultValue={
                                                setting?.phonenumber
                                                    ? setting.phonenumber
                                                    : ""
                                            }
                                            onChange={(event) =>
                                                setSetting((prevSetting) => ({
                                                    ...prevSetting,
                                                    phonenumber:
                                                        event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                </Row>

                                {/* BOUTTON */}
                                <Row className="item-button">
                                    <Button
                                        className="mofifier-button"
                                        variant="mofifier-button"
                                        type="submit"
                                    >
                                        Modifier
                                    </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserDataForm;

// {/* <Row>
// <Form className="profile-form">
//     <Container className="profil-item">
//         {/* EN-TETE */}
//         // <Row className="profil-item-header">
//         //     <Col>Modifier mon mot de passe</Col>
//         // </Row>

//         {/* MOT DE PASSE*/}
//         // <Row className="item password-item">
//         //     <Form.Group
//         //         className="profile-form-item"
//         //         controlId="password"
//         //     >
//         //         <Form.Label>
//         //             Nouveau mot de passe
//         //         </Form.Label>
//         //         <Form.Control
//         //             className="profile-form-item-input"
//         //             type="password"
//         //             placeholder="Mot de passe"
//         //             // value={password}
//         //         />
//         //     </Form.Group>
//         // </Row>
//         // <Row className="item password-item">
//         //     <Form.Group
//         //         className="profile-form-item"
//         //         controlId="password"
//         //     >
//         //         <Form.Label>
//         //             Retapper le mot de passe
//         //         </Form.Label>
//         //         <Form.Control
//         //             className="profile-form-item-input"
//         //             type="password"
//         //             placeholder="Mot de passe"
//         //             // value={password}
//         //         />
//         //     </Form.Group>
//         // </Row>

//         {/* BOUTTON */}
// //         <Row className="item-button">
// //             <Button className="mofifier-button">
// //                 Modifier
// //             </Button>
// //         </Row>
// //     </Container>
// // </Form>
// // </Row> */}

// {/* <Col sm={6}>
// {/* ENTREPRISE */}
// <Row>
//     <Form
//         className="profile-form"
//         method="post"
//         onSubmit={(event) => companyHandelSubmit(event)}
//     >
//         <Container className="profil-item">
//             {/* EN-TETE */}
//             <Row className="profil-item-header">
//                 <Col>Mon Entreprise</Col>
//             </Row>

//             {/* NOM DE L'ENTREPRISE */}
//             <Row className="item name-item">
//                 <Form.Group
//                     className="profile-form-item"
//                     controlId="name"
//                 >
//                     <Form.Label>Nom</Form.Label>
//                     <Form.Control
//                         className="profile-form-item-input"
//                         type="name"
//                         placeholder="Nom de l'entreprise"
//                         defaultValue={
//                             companySetting?.company
//                                 ?.name
//                                 ? companySetting.company
//                                       .name
//                                 : ""
//                         }
//                         onChange={(event) =>
//                             setnewCompanyName(
//                                 event.target.value
//                             )
//                         }
//                     />
//                 </Form.Group>
//             </Row>

//             {/* ADRESSE*/}
//             <Row className="item">
//                 <Form.Group
//                     className="profile-form-item"
//                     controlId="companyLocalisation"
//                 >
//                     <Form.Label>Adresse</Form.Label>
//                     <Form.Control
//                         className="profile-form-item-input"
//                         type=""
//                         placeholder="Adresse de l'entreprise"
//                         defaultValue={
//                             companySetting?.company
//                                 ?.localisation
//                                 ? companySetting.company
//                                       .localisation
//                                 : ""
//                         }
//                         onChange={(event) =>
//                             setNewCompanyLocalisation(
//                                 event.target.value
//                             )
//                         }
//                     />
//                 </Form.Group>
//             </Row>

//             {/* NUMERO DE SIRET*/}
//             <Row className="item siret-item">
//                 <Form.Group
//                     className="profile-form-item"
//                     controlId="siret"
//                 >
//                     <Form.Label>
//                         Numero de siret
//                     </Form.Label>
//                     <Form.Control
//                         className="profile-form-item-input"
//                         type=""
//                         placeholder="Numero de siret"
//                         defaultValue={
//                             companySetting?.company
//                                 ?.siret
//                                 ? companySetting.company
//                                       .siret
//                                 : ""
//                         }
//                         onChange={(event) =>
//                             setNewSiret(
//                                 event.target.value
//                             )
//                         }
//                     />
//                 </Form.Group>
//             </Row>

//             {/* BOUTTON */}
//             <Row className="item-button">
//                 <Button
//                     className="mofifier-button"
//                     variant="mofifier-button"
//                     type="submit"
//                 >
//                     Modifier
//                 </Button>
//             </Row>
//         </Container>
//     </Form>
// </Row>
// </Col> */}
