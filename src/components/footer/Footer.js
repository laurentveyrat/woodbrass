import React from 'react';
import './Footer.scss';

import logoFacebook from "../../assets/img/social-media/facebook.png"
import logoInstagram from "../../assets/img/social-media/instagram.png"
import logoTwitter from "../../assets/img/social-media/twitter.png"
import logoLinkedin from "../../assets/img/social-media/linkedin.png"
import logoYoutube from "../../assets/img/social-media/youtube.png"
import logoPinterest from "../../assets/img/social-media/pinterest.png"


const Footer = () => {
    return (
        <footer>
            <div className="container premiere-ligne-footer">
                <div className="leftFlex">
                    <p>RECEVEZ NOS OFFRES EXCLUSIVES</p>
                    {/* <form className="email-offres-exclusives" action="">
                        <input id="email" type="email" value="VOTRE ADRESSE EMAIL" />
                        <label htmlFor="email" placeholder="VOTRE ADRESSE EMAIL"></label>
                    </form> */}
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">VOTRE ADRESSE EMAIL</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                </div>
                                <button className="button-email-go col s2">GO</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightFlex">
                    <p>SUIVEZ NOUS SUR</p>
                    <div className="icons-social-media valign-wrapper">
                        <button className="button button-blog">BLOG</button>
                        <span className="valign-wrapper"><img src={logoFacebook} alt="logo facebook" /></span>
                        <span className="valign-wrapper"><img src={logoInstagram} alt="logo instagram" /></span>
                        <span className="valign-wrapper"><img src={logoTwitter} alt="logo twitter" /></span>
                        <span className="valign-wrapper"><img src={logoLinkedin} alt="logo linkedin" /></span>
                        <span className="valign-wrapper"><img src={logoYoutube} alt="logo youtube" /></span>
                        <span className="valign-wrapper"><img src={logoPinterest} alt="logo pinterest" /></span>
                    </div>
                </div>
            </div>
            <div className="container deuxieme-ligne-footer">
                <div className="deuxieme-ligne-footer--contacts">
                    <p>CONTACTS</p>
                    <span className="colorBlue">Conseil et commande par téléphone :</span><br />
                    <span>Du lundi au vendredi de 9:00 à 18:00 <br />
                    Samedi de 10:00 à 18:00 <br />
                    France Métropolitaine :
                    </span> <br />
                    <span className="colorBlue">02 61 88 01 40</span><br /><br />
                    <span>Belgique, Suisse, International</span><br />
                    <span className="colorBlue">+33 2 57 88 00 74</span><br /><br />
                    <span className="colorBlue">Suivi de commande et SAV :</span><br />
                    <span>Contactez-nous depuis votre <strong>compte client</strong>  ou consultez directement notre F.A.Q. en cliquant <strong>ici</strong></span>

                </div>
                <div className="deuxieme-ligne-footer--horaires-ouvertures">
                    <p>LES WOODBRASS STORES PARIS SONT OUVERTS !!!</p>
                    <span><strong>Du mardi au vendredi :</strong><br />
                    10:00 à 12:30 - 14:00 à 19:00 <br />
                        <strong>Le samedi :</strong> 10:00 à 19:00 sans interruption <br /><br />
                    Guitares - Percussions: <br />
                    182 avenue Jean Jaurès 75019 Paris. <br /><br />
                    Claviers - home studio - DJ - sonorisation - éclairage: <br />
                    184 avenue Jean Jaurès 75019 Paris. <br /><br />
                    Instruments à vent - librairie musicale: <br />
                    172 avenue Jean Jaurès 75019 Paris. <br /><br />
                    EN SAVOIR+
                    </span>
                </div>
                <div className="deuxieme-ligne-footer--utiles">
                    <p>UTILES !</p>
                    <span>Qui sommes nous <br /><br />
                    Frais de port et délais de livraison <br />
                    Vous avez un site Internet, un blog ? <br />
                    Vous êtes YouTubeur ou influenceur ?
                    Générez des revenus avec Woodbrass ! <br /> <br />
                    Conditions Générales de Vente <br /><br />
                    Mentions légales <br /><br />
                    Plan du site <br /> <br />
                    Programme de fidélité Woodbrass <br /> <br />
                    Woodbrass recrute ! <br /><br />
                    Gestion des cookies <br /><br />
                    Vos données personnelles
                    </span>
                </div>
                <div className="deuxieme-ligne-footer--trustpilot">
                    <p>TRUSTPILOT</p>
                    <span>Produit conforme et livré à temps</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;