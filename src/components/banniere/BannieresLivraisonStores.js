import React from 'react';
import './BannieresLivraisonStores.scss';

const BannieresLivraisonStores = () => {
    return (
        <>
            <div className="banniere_stores">
                <div className="row valign-wrapper">
                    <div className="banniere_stores--premiereCol col s3 hide-on-small-only">
                        Venez nous rendre visite ! Woodbrass vous propose le plus grand espace musical de Paris.
                    </div>
                    <div className="banniere_stores--deuxiemeCol col s3 center-align">
                        <div className="titre">
                            woodbrass
                        </div>
                        <div className="sous-titre">
                            STORES
                        </div>
                        <div className="content">
                            <b>3 Woodbrass Stores à Paris</b><br />
                            1450m² d'espace musical
                        </div>
                        <button className="en_savoir_plus">
                            EN SAVOIR PLUS
                        </button>
                    </div>
                    <div className="banniere_stores--troisiemeCol col s3 center-align">
                        <div className="titre titre--orange">
                            woodbrass
                        </div>
                        <div className="sous-titre">
                            DELUXE
                        </div>
                        <div className="content">
                            <b>Showroom</b><br />
                            studio pro
                        </div>
                        <button className="en_savoir_plus">
                            EN SAVOIR PLUS
                        </button>
                    </div>
                    <div className="banniere_stores--quatriemeCol col s3 center-align">
                        <div className="titre">
                            woodbrass
                        </div>
                        <div className="sous-titre">
                            PARTENAIRE OFFICIEL
                        </div>
                        <div className="content">
                            31 magasins <br />
                            partout en France
                        </div>
                        <button className="en_savoir_plus">
                            EN SAVOIR PLUS
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannieresLivraisonStores;