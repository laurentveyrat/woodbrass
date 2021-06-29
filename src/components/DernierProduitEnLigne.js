import React from 'react';
import './DernierProduitEnLigne.scss'

import dernierProduit1 from "../assets/img/derniers-produits/1.jpg"


const DernierProduitEnLigne = () => {
    return (
        <div className="flex_dernier_produit">
            <div className="flex_left">
                <img src={dernierProduit1} alt="dernier produit 1" />
            </div>
            <div className="flex_right">
                <p className="flex_dernier_produit--titre">FENDER</p>
                <p className="flex_dernier_produit--sousTitre">VENICE SOPRANO UKE,  ...</p>
                <p className="card-action--prix">122.00€</p>
                <span className="card-action--prix_conseille">au lieu de 174.00€</span>
            </div>
        </div>
    );
};

export default DernierProduitEnLigne;