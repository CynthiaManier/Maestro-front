import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import userIcon from "../../assets/images/user-client.svg";
import adminIcon from "../../assets/images/user-admin.svg";

function Header() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const commonLinks = [
        { label: "Accueil", href: "#" },
        { label: "Compositions", href: "#" },
    ];

    const handleLogin = (role) => {
        setUser({ role });
        setMenuOpen(false);
    };

    const handleLogout = () => {
        setUser(null);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fermer le menu quand on clique en dehors
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
// ternaire qui signifie si on n'est connecté en tant que admin ou client
    const iconSrc = user
        ? user.role === "admin"
            ? adminIcon
            : userIcon
        : null;

    return (
        <div>
            <header>
                <img src="logo.png" alt="logo maestro" />
                <nav>
                    <ul>
                        {commonLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        
                        {user && (
                            <li className="icon-menu" ref={menuRef}>
                                <img
                                    src={iconSrc}
                                    alt={
                                        user.role === "admin"
                                            ? "Icône admin"
                                            : "Icône utilisateur"
                                    }
                                    className="nav-icon"
                                    onClick={toggleMenu}
                                />
                                {/* menu déroulant avec role si on n'est connecté en tant que client ou admin et bouton déconnecter*/}
                                {menuOpen && (
                                    <div className="dropdown-menu">
                                        <p>Connecté {user.role}</p>
                                        <button onClick={handleLogout}>
                                            Se déconnecter
                                        </button>
                                    </div>
                                )}
                            </li>
                        )}
                        {/*demo de simulation quand on clique sur l'icone admin ou client on se connecte*/}
                        {!user && (
                            <li>
                                <a href="#">Connexion / Inscription</a>
                                <div className="login-buttons">
                                    <img
                                        src={userIcon}
                                        alt="Icône client"
                                        onClick={() => handleLogin("client")}
                                    />
                                    <img
                                        src={adminIcon}
                                        alt="Icône admin"
                                        onClick={() => handleLogin("admin")}
                                    />
                                </div>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
