import { Card, Badge, Row, Col } from "react-bootstrap";
import {
    getAllProjectList,
    getFilteredProjectList,
} from "../../api/apiProjectList.js";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function ProjectList() {
    // projectList est un tableau vide contenant tous les projets
    const [projectList, setProjectList] = useState([]);
    const [projectFilter, setProjectFilter] = useState("");
    const [statusList, setStatusList] = useState([]);

    // je récupère les projets dans l'API coté back (Lister tous les projects)
    async function getProjects() {
        // l'api me renvoie la liste des projets
        // *** A MODIFIER si c'est un client c'est bien getAllProjectList sinon getAllAdminProjects
        const result = await getAllProjectList();

        setStatusList(result.Liststatus);
        // les projets se mettent dans le usestate pour les afficher
        setProjectList(result.projects);
    }

    // je récupère les status du projet dans l'API coté back (Trier les projets par filtre)
    async function getStatusProject(status) {
        // l'api me renvoie les projets filtrés suivant le status choisis
        // *** A MODIFIER si c'est un client c'est bien getFilteredProjectList sinon getFilteredAdminProjects
        const result = await getFilteredProjectList(status);
        console.log(result.projects);

        // je mets la liste filtrés dans le usestate pour les afficher
        setProjectList(result.projects);
    }

    // la fonction est déclénchée quand la valeur du filter est changée
    function handleChange(e) {
        e.preventDefault(); // empêche le rechargement par défaut
        const status = e.target.value;
        console.log("status : ", status);
        setProjectFilter(status); // Met à jour le status sélectionné
        console.log("projectFilter : ", projectFilter);

        if (status === "") {
            getProjects();
            // si le user selectionne tous les projet donc la valeur vide ""
            // on affiche toute la liste des projets
        } else {
            getStatusProject(status);
            // sinon on filtre suivant le status qu'aura choisi le user (en cours, terminé, etc)
        }
    }

    // useeffect s'exécute quand le composant apparait sur la page
    useEffect(() => {
        // quand le composant s'affiche, je lance ma fonction getProjects()
        // pour aller chercher les projets dans l'API
        getProjects();
    }, []);

    return (
        <div className="title__container">
            {/* <h3 className="title">Projets en cours</h3> */}
            <Form.Select
                size="lg"
                onChange={handleChange}
                aria-label="Sort by genre"
            >
                <option value="">Trier par statut</option>
                {/* si statusList n’est pas vide (length != 0), alors j’affiche la liste des status avec map */}
                {statusList.length != 0 &&
                    statusList.map((status) => (
                        <option value={status} key={status}>
                            {status}
                        </option>
                    ))}
            </Form.Select>
            {/* si projectList existe (!=null) et n’est pas vide (length != 0), alors j’affiche la liste des projets avec map */}
            {projectList != null &&
                projectList.length != 0 &&
                projectList.map((project) => (
                    <Card
                        key={project.id}
                        className="border border-primary rounded-3 shadow-sm"
                        style={{
                            backgroundColor: "#f8f5e4",
                            maxWidth: "400px",
                            borderWidth: "2px",
                        }}
                    >
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            backgroundColor: "#a3c1b0",
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "15px",
                                        }}
                                    ></div>
                                </Col>

                                <Col className="text-center">
                                    <Badge
                                        pill
                                        style={{
                                            backgroundColor: "#a3c1b0",
                                            color: "black",
                                            fontSize: "0.9rem",
                                        }}
                                        className="mb-2 d-block"
                                    >
                                        {project.name}
                                    </Badge>

                                    <Badge
                                        pill
                                        style={{
                                            backgroundColor: "#a3c1b0",
                                            color: "black",
                                            fontSize: "0.9rem",
                                        }}
                                        className="mb-2 d-block"
                                    >
                                        {project.status}
                                    </Badge>

                                    <Badge
                                        pill
                                        style={{
                                            backgroundColor: "#a3c1b0",
                                            color: "black",
                                            fontSize: "0.9rem",
                                        }}
                                        className="d-block"
                                    >
                                        {project.deadline}
                                    </Badge>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    );
}

export default ProjectList;
