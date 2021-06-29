import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { useHistory } from "react-router-dom"
// import { Link, useHistory } from "react-router-dom"
import './ConnexionCompte.scss'
// import M from 'materialize-css';


function ConnexionCompte(props) {
    const emailRef = useRef()
    const emailRefNewClient = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/account-profil')
        } catch (e) {
            setError('Failed to sign in')
            console.log(e)
        }
        setLoading(false)
    }

    async function handleSubmitNewClient(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            // await login(emailRef.current.value, passwordRef.current.value)
            // créer function dans AuthContext avec fetchSignInMethodsForEmail
            // pour vérifier si l'email rentré n'existe pas déjà
            history.push(`/create-account:${emailRefNewClient.current.value}`)
        } catch {
            setError('Failed to sign up')
            console.log('Failed to sign up')
        }
        setLoading(false)
    }

    

    return (
            <div className="connexionCompte">
                <div className="connexionCompte--monCompte">
                    <p>MON COMPTE</p>
                    {/* {error && (M.AutoInit(), M.toast({html: 'I am a toast!'}))} */}
                    {error && <span className="red-text"><strong>{error}</strong></span>}
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="ADRESSE EMAIL" ref={emailRef} required />
                        <label htmlFor="email"></label>
                        <input type="password" placeholder="MOT DE PASSE" ref={passwordRef} required/>
                        <label htmlFor="password"></label>
                        <button disabled={loading} className="btn waves-effect waves-light" type="submit">Connexion</button>
                    </form>
                </div>
                <div className="connexionCompte--nouveauClient">
                    
                    <p>NOUVEAU CLIENT ?<div className="btn-close" onClick={props.handleClickBanniereCompte}><span className="material-icons">close</span></div></p>
                    {error && <span className="red-text"><strong>{error}</strong></span>}
                    <form onSubmit={handleSubmitNewClient}>
                        <input type="email" placeholder="ADRESSE EMAIL" ref={emailRefNewClient} required />
                        <label htmlFor="email"></label>
                        <button disabled={loading} className="btn waves-effect waves-light" type="submit">Connexion</button>
                    </form>            
                </div>
            </div> 
    );
};

export default ConnexionCompte;