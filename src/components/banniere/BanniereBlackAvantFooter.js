import React from 'react';
import './BanniereBlackAvantFooter.scss';


const BanniereBlackAvantFooter = () => {
    return (
        <div className="hide-on-med-and-down">
            <div className="banniereGarantiesLivraisons banniereBlackAvantFooter">
                <div className="valign-wrapper">
                    <span className="material-icons">search</span>
                    <div className="banniereGarantiesLivraisons--texte_droite banniereGarantiesLivraisons--elmt">
                        <span className="banniereGarantiesLivraisons--garantie">QUI SE CACHE DERRIERE WOODBRASS ?</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">115 musiciens à votre service !</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <span className="material-icons">local_shipping</span>
                    <div className="banniereGarantiesLivraisons--texte_droite banniereGarantiesLivraisons--elmt">
                        <span className="banniereGarantiesLivraisons--garantie">LIVRAISON GRATUITE</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">dès 49€ d'achat en France Métropolitaine</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <span className="material-icons">thumb_up</span>
                    <div className="banniereGarantiesLivraisons--texte_droite banniereGarantiesLivraisons--elmt">
                        <span className="banniereGarantiesLivraisons--garantie">L'AVIS DES MUSICIENS</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">+de 15000 témoignages</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <span className="material-icons">phone_android</span>
                    <div className="banniereGarantiesLivraisons--texte_droite banniereGarantiesLivraisons--elmt">
                        <span className="banniereGarantiesLivraisons--garantie">QUESTIONS / CONSEILS</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">02 61 88 01 40</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <span className="material-icons">pin_drop</span>
                    <div className="banniereGarantiesLivraisons--texte_droite banniereGarantiesLivraisons--elmt">
                        <span className="banniereGarantiesLivraisons--garantie">5 WOODBRASS STORES</span><br />
                        <span className="banniereGarantiesLivraisons--sousTitre">Oubliez toutes vos références 1450m² d'espace musical</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BanniereBlackAvantFooter;