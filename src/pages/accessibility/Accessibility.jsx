import "./Accessibility.scss";
import {Link} from "react-router-dom";

function Accessibility() {
    return (
        <div className="container">
            <main>
                <h1>Accessibilité</h1>

                <section>
                    <h2>Engagement en faveur de l'accessibilité</h2>
                    <p>
                        Ce site respecte les normes d'accessibilité
                        internationales WCAG (Web Content Accessibility
                        Guidelines) afin de permettre à toute personne, y
                        compris les personnes en situation de handicap, de
                        naviguer facilement.
                    </p>
                    <p>
                        Nous nous engageons à améliorer continuellement
                        l’accessibilité de notre site, en appliquant les
                        recommandations suivantes :
                    </p>
                    
                    <ul>
                        <li>
                            Utilisation d’une structure HTML sémantique
                            (éléments main, header, nav, footer) pour
                            faciliter la navigation aux technologies
                            d’assistance.
                        </li>
                        <li>
                            Gestion du focus clavier pour permettre la
                            navigation sans souris.
                        </li>
                        <li>
                            Labels explicites et attributs ARIA adaptés (
                        aria-label,
                        aria-labelledby
                        aria-describedby) pour les éléments
                            interactifs.
                        </li>
                        <li>
                            Contraste suffisant entre texte et arrière-plan pour
                            les malvoyants.
                        </li>
                        <li>
                            Utilisation modérée des animations ou effets visuels
                            pouvant perturber certaines personnes.
                        </li>
                        <li>
                            Composants de navigation utilisant des éléments
                        (nav et a)
                            avec des rôles ARIA lorsque c’est nécessaire.
                        </li>
                        <li>
                            Gestion du focus dynamique avec refs et hooks React,
                            par exemple pour placer le focus dans une modale
                            ouverte.
                        </li>
                        <li>
                            Annoncer les changements dynamiques avec des régions
                            ARIA live via des composants comme
                        react-aria-live.
                        </li>
                    </ul>
                    
                </section>

                <section>
                    <h2>Tester et valider l'accessibilité</h2>
                    <p>
                        Nous utilisons des outils comme Lighthouse, ou les extensions d’inspection d’accessibilité
                        des navigateurs pour identifier et corriger les
                        problématiques d’accessibilité.
                    </p>
                    <p>
                        Des tests avec des lecteurs d’écran 
                        sont également effectués pour valider la qualité de
                        l’expérience utilisateur pour tous.
                    </p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                        N’hésitez pas à nous contacter pour signaler tout
                        problème d’accessibilité ou pour toute question relative
                        à l’accessibilité du site au lien suivant : <Link to= "/contact">Nous contacter</Link>
                    </p>

                </section>
            </main>
            
        </div>
    );
}

export default Accessibility;
