import React from 'react';
import './FicheProduit.scss';

import FilAriane from "./instruments/FilAriane"
import Button from "./button/Button"

// import batterie1 from "../assets/img/instruments/batterie-rock/batterie1.jpg"
import conseiller1 from "../assets/img/conseillers/conseiller1.jpg"
import conseiller2 from "../assets/img/conseillers/conseiller2.jpg"

import InstrumentsJSON from "../json/instruments.json"


const FicheProduit = (props) => {
    let num = props.num
    var instrument, imgSrc

    if (props.categorie === "batterie") {
        const instrumentsBatteries = InstrumentsJSON.batterieRock;
        instrument = instrumentsBatteries[num]
        imgSrc = (num > 0 && num < 6) ? `../../images/instruments/batterie-rock/batterie${num}.jpg` : "../../images/instruments/batterie-rock/batterie1.jpg"
    } else if (props.categorie === "clavier") {
        const instrumentsClaviers = InstrumentsJSON.clavierMaitre;
        instrument = instrumentsClaviers[num]
        imgSrc = (num > 0 && num < 6) ? `../../images/instruments/clavier-maitre/clavier${num}.jpg` : "../../images/instruments/clavier-maitre/clavier1.jpg"
    } else if (props.categorie === "guitare") {
        const instrumentsGuitares = InstrumentsJSON.guitareElectrique;
        instrument = instrumentsGuitares[num]
        imgSrc = (num > 0 && num < 6) ? `../../images/instruments/guitare-electrique/guitare${num}.jpg` : "../../images/instruments/guitare-electrique/guitare1.jpg"
    } else {
        const instrumentsEffetsGuitare = InstrumentsJSON.effetsGuitareElectrique;
        instrument = instrumentsEffetsGuitare[num]
        imgSrc = (num > 0 && num < 6) ? `../../images/instruments/effet-guitare-electrique/effet${num}.jpg` : "../../images/instruments/effet-guitare-electrique/effet1.jpg"
    }

    var economisez = (parseInt(instrument.prixReel) - parseInt(instrument.prix)).toFixed(2) + '€'

    if (!instrument.reduction) var visible = "nonVisible"

    window.scrollTo(0, 0)

    return (
        <>
            <FilAriane categorie={props.categorie} />
            <div className="fiche-produit">
                <div className="container">
                    <div className="row fiche-produit--top">
                        <div className="fiche-produit--top--gauche">
                            <div className={`card--reduction center-align ${visible}`}>{instrument.reduction}</div>
                            <img src={imgSrc} alt="fiche produit batterie" />
                        </div>
                        <div className="fiche-produit--top--droite">
                            <p>
                                <span className="economie"><b>ÉCONOMISEZ {economisez || "200.00€"}</b></span>
                                <span className="ref"><b>RÉF : </b> 266186</span>
                            </p>
                            <h2>{instrument.marque + ' ' + instrument.nom || `PEARL DRUMS MASTER MAPLE COMPLETE ROCK 22" ICE BLUE OYSTER`}</h2>
                            <hr />
                            <div className="infos-complementaires">
                                <div className="infos-complementaires--disponibilite">
                                    <p><b>DISPONIBILITÉ</b></p>
                                    <span>{instrument.disponibiliteInternet && <><span className="rond-vert"></span><span>Stock Internet : <b>disponible immédiatement ! <br /> Commande avant 12h, expédié aujourd'hui.</b></span></> || <><span className="rond-orange"></span><span>Stock Internet : <b>Disponible sur commande, rupture momentanée.</b></span></>} <br />
                                    </span>
                                    <span>{instrument.disponibiliteParis && <><span className="rond-vert"></span><span>Stock Paris : <b>en stock sur place</b></span></> || <><span className="rond-orange"></span><span>Stock Paris : <b>non disponible sur place</b></span></>} <br />
                                    </span>
                                    <p><b>LIVRAISON</b></p>
                                    <span>Livraison standard : <b>gratuite</b></span>
                                    <p><b>GARANTIE</b></p>
                                    <span>Cet article est garantie <b>3 ans</b></span>
                                    <p><b>31 MAGASINS PARTENRAIRES WOODBRASS</b></p>
                                </div>
                                <div className="infos-complementaires--prix">
                                    <button className="button-ajouter valign-wrapper">
                                        <span className="material-icons">
                                            shopping_cart</span>
                                        <span>AJOUTER</span>
                                    </button>
                                    <span><b>PRIX WOODBRASS</b></span><br />
                                    <span className="prix">{instrument.prix || "1799.00€"}</span><br /><br />
                                    <span><b>PRIX CONSEILLÉ</b></span><br />
                                    <span>{instrument.prixReel || "1999.00€"}</span><br /><br />
                                    <span><b>ÉCONOMISEZ</b></span><br />
                                    <span>{economisez || "200.00€"}</span><br /><br />
                                    <span><b>ÉCO-PARTICIPATION</b></span><br />
                                    <span>0.50€</span>
                                </div> 
                            </div>
                            <div className="boutons-description-tel">
                                <Button texte="DESCRIPTION" />
                                <Button texte={<span className="material-icons">share</span>} />
                                <Button texte="02 61 88 01 40 (appel non surtaxé)" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="container">
                    <div className="fiche-produit--liste-check">
                        <ul className="liste-check--gauche">
                            <li>N°1 français de l'équipement musical</li>
                            <li>115 musiciens à votre service</li>
                            <li>Meilleur prix garanti</li>
                            <li>1400 marques et 400 000 articles en stock</li>
                        </ul>
                        <ul className="liste-check--droite">
                            <li>Livraison gratuite à partir de 49€</li>
                            <li>Paiement en 3 fois sans frais à partir de 149€</li>
                            <li>30 jours satisfait ou remboursé</li>
                            <li>Entreprise 100% Française : stock et sav en France</li>
                        </ul>
                    </div>
                </div>


                <div className="fiche-produit--description">
                    <div className="container">
                        <h3>DESCRIPTION</h3>
                        <div className="texteFlex">
                            <div className="textFlex--gauche">
                                Depuis 25 ans, les Pearl Masters ont toujours été synonymes d'excellence pour les
                                professionnels. Pearl rends hommage à cette longue histoire en créant la MCT, compromis
                                parfait entre la pure résonance des MMX et la puissante projection des MRX. Malgré des
                                caractéristiques Premium comme un érable nord-américain de grande qualité, la nouvelles
                            MCT devient la moins chère de toutes les Master. <br /><br />

                            SPECIFICATIONS : <br />
                            - Fût en érable nord-américain 6 plis/5,4 mm <br />
                            - Coquilles Master CL Bridge <br />
                            - Cerclages emboutis SuperHoop II <br />
                            </div>
                            <div className="textFlex--droite">
                                - Suspensions Optimount <br />
                            - Mini-muffler de grosse caisse intégré <br />
                            - Accastillage chrome <br /><br />
                            - Grosse caisse 22 x 18" percée avec mini-muffler <br />
                            - Toms 10 x 07" et 12 x 08" <br />
                            - Tom basse 16 x 14" <br />
                                <b>Caisse claire, stands, accessoires et cymbales non-fournis</b>
                            </div>
                        </div>
                        <br /><br /> <hr /><br />
                        <p><b>RÉFÉRENCE MARQUE:</b> MCT924XEPC-414</p>
                    </div>
                </div>


                <div className="fiche-produit--conseil">
                    <div className="container valign-wrapper">
                        <div className="row">
                            <h3 className="col s12 center-align">VOUS SOUHAITEZ UN CONSEIL, PLUS D'INFORMATIONS ? CONTACTEZ NOS SPÉCIALISTES !</h3>
                            <div className="conseils-commandes col s6">
                                <h4>Conseils et commandes par téléphone</h4>
                                <div className="conseillers">
                                    <img src={conseiller1} alt="conseiller 1" />
                                    <div>
                                        <span>Contactez Kevin au : 02 61 88 01 40 (appel non surtaxé)</span><br />
                                        <span>International : +33 2 57 88 00 74</span><br /><br />
                                        <span>Du lundi au vendredi de 9:00 à 18:00</span><br />
                                        <span>Le samedi de 10:00 à 18:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="woodbrass-stores col s6">
                                <h4>Woodbrass Stores Paris</h4>
                                <div className="conseillers">
                                    <img src={conseiller2} alt="conseiller 2" />
                                    <div>
                                        <span>Votre conseiller : Arnaud</span><br /><br />
                                        <span>Les Woodbrass Stores Paris Ouverts !!!</span><br />
                                        <span>Du mardi au vendredi 10:00 à 12:30 - 14:00 à 19:00</span><br />
                                        <span>Le samedi 10:00 à 19:00 sans interruption.</span><br />
                                        <span><b>Règles sanitaires appliquées et plan d'accès, cliquez ici</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FicheProduit;