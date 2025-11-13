

//  le composant enfant DescriptionItem affiche un bloc contenant un titre, une image et un texte, tous extraits de la prop description
function DescriptionItem({ description }) {

    const imageSrc = `http://localhost:3000/${description.image_link.replace(/^app\//,"")}`;

    return (
        <div className="description__container">
            <h2 className="description__title">{description.title}</h2>
                <img
                    className="description__image"
                    src={imageSrc}
                    alt="présentation du composateur"
                />



                <p className="description__text">{description.text}</p>

        </div>
    );
}

export default DescriptionItem;
