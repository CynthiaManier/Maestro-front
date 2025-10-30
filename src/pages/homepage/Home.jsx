import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Description from '../../components/Description/Description.jsx';

function Home() {

    // LES COMPOSANTS QUI SERONT SUR LA PAGE:

    // Présentation du compositeur (un titre avec son image et sa description)
    // => Description (version présentation du compositeur)
    // Les compositions star
    // => PreviewList (version filtrée par isStar === true)
    // Présentation des prestations (un titre avec son image et sa description)
    // => Description (version présentation des prestations)

    return (
        <>
            <Link to="/compositions">Compositions</Link>
            <Link to="/login">Se connecter/S'inscrire</Link>
            <Link to='/user/settings'>Paramètres</Link>

            <h1>Home</h1>
            <Description />
        </>
    )
}

export default Home;