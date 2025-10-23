import "./Description.scss";

function Description() {
    return (
        <section className="description">
            <div className="description__title__container">
                <h2 className="description__title">
                    Présentation du compositeur
                </h2>
                {/* <i class="bi bi-pencil-square"></i> */}
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
        </section>
    );
}

export default Description;
