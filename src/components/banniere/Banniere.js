import React, { useState } from 'react';
import './Banniere.scss';
import banniere0 from "../../assets/img/banniere/banniere-0.jpg"
import banniere1 from "../../assets/img/banniere/banniere-1.jpg"
import banniere2 from "../../assets/img/banniere/banniere-2.jpg"
import banniere3 from "../../assets/img/banniere/banniere-3.jpg"
import banniere4 from "../../assets/img/banniere/banniere-4.jpg"
import banniere5 from "../../assets/img/banniere/banniere-5.jpg"
import banniere6 from "../../assets/img/banniere/banniere-6.jpg"
import banniere7 from "../../assets/img/banniere/banniere-7.jpg"
import banniere8 from "../../assets/img/banniere/banniere-8.jpg"
import banniere9 from "../../assets/img/banniere/banniere-9.jpg"
import BanniereLogo from "./BanniereLogo"

const Banniere = () => {
    const [banniereSrc, setBanniereSrc] = useState(banniere0)

    function clickLogo(num) {
        switch (num) {
            case 0: 
                setBanniereSrc(banniere0)
                break
            case 1: 
                setBanniereSrc(banniere1)
                break
            case 2: 
                setBanniereSrc(banniere2)
                break
            case 3: 
                setBanniereSrc(banniere3)
                break
            case 4: 
                setBanniereSrc(banniere4)
                break
            case 5: 
                setBanniereSrc(banniere5)
                break
            case 6: 
                setBanniereSrc(banniere6)
                break
            case 7: 
                setBanniereSrc(banniere7)
                break
            case 8: 
                setBanniereSrc(banniere8)
                break
            case 9: 
                setBanniereSrc(banniere9)
                break
            default: setBanniereSrc(banniere0)
        }
    }

    return (
        <div>
            <img className="banniere" src={banniereSrc} alt="banniere" />
            <BanniereLogo clickLogo={clickLogo} />
        </div>
    );
};

export default Banniere;