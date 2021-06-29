import React, { useState } from 'react';
import './Chatbot.scss'

const Chatbot = () => {
    
    const [optionsHide, setOptionsHide] = useState('')
    const [choixUtilisateur, setChoixUtilisateur] = useState()
    const [messageWoodbrass, setMessageWoodbrass] = useState()
    const [isProgressBarOpen, setProgressBarOpen] = useState('hide')

    function messageUtilisateur(msg, numOption) {
        setProgressBarOpen('')
        setTimeout(() => reponseWoodbrass(numOption), 4000)

        return (<><div className="block-messages--utilisateur">
                    <div className="message utilisateur right">
                        <span>{msg}</span>
                    </div>
                </div>
                <div className="horaire-message">
                    <span className="right grey-text">{todayMessage}</span>
                </div></>)
    }

    function reponseWoodbrass(numOption) {
        setProgressBarOpen('hide')

        let msgTemp
        if (numOption === 1) {
            msgTemp = <span>
                        La musique continue ! <br/><br/> Woodbrass reste sur scène pendant cette période de confinement et 
                        vous livre gratuitement dès 49€ d'achat en France Métropolitaine.<br/><br/>
                        Nos équipes restent disponibles pour toutes vos questions au 02 61 88 01 40<br/><br/>
                        + d'infos ici : <a href='https://www.woodbrass.com/musique-continue' target='_blank' rel='noopener noreferrer'><u>https://www.woodbrass.com/musique-continue</u></a>
                      </span>
        }
        else if (numOption === 2) {
            msgTemp = <span>
                        Nous vous accueillons du <strong>mardi</strong> au <strong>vendredi</strong> de 10:00 à 12:30 et de 14:00 à 19:00<br/><br/>
                        Le samedi de 10:00 à 19:00 <strong>SANS INTERRUPTION.</strong> <br/><br/>
                        Notre équipe reste joignable au <strong>02.61.88.01.40</strong> Choix <strong>2</strong> après l'annonce d'accueil.<br/><br/>
                        +d'info ici : <a href='https://www.woodbrass.com/magasin-de-musique' target='_blank' rel='noopener noreferrer'><u>https://www.woodbrass.com/magasin-de-musique</u></a>
                      </span>
        }
        else if (numOption === 3) {
            msgTemp = <span>
                        Voici quelques éléments de réponse
                      </span>
        }
        else if (numOption === 4) {
            msgTemp = <span>
                        Quelle est la bonne adresse e-mail pour vous contacter ?
                      </span>
        }

    
        setMessageWoodbrass(<>
            <span className="logo-woodbrass">
                <img src="/favicon_woodbrass.jpg" alt="logo woodbrass" />
            </span>
            <div className="block-messages">
                <span className="grey-text"><strong>Des musiciens à votre service !</strong></span>
                <div className="message">
                    {msgTemp}
                </div>
                <div>
                    <span className="grey-text">{todayMessage}</span>
                </div>
            </div></>)
    }
    

    function handleClickOption(num) {
        setOptionsHide('hide')
        
        if (num === 1) {
            setChoixUtilisateur(messageUtilisateur('Info Covid-19', 1))
        }
        else if (num === 2) {
            setChoixUtilisateur(messageUtilisateur('Infos Magasins', 2))
        }
        else if (num === 3) {
            setChoixUtilisateur(messageUtilisateur('Suivi de commande/SAV', 3))
        }
        else if (num === 4) {
            setChoixUtilisateur(messageUtilisateur('Un Conseil ou Avis', 4))
        }
    }

    var blockMessagesOptions = 'block-messages--options ' + optionsHide

    const today = new Date(Date.now())
    const todayMessage = today.getHours() + ':' + ((today.getMinutes() <= 10) ? ('0' + today.getMinutes()) : today.getMinutes())

    return (
        <div className="fenetre-chatbot z-depth-3">
            <div className="fenetre-chatbot--top">
                <span>Conversations</span>
            </div>
            <div className="fenetre-chatbot--main-content">
                <span className="logo-woodbrass">
                    <img src="/favicon_woodbrass.jpg" alt="logo woodbrass" />
                </span>
                <div className="block-messages">
                    <div className="message">
                        <span>Avez-vous des questions ? Je me ferai un plaisir de vous aider.</span>
                    </div>
                    <div className="message">
                        <span>Vous souhaitez un <strong>conseil</strong> sur le choix d'un instrument, souhaitez vous une  
                        <strong> aide</strong> sur une de vos commandes ou plus d'information sur notre actualité ?</span>
                    </div>
                    <div className={blockMessagesOptions} >
                        <button id="option1" className="message-options" onClick={() => handleClickOption(1)}>
                            <span>Info Covid-19</span>
                        </button>
                        <button id="option2" className="message-options" onClick={() => handleClickOption(2)}>
                            <span>Infos Magasins</span>
                        </button>
                        <button id="option3" className="message-options" onClick={() => handleClickOption(3)}>
                            <span>Suivi de commande/SAV</span>
                        </button>
                        <button id="option4" className="message-options" onClick={() => handleClickOption(4)}>
                            <span>Un Conseil ou Avis</span>
                        </button>
                    </div>
                    {choixUtilisateur}
                </div>
                <div className={`progress blue lighten-4 ${isProgressBarOpen}`} style={{width: '20%', margin: '10px auto'}} >
                    <div className="indeterminate blue"></div>
                </div>
                {messageWoodbrass}
            </div>
            <div className="fenetre-chatbot--bottom-textarea">
                <input type="text" placeholder="Choisir une option" />
                <span className="material-icons">send</span>
            </div>
        </div>
    );
};

export default Chatbot;