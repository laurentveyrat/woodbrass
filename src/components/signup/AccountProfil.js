import React, { useState } from 'react';
import "./AccountProfil.scss"
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

const AccountProfil = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/')
        } catch {
            setError('Failed to log out')
        }
    }


    return (
        <>
            <div className="nav-categories s12">
                <div className="nav-categories--content">
                    <div className="container">
                        <div className="photo-profil"></div>
                        <div className="text-modify-profil">
                            <p><strong>BIENVENUE</strong></p>
                            <h4>{currentUser.email}</h4>
                            {/* https://firebase.google.com/docs/auth/web/manage-users */}
                            <div className="button-modifier-profil-deconnexion">
                                <button className="btn modifier-profil">MODIFIER MON PROFIL</button>
                                <button className="btn deconnexion" onClick={handleLogout}>
                                    <span className="material-icons">logout</span>DECONNEXION
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="container nav-categories--content--grid">
                        <div className="row">
                            <div className="col s3">
                                <button className="btn">MES COMMANDES</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">DONNEZ VOTRE AVIS !</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">CONTACTEZ-NOUS</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">POINTS DE FIDELITE</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3">
                                <button className="btn">CODES PROMO</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">COURS DE MUSIQUE</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">TELECHARGEMENTS</button>
                            </div>
                            <div className="col s3">
                                <button className="btn">MODES D'EMPLOI</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container infos-supplementaires">
                <div className="row">
                    <div className="col s6 infos-supplementaires--coordonnees">
                        <p><strong>VOS COORDONNÉES</strong></p>
                        <label><strong>Statut</strong></label>
                        <select className="browser-default">
                            <option value="1" selected>Particulier</option>
                            <option value="2">Ecole / Administration / Association</option>
                            <option value="3">Entreprise</option>
                            <option value="4">Magasin de musique</option>
                        </select>
                        <div className="row deux-colonnes">
                            <div className="input-field col s6">
                                <input placeholder="" id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Prénom</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="" id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Nom</label>
                            </div>
                        </div>
                        <div className="row deux-colonnes">
                            <div className="col s6">
                                <label><strong>Genre</strong></label>
                                <select className="browser-default">
                                    <option value="1" selected></option>
                                    <option value="2" >Homme</option>
                                    <option value="3">Femme</option>
                                </select>
                            </div>
                            <label className=""><strong>Date de naissance</strong></label>
                            <div className="col s6">
                                <div className="input-field col s4">
                                    <input placeholder="Jour" id="jour" type="text" className="validate" />
                                    <label htmlFor="jour"></label>
                                </div>
                                <div className="input-field col s4">
                                    <input placeholder="Mois" id="mois" type="text" className="validate" />
                                    <label htmlFor="mois"></label>
                                </div>
                                <div className="input-field col s4">
                                    <input placeholder="Année" id="annee" type="text" className="validate" />
                                    <label htmlFor="annee"></label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="email" type="email" className="validate" placeholder="" />
                                <label htmlFor="email">Adresse email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="tel" type="tel" className="validate" placeholder="" />
                                <label htmlFor="tel">Téléphone mobile pour un suivi gratuit de votre commande par sms </label>
                            </div>
                        </div>
                        <div className="instruments-checkbox">


                            <div className="row">
                                <span><strong>Quel(s) instrument(s) ou materiel(s) utilisez-vous ?</strong></span>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Accordéon</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Audiopro</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Basson - Fagott</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Batterie</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Contrebasse</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Cors</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Directeur - Ecole de musique</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Eclairage</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Eveil Musical</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Flute à bec</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Guitare Acoustique</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Guitare Basse</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Guitare Electrique</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Harmonica</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Hautbois</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Librairie Musicale</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Logiciel</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Clarinette</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Saxophone</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Trompette</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Trombone</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Equipement DJ</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Percussions Ethniques</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Piano</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Professeur - Ecole de musique</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Professeur de solfège</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Sonorisation</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Synthétiseur</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Tuba - Euphonium</span>
                                    </label>
                                </div>
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Violon - Alto</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 ">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Violoncelle</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 infos-supplementaires--photo">
                        <div className="photo-profil">
                            <p><strong>PHOTO DE PROFIL</strong></p>
                            <div className="carre-noir"></div>
                        </div>
                        <div className="adresse">
                            <p><strong>ADRESSE PRINCIPALE</strong></p>
                            <div className="carre-noir">
                            </div>
                        </div>
                        <div className="changer-mot-de-passe">
                            <p><strong>CHANGER DE MOT DE PASSE</strong></p>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="old-password" type="password" className="validate" />
                                    <label htmlFor="old-password">Mot de passe actuel</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="new-password" type="password" className="validate" />
                                    <label htmlFor="new-password">Nouveau mot de passe</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="confirm-password" type="password" className="validate" />
                                    <label htmlFor="confirm-password">Confirmation du nouveau mot de passe</label>
                                </div>
                            </div>
                            <button className="btn-small blue darken-3 right">ENREGISTRER NOUVEAU MOT DE PASSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountProfil;