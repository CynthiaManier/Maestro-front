import "./Client.scss";

function Client() {
    return (
        <section className="client">
            {/* <div className="client_div client_last-name_div">
                <p className="client_item client_last-name_item">Nom</p>
                <p className="client_API-result client_last-name_API-result">
                    Dupont
                </p>
            </div>
            <div className="client_div client_first-name_div">
                <p className="client_item client_first-name_item">Prénom</p>
                <p className="client_API-result client_first-name_API-result">
                    Pierre
                </p>
            </div> */}
            <div className="client_div client_name_div">
                <p className="client_API-result client_first-name_API-result">
                    Pierre
                </p>
                <p className="client_API-result client_last-name_API-result">
                    Dupont
                </p>
            </div>
            <div className="client_div client_email_div">
                <p className="client_item client_email_item">Email</p>
                <p className="client_API-result client_email_API-result">
                    pierre.dupont@exemple.com
                </p>
            </div>
            <div className="client_div cleint_phone-number_div">
                <p className="client_item client_phone-number_item">
                    N° de téléphone
                </p>
                <p className="client_API-result client_phone-number_API-result">
                    0000000000
                </p>
            </div>
        </section>
    );
}

export default Client;
