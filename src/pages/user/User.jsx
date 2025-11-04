import ProjectForm from "../../components/ProjectForm/ProjectForm.jsx";
import ProjectList from "../../components/ProjectList/ProjectList.jsx";

function User() {

    // LES COMPOSANTS QUI SERONT SUR LA PAGE:

    // Formulaire de demande de projet
    // => ProjectForm
    // Liste des projets avec statut
    // => ProjectList (version client)

    return (
        <>
        <h1>User</h1>
        <ProjectForm />
        <ProjectList />
        </>
    )
}

export default User;