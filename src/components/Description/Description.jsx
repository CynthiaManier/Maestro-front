import { useState, useEffect, useContext } from "react";
import { getAllDescription } from "../../api/apiDescription.js";
import DescriptionForm from "../DescriptionForm/DescriptionForm.jsx";
import UserContext from "../../UserContext.jsx";
import "./Description.scss";

function Description() {
    const [descriptionList, setDescriptionList] = useState([]);
    const { userIs } = useContext(UserContext);

    async function getDescriptionList() {
        const allDescriptions = await getAllDescription();
        setDescriptionList(allDescriptions);
    }

    useEffect(() => {
        getDescriptionList();
    }, []);

    return (
        <>
            <section>
                {descriptionList.length !== 0 &&
                    descriptionList.map((description) => (
                        <div
                            key={description.id}
                            className="description__container"
                        >
                                <h2 className="description__title">
                                    {description.title}
                                </h2>
                            <img
                                className="description__image"
                                src={`http://localhost:3000/${description.image_link.replace(
                                    /^app\//,
                                    ""
                                )}`}
                                alt="présentation du compositeur"
                            />
                            
                                <p className="description__text">
                                    {description.text}
                                </p>
                            
                        </div>
                    ))}
            </section>
            {userIs === "admin" && (
                <section className="description__form">
                    <h3>Ajouter une description</h3>
                    <DescriptionForm />
                </section>
            )}
        </>
    );
}

export default Description;