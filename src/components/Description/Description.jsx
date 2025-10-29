import "./Description.scss";
import { getAllDescription } from "../../api/apiDescription.js";
import { useState, useEffect } from "react";

function Description() {



    const [descriptionList, setDescriptionList] = useState([]);

    async function getDescriptionList() {
        const allDescriptions = await getAllDescription();
        // console.log('allDescriptions ', allDescriptions);
        setDescriptionList(allDescriptions);
        // console.log('descriptionList',descriptionList);
    }


    useEffect(() => {
        getDescriptionList();
    }, [])

    
    return (
        <>
        <section className="description">
            {descriptionList.length != 0 && 
            descriptionList.map((description) => (
            <div key={description.id} className="description__title__container">
                <h2 className="description__title">
                    {description.title}
                </h2>
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
