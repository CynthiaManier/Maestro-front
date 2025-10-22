header.scss

header :
    position: fixed;              // Le header reste toujours visible en haut de la page, même lorsqu’on défile.
    top: 0;                      // Positionne le header tout en haut de la fenêtre.
    left: 0;                     // Aligne le header sur le bord gauche.
    width: 100%;                 // Fait en sorte que le header prenne toute la largeur de la page.
    display: flex;               // Utilise Flexbox pour agencer les éléments à l’intérieur du header.
    align-items: center;         // Aligne verticalement les éléments au centre.
    justify-content: space-between; // Répartit les éléments sur les côtés gauche et droit du header.
    padding: 20px 40px;          // Ajoute de l’espace intérieur (20px en haut/bas, 40px à gauche/droite).
    background-color: #f4f4de;   // Définit une couleur de fond beige clair.
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Ajoute une ombre douce sous le header pour créer du relief.
    z-index: 1000;               // Place le header au-dessus des autres éléments (priorité d’affichage élevée).


img :
    width: 136px;                // Définit la largeur de l’image du logo.
    height: 136px;               // Définit la hauteur de cette image.
    border-radius: 50%;          // Rend l’image circulaire.
    object-fit: contain;         // Fait en sorte que l’image reste entièrement visible sans être coupée.



nav :
    flex-grow: 1;                // Permet à la navigation d’occuper tout l’espace disponible dans le header.
    display: flex;               // Active Flexbox pour les éléments internes de la navigation.
    flex-direction: row;         // Organise les éléments en ligne (horizontalement).
    flex-wrap: nowrap;           // Empêche le retour à la ligne des éléments de navigation.
    justify-content: space-around; // Répartit les blocs internes de façon équilibrée.

ul :
    display: flex;       // Met les éléments de liste (li) sur la même ligne.
    align-items: center; // Centre verticalement les items dans la liste.
    list-style: none;    // Supprime les puces des listes.
    gap: 500px;          // Espace très large entre les éléments du menu.
    margin: 0;           // Supprime les marges par défaut de la liste.
    padding: 0;          // Supprime le padding par défaut.


li a :
    text-decoration: none; // Supprime le soulignement des liens.
    color: #000000;           // Définit la couleur du texte en noir.
    font-family: Roboto Mono; // Utilise la police Roboto Mono pour un style monospacé.
    font-weight: 500;      // Applique une épaisseur moyenne au texte.
    font-size: 1rem;       // Définit la taille du texte à 1 rem (taille relative).
    transition: color 0.3s ease; // Anime en douceur le changement de couleur au survol.


&:hover 
    color: #007bff;    // Change la couleur du texte en bleu lors du survol du lien.




/* Pour éviter que le contenu soit caché sous le header fixe */
body {
    padding-top: 176px; // hauteur du header + marge de sécurité
}


header.jsx

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

useEffect est déclenché une fois au montage du composant (car le tableau de dépendances est vide []).

la fonction handleClickOutside est crée. Elle vérifie si l’endroit où l’utilisateur a cliqué (event.target) n’est pas à l’intérieur de l’élément menu ciblé par menuRef.

Si le clic est en dehors (!menuRef.current.contains(event.target)), la fonction appelle setMenuOpen(false) pour fermer le menu.

Un écouteur d’événement mousedown est ajouté à document pour capturer tous les clics.

Ce même écouteur est retiré lors du démontage du composant pour éviter des fuites mémoire.



const iconSrc = user
        ? user.role === "admin"
            ? adminIcon
            : clientIcon
        : null;

La première condition teste si la variable user existe (est définie et "truthy").

Si user existe, alors la deuxième condition vérifie le rôle de l'utilisateur :

Si user.role est "admin", alors iconSrc prend la valeur adminIcon.

Sinon (user.role n'est pas "admin"), iconSrc prend la valeur clientIcon.

Si user n'existe pas (est null ou undefined), alors iconSrc vaut null.

On peut dire en clair :
"Si un utilisateur est connecté, vérifier son rôle. S’il est admin, afficher l’icône admin, sinon afficher l’icône client. Sinon, ne rien afficher."
