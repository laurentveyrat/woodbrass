import React, { useRef, useState } from 'react';
import "./CreateAccount.scss"

import { useAuth } from '../../context/AuthContext'
import { useHistory } from "react-router-dom"

import Button from '../button/Button'

const CreateAccount = (props) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Passwords do not match')
        // }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/account-profil')
        } catch (e) {
            setError(e.code + ` : Minimum 6 characters`)
        }
        setLoading(false)
    }

    return (
        <>
            <div className="container infos-supplementaires create-account">
            <p><strong>CRÉEZ VOTRE COMPTE</strong><span className="right champs-obligatoires">Champs obligatoires</span></p>
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col s6 infos-supplementaires--coordonnees">
                        
                        <label><b>Statut</b></label>
                        <select className="browser-default">
                            <option value="1" selected>Particulier</option>
                            <option value="2">Ecole / Administration / Association</option>
                            <option value="3">Entreprise</option>
                            <option value="4">Magasin de musique</option>
                        </select>   
                        <div className="row deux-colonnes">
                            <div className="input-field col s6">
                                <span>Prénom</span>
                                <input placeholder="" id="first_name" type="text" className="" />
                            </div>
                            <div className="input-field col s6">
                                <span>Nom</span>
                                <input placeholder="" id="last_name" type="text" className="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 adresse-email">
                                <span>Adresse email</span>
                                <input id="email" type="email" className="validate" 
                                    ref={emailRef} placeholder={props.email.slice(1)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 mot-de-passe">
                                <span>Mot de passe (min 6 characters)</span>
                                <input id="password" type="password" className="validate" ref={passwordRef} required />
                                {error && <span className="red-text"><strong>{error}</strong></span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 societe">
                                <span>Société (facultatif)</span>
                                <input id="societe" type="text" className="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 adresse">
                                <span>Adresse</span>
                                <input id="adresse" type="text" className="" />
                                {/* <span className="active-input"></span> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 complement-adresse">
                                <span>Complément d'adresse (facultatif)</span>
                                <input id="complement-adresse" type="text" className="" placeholder="exemples: n° immeuble, étage, interphone, lieu-dit..." />
                            </div>
                        </div>
                        <label><b>Pays</b></label>
                        <select className="browser-default">
                            <option value="1">Andorra</option>
                            <option value="2">Austria</option>
                            <option value="3">Belgium</option>
                            <option value="4">Bulgaria</option>
                            <option value="5">Canaries Island</option>
                            <option value="6">Croatia</option>
                            <option value="7">Cyprus</option>
                            <option value="8">Czech Republic</option>
                            <option value="9">Denmark</option>
                            <option value="10">Estonia</option>
                            <option value="11">Finland</option>
                            <option value="12">France (Corse)</option>
                            <option value="13" selected>France Metropolitaine</option>
                            <option value="14">Germany</option>
                            <option value="15">Greece</option>
                        </select> 
                        <div className="row deux-colonnes">
                            <div className="input-field col s6">
                                <span>Code postal</span>
                                <input placeholder="" id="code_postal" type="text" className="" />
                            </div>
                            <div className="input-field col s6">
                                <span>Ville</span>
                                <input placeholder="" id="ville" type="text" className="" />
                            </div>
                        </div>  
                    </div>
                    <div className="col s6 infos-supplementaires--photo">
                        <div className="row">
                            <div className="input-field col s12">
                                <span>Téléphone mobile pour un suivi gratuit de votre commande par sms </span>
                                <input id="tel" type="tel" className="" />
                            </div>
                        </div>
                        <div className="row deux-colonnes">
                            <div className="col s5 genre">
                                <label><b>Genre</b></label>
                                <select className="browser-default">
                                    <option value="1" selected></option>
                                    <option value="2" >Homme</option>
                                    <option value="3">Femme</option>
                                </select>  
                            </div>
                            <label className=""><b>Date de naissance</b></label>
                            <div className="col s6 date-de-naissance">
                                <div className="input-field col s4">
                                    <input placeholder="Jour" id="jour" type="text" className="" />
                                    <label htmlFor="jour"></label>
                                </div>
                                <div className="input-field col s4">
                                    <input placeholder="Mois" id="mois" type="text" className="" />
                                    <label htmlFor="mois"></label>
                                </div>
                                <div className="input-field col s4">
                                    <input placeholder="Année" id="annee" type="text" className="" />
                                    <label htmlFor="annee"></label>
                                </div>
                            </div>
                        </div>
                        <label><b>Comment nous avez-vous connu ?</b> (facultatif)</label>
                        <select className="browser-default">
                            <option value="1" selected></option>
                            <optgroup label="Réseaux Sociaux">
                                <option value="2">Application Woodbrass</option>
                                <option value="3">FaceBook</option>
                                <option value="4">Instagram</option>
                                <option value="5">Pinterest</option>
                                <option value="6">Twitter</option>
                            </optgroup>
                            <optgroup label="TV">
                                <option value="7">C8</option>
                                <option value="8">France2</option>
                                <option value="9">France5</option>
                                <option value="10">TMC</option>
                            </optgroup>
                            <optgroup label="Divers">
                                <option value="11">Bing</option>
                                <option value="12">Google</option>
                                <option value="13">Yahoo</option>
                            </optgroup>
                            <optgroup label="Radios">
                                <option value="14">Fun Radio</option>
                                <option value="15">Oui FM</option>
                                <option value="16">RTL2</option>
                            </optgroup>
                        </select>  
                        <div className="bouton-creer-compte right">
                            <Button texte="CREEZ VOTRE COMPTE" disabled={loading} type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateAccount;