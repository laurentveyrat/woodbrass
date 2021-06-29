import React from 'react';
import './InstrumentsList.scss';

import FicheProduitAccueil from "../FicheProduitAccueil"
import InstrumentsJSON from "../../json/instruments.json"
import FilAriane from "./FilAriane"


const InstrumentsList = (props) => {
    
    var instrumentsTab
    if (props.instruments === "batteries") {
        instrumentsTab = Object.values(InstrumentsJSON.batterieRock);
    } else if (props.instruments === "claviers") {
        instrumentsTab = Object.values(InstrumentsJSON.clavierMaitre);
    } else if (props.instruments === "guitares") {
        instrumentsTab = Object.values(InstrumentsJSON.guitareElectrique);
    } else if (props.instruments === "effets-guitare") {
        instrumentsTab = Object.values(InstrumentsJSON.effetsGuitareElectrique);
    }


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
        <>
            <FilAriane categorie={props.instruments} />
            <div className="row instruments-list">
                {instrumentsList}
            </div>
        </>
    );
};

export default InstrumentsList;