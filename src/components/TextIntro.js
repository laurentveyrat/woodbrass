import React from 'react';
import "./TextIntro.scss"

const TextIntro = () => {
    return (
        <div className="block-intro">
            <h1>Bienvenue sur Woodbrass, le site pour les musiciens fait par des musiciens !</h1>
            <h2>Profitez du choix du N°1 Français avec 1400 marques et 400 000 articles en stock au meilleur prix !</h2>
            <div className="block-intro--text-intro">
                <div className="block-intro--text-intro--left">
                    <p>Entreprise 100% Française : stock et sav en France</p>
                    <p>Livraison gratuite à partir de 49€</p>
                </div>
                <div className="block-intro--text-intro--right">
                    <p>115 musiciens passionnés à votre service</p>
                    <p>Paiement en 3 fois sans frais à partir de 149€</p>
                </div>
            </div>
        </div>
    );
};

export default TextIntro;