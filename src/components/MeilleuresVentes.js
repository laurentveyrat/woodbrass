import React from 'react';
import './MeilleuresVentes.scss'
import FicheProduitAccueil from "./FicheProduitAccueil"
import InstrumentsJSON from "../json/instruments.json"

const MeilleuresVentes = () => {

    var instrumentsTab= Object.values(InstrumentsJSON.batterieRock);
   

    var instrumentsList = instrumentsTab.map((instrument, index) => {
        return <FicheProduitAccueil
            key={index}
            index={index}
            marque={instrument.marque}
            nom={instrument.nom}
            categorie={instrument.categorie}
            sousCategorie={instrument.sousCategorie}
            image={instrument.image}
            disponibiliteInternet={instrument.disponibiliteInternet}
            disponibiliteParis={instrument.disponibiliteParis}
            prix={instrument.prix}
            prixReel={instrument.prixReel}
            reduction={instrument.reduction}
        />
    })

    return (
        <div>
            <h2 className="titre-meilleures-ventes">DÉCOUVREZ ICI LES MEILLEURES VENTES PAR UNIVERS !</h2>
            <div className="container">
                <div className="row meilleurs-ventes-produits">
                    {instrumentsList}
                </div>
            </div>
        </div>
    );
};

export default MeilleuresVentes;