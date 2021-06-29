import React, { useState } from 'react';
import "./Top.scss";

import franceFlag from "../../assets/img/france-flag.png"

const Top = () => {
    const msgTop = [
        'E-COMMERCE FRANÇAIS',
        'PAIEMENT EN 3 FOIS SANS FRAIS A PARTIR DE 149€',
        'DEVENEZ AMBASSADEUR WOODBRASS'
    ]

    const [NumeroMsg, setNumeroMsg] = useState(0)

    function handleClickChevronRight() {
        setNumeroMsg((NumeroMsg + 1) % 3)
    }

    function handleClickChevronLeft() {
        setNumeroMsg((NumeroMsg + 2) % 3)
    }

    setTimeout(() => {
        handleClickChevronRight()
    }, 3000)

    return (
        <div className="top">
            <div className="top--left">
                <span>BLOG</span>
                <span>GUIDES D'ACHAT</span>
                <span>MAGASINS</span>
            </div>
            <div className="top--center">
                <span className="material-icons" onClick={handleClickChevronLeft}>chevron_left</span>
                <span className="valign-wrapper message-center">
                    {NumeroMsg === 0 && <img src={franceFlag} alt="france flag" />}
                    {msgTop[NumeroMsg]}
                </span>
                <span className="material-icons" onClick={handleClickChevronRight}>chevron_right</span>
            </div>
            <div className="top--right">
                <span className="top--right--conseils">CONSEILS :<strong className="number">02 61 88 01 40</strong></span>
                <span className="valign-wrapper languages">
                    <img src={franceFlag} alt="france flag" /><strong>FR</strong>
                    <span className="material-icons">expand_more</span>
                </span>
            </div>
        </div>
    );
};

export default Top;