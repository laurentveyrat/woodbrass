import React from 'react';
import './BanniereBleu.scss';

const BanniereBleu = (props) => {
    return (
        <div className="row banniere_livraison">
            <div className="col s12 center-align">
                {props.texte || <h2>Livraison <b>gratuite</b> dès <b>49€</b> d'achat en France Métropolitaine.</h2>}
            </div>
        </div>
    );
};

export default BanniereBleu;