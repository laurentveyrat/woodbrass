import React from 'react';
import { useHistory } from "react-router-dom";
import './FicheProduitAccueil.scss'

// import instrument1 from "../../img/instruments/instrument-1.jpg"
// import batterie1 from "../assets/img/instruments/batterie-rock/batterie1.jpg"


const FicheProduitAccueil = (props) => {
    const imgSrc = (props.categorie && props.image) ? `../../images/instruments/${props.categorie}/${props.image}.jpg` : '../../images/instruments/instrument-1.jpg'

    const history = useHistory()

    function handleClickInstrument() {
        // console.log('click', props.index)
            
        var categorie
        if (props.categorie === "batterie-rock") categorie="/batteries/batterie"
        else if (props.categorie === "clavier-maitre") categorie="/claviers/clavier"
        else if (props.categorie === "guitare-electrique") categorie="/guitares/guitare"
        else categorie="/effets-guitares/effet-guitare"

        history.push(`${categorie}${props.index + 1}`)
    }

    if (!props.reduction) var visible = "nonVisible"

    return (
        // <div className="col s12 m3 l2">
        <div className="card" onClick={handleClickInstrument}>
            <div className={`card--reduction center-align ${visible}`}>{props.reduction}</div>
            <div className="card-image">
                <img src={imgSrc} alt="produit" />
                <span className="card-title">{props.marque || "YAMAHA"}</span>
            </div>
            <div className="card-content">
                <p className="card-content--modele">{props.nom || "ETUDE C40 A 4/4"}</p>
                <p className="card-content--categorie">{props.sousCategorie || "guitare classique 4/4"}</p>
            </div>
            <div className="card-action">
                <div className="card-action--left">
                    <span className="card-action--prix">{props.prix || "122.00€"}</span><br />
                    <span className="card-action--prix_conseille">au lieu de {props.prixReel || "174.00€"}</span>
                </div>
                <div className="card-action--right">
                    <span className="card-action--stock_online">{props.disponibiliteInternet && <span className="rond-vert"></span> || <span className="rond-orange"></span>}Stock internet</span><br />
                    <span className="card-action--stock_paris">{props.disponibiliteParis && <span className="rond-vert"></span> || <span className="rond-orange"></span>}Stock Paris</span>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default FicheProduitAccueil;