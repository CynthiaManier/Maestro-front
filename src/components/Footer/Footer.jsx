import React from "react";
import "./Footer.scss";

const links = [
    { label: "Nous contacter", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Informations légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Accessibilité", href: "#" },
];

function Footer() {
    return (
        <footer className="footer">
            <nav >
                <ul className="footer-links">
                    {links.map(({ label, href }, index) => (
                        <li key={index}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className="footer-icons" >
                <li>
                    <a href="#" aria-label="Page d’accueil">
                        <i className="bi bi-house" ></i>
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Espace personnel">
                        <i className="bi bi-person" ></i>
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Menu des liens">
                        <i className="bi bi-list"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;