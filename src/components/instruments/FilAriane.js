import React from 'react';
import "./FilAriane.scss"

const FilAriane = (props) => {

    var categorie, sousCategorie, styleCategorie

    switch (props.categorie) {
        case "batteries" :
        case "batterie" :
            categorie = "Batteries / Percussions"
            sousCategorie = "Batteries Acoustiques"
            styleCategorie = "Batteries Rock"
            break;
        case "claviers" :
        case "clavier" :
            categorie = "Claviers / Pianos"
            sousCategorie = "Claviers Maitres"
            styleCategorie = ""
            break;
        case "guitares" :
        case "guitare" :
            categorie = "Guitares"
            sousCategorie = "Guitares Electriques"
            styleCategorie = ""
            break;
        case "effets-guitare" :
        case "effet-guitare" :
            categorie = "Amplis / Effets"
            sousCategorie = "Effets Guitare Electrique"
            styleCategorie = ""
            break;
        default:
            categorie = "Batteries / Percussions"
            sousCategorie = "Batteries Acoustiques"
            styleCategorie = "Batteries Rock"
            break;
    }


    return (
        <>
            <nav aria-label="Breadcrumb" className="fil-ariane">
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a href="#!" className="breadcrumb">Accueil</a>
                        <a href="#!" className="breadcrumb">{categorie}</a>
                        <a href="#!" className="breadcrumb">{sousCategorie}</a>
                        <a aria-current="page" href="#!" className="breadcrumb">{styleCategorie}</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default FilAriane;