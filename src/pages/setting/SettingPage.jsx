import CompanyDataForm from "../../components/UserDataForm/Company/CompanyDataForm.jsx";
import UserDataForm from "../../components/UserDataForm/User/UserDataForm.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { getMyProfile } from "../../api/apiUser.js";

function SettingPage() {
    // LES COMPOSANTS QUI SERONT SUR LA PAGE:

    // Formulaire de modification des données utilisateurs
    // => UserDataForm

    // Voir mes informations
    const [setting, setSetting] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function getMySetting() {
        const myProfile = await getMyProfile();
        setSetting(myProfile);
        setIsLoading(false);
        // console.log("Dans ma page setting :", myProfile);
    }

    useEffect(() => {
        getMySetting();
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div>
                    <h1>Setting</h1>
                    <UserDataForm />
                    {setting.user.company_id != null ? (
                        // mettre en prod une valeur pour dire ici on fait un update
                        //<CompanyDataForm(true) />
                        <CompanyDataForm />
                    ) : (
                        <button></button>
                        //ici afficher companyDataForm mais avec une props pour dire
                        //qu'on fait un post
                        //<CompanyDataForm(false) />
                    )}
                </div>
            )}
        </>
    );
}

export default SettingPage;
