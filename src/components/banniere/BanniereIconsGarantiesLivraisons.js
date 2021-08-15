import React from 'react';
import './BanniereIconsGarantiesLivraisons.scss';

import logo1 from "../../assets/img/banniere-livraison/3-ans.svg"
import logo2 from "../../assets/img/banniere-livraison/livre.svg"
import logo3 from "../../assets/img/banniere-livraison/envoi.svg"
import logo4 from "../../assets/img/banniere-livraison/tel.svg"
import logo5 from "../../assets/img/banniere-livraison/credit-card.svg"


const BanniereIconsGarantiesLivraisons = () => {
    return (
        <div className="container">
            <div className="banniereGarantiesLivraisons">
                <div>
                    <img src={logo1} alt="garantie 3 ans" />
                    <div className="banniereGarantiesLivraisons--texte_droite">
                        <span className="banniereGarantiesLivraisons--garantie">GARANTIE 3 ANS</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">Extension possible jusqu'à 5 ans</span>
                    </div>
                </div>
                <div>
                    <img src={logo2} alt="garantie 3 ans" />
                    <div className="banniereGarantiesLivraisons--texte_droite">
                        <span className="banniereGarantiesLivraisons--garantie">LIVRAISON GRATUITE</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">dès 49€</span>
                    </div>
                </div>
                <div>
                    <img src={logo3} alt="garantie 3 ans" />
                    <div className="banniereGarantiesLivraisons--texte_droite">
                        <span className="banniereGarantiesLivraisons--garantie">LIVRES EN 24/48H</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">avec Chronopost</span>
                    </div>
                </div>
                <div>
                    <img src={logo4} alt="garantie 3 ans" />
                    <div className="banniereGarantiesLivraisons--texte_droite">
                        <span className="banniereGarantiesLivraisons--garantie">UNE QUESTION ?<br /> UN CONSEIL ?</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">02 61 88 01 40</span>
                    </div>
                </div>
                <div>
                    <img src={logo5} alt="garantie 3 ans" />
                    <div className="banniereGarantiesLivraisons--texte_droite">
                        <span className="banniereGarantiesLivraisons--garantie">3x SANS FRAIS</span>
                        <span className="banniereGarantiesLivraisons--sousTitre"> par CB</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanniereIconsGarantiesLivraisons;