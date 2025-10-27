import Preview from "../Preview/Preview.jsx";
import "./PreviewList.scss"
import { getAllPreviews } from "../../api/apiPreview.js";
import { useState, useEffect } from "react";

function PreviewList() {

    const [previewList, setPreviewList] = useState([]);

    async function getPreviewList() {
        const allPreviewList = await getAllPreviews();
        setPreviewList(allPreviewList);
        console.log(previewList);
        
    }

    useEffect(() => {
        getPreviewList();
    }, [])

    // test genres en dur pour map ensuite
    // const genres = ["pop", "rock", "classique"]
    const audioscr = "/src/assets/RAYE.mp3"

    return (
        <>
                <h1 className="preview__list__title">Tous les extraits</h1>
                {/* ajout du tri par genre */}
                
                <section className="preview__list">
                    {previewList.length != 0 && previewList.map((preview) => (
                        <Preview key={preview.id} audiosrc={audioscr} title={preview.title} genres={preview.listGenres}/>
                    ))}
                    {/* Pour le moment en dur pour les tests */}
                    {/* <Preview audiosrc={audioscr} title="titre 1" genres={genres}/>
                    <Preview audiosrc={audioscr} title="titre 2" genres={genres}/>
                    <Preview audiosrc={audioscr} title="titre 3" genres={genres}/> */}
                </section>
        </>
    )

}

export default PreviewList;