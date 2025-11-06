import { useState, useEffect } from "react";
import { getAllDescription } from "../../api/apiDescription.js";
import "./Description.scss";

function Description() {


    // stocke la liste des descriptions récupérées depuis l'API
    const [descriptionList, setDescriptionList] = useState([]);

    // on récupère les données depuis l'API
    async function getDescriptionList() {
        const allDescriptions = await getAllDescription();
        // console.log('allDescriptions ', allDescriptions);
        // on appelle l'API pour avoir toutes les descriptions
        setDescriptionList(allDescriptions);
        // console.log('descriptionList',descriptionList);
    }


    useEffect(() => {
        getDescriptionList();
    }, []) // s'exécute qu'une seule fois au chargement

    
    return (
        <>
        <section className="description">
            {/* Vérifie que la liste n'est pas vide avant d'afficher */}
            {descriptionList.length != 0 && 
            // Parcourir chaque élément de la liste pour l'afficher
            descriptionList.map((description) => (
            <div key={description.id} className="description__title__container">
                {/* Affiche le titre de chaque description */}
                <h2 className="description__title">
                    {description.title}
                </h2>
                <img src={description.image_link} alt="" />
                <p>{description.text}</p>
            </div>
            ))
            }
        </section>
        
        {/* <section className="description">
            <div className="description__title__container">
                <h2 className="description__title">
                    Présentation du compositeur
                </h2>
                <i class="bi bi-pencil-square"></i>
            </div>

            <div className="description__image__container">
                <img
                    className="description__image"
                    src="partition.jpg"
                    alt="Partition de musique"
                />
            </div>

            <div className="description__text__container">
                <p className="description__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                </p>

                <p className="description__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                </p>
            </div>
        </section> */}
        </>
    );
}

export default Description;
