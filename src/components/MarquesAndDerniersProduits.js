import React from 'react';
import './MarquesAndDerniersProduits.scss'

import Button from './button/Button'
import DernierProduitEnLigne from './DernierProduitEnLigne'



import marque1 from "../assets/img/marques/1.png"
import marque2 from "../assets/img/marques/2.png"
import marque3 from "../assets/img/marques/3.png"
import marque4 from "../assets/img/marques/4.png"
import marque5 from "../assets/img/marques/5.png"
import marque6 from "../assets/img/marques/6.png"
import marque7 from "../assets/img/marques/7.png"
import marque8 from "../assets/img/marques/8.png"
import marque9 from "../assets/img/marques/9.png"
import marque10 from "../assets/img/marques/10.png"
import marque11 from "../assets/img/marques/11.png"
import marque12 from "../assets/img/marques/12.png"
import marque13 from "../assets/img/marques/13.png"
import marque14 from "../assets/img/marques/14.png"
import marque15 from "../assets/img/marques/15.png"
import marque16 from "../assets/img/marques/16.png"
import marque17 from "../assets/img/marques/17.png"
import marque18 from "../assets/img/marques/18.png"
import marque19 from "../assets/img/marques/19.png"
import marque20 from "../assets/img/marques/20.png"


const MarquesAndDerniersProduits = () => {
    return (
        <div className="container marques">
            <div className="marques--left">
                <p>Voici les marques les plus recherchées par les musiciens</p>
                <div className="grid_marques">
                    <img src={marque1} alt="marque 1" />
                    <img src={marque2} alt="marque 2" />
                    <img src={marque3} alt="marque 3" />
                    <img src={marque4} alt="marque 4" />
                    <img src={marque5} alt="marque 5" />
                    <img src={marque6} alt="marque 6" />
                    <img src={marque7} alt="marque 7" />
                    <img src={marque8} alt="marque 8" />
                    <img src={marque9} alt="marque 9" />
                    <img src={marque10} alt="marque 10" />
                    <img src={marque11} alt="marque 11" />
                    <img src={marque12} alt="marque 12" />
                    <img src={marque13} alt="marque 13" />
                    <img src={marque14} alt="marque 14" />
                    <img src={marque15} alt="marque 15" />
                    <img src={marque16} alt="marque 16" />
                    <img src={marque17} alt="marque 17" />
                    <img src={marque18} alt="marque 18" />
                    <img src={marque19} alt="marque 19" />
                    <img src={marque20} alt="marque 20" />
                </div>
                <div className="center-align">
                    <Button texte="VOIR TOUTES LES MARQUES" />
                </div>
            </div>
            <div className="marques--right">
                <p>Derniers produits mis en ligne</p>
                <div className="grid_derniers_produits">
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                    <DernierProduitEnLigne />
                </div>
            </div>
        </div>
    );
};

export default MarquesAndDerniersProduits;