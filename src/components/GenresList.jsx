
//Démo
import React, { useEffect, useState } from "react";
import { getAllGenres, addAGenre } from "../api/apiGenre.js"; 

function GenreList() {
    const [genres, setGenres] = useState([]);
    const [newGenre, setNewGenre] = useState("");

    
    useEffect(() => {
        getAllGenres().then((data) => {
            
            setGenres(data ?? []);
        });
    }, []);

    // Gestion de la soumission du formulaire
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newGenre.trim()) return;
    //ok
    await addAGenre(newGenre); // Appel à l'apiGenre pour ajouter le genre
    console.log("ajouté un genre :", newGenre); //Affiche le genre ajouté dans la console
    // ok 
    // Après ajout, recharge les genres depuis l'API
    getAllGenres().then((data) => {
        console.log(" lister tout les genres :", data); //Vérifie que la liste est bien mise à jour
        setGenres(data ?? []);
    });

    setNewGenre(""); // Réinitialise le champ
};


    return (
        <div>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.label}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    placeholder="Ajouter un genre"
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default GenreList;
