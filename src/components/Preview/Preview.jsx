import "./Preview.scss";

function Preview() {



    return (
        <>
        <article className="preview">
            <div className="preview__container">
                <figure className="preview__title__container">
                    <figcaption className="preview__title">Titre</figcaption>
                    <audio controls src="null"></audio>
                </figure>
            </div>
            <div className="preview__genre__container">
                <span className="preview__genre">Rock</span>
                <span className="preview__genre">Pop</span>
                <span className="preview__genre">Classique</span>
            </div>
        </article>
        </>
    )

};

export default Preview;