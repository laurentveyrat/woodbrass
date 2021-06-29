import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/img/banniere-logo/logo-1.jpg"
import logo0 from "../../assets/img/banniere-logo/logo-0.jpg"
import logo2 from "../../assets/img/banniere-logo/logo-2.jpg"
import logo3 from "../../assets/img/banniere-logo/logo-3.jpg"
import logo4 from "../../assets/img/banniere-logo/logo-4.jpg"
import logo5 from "../../assets/img/banniere-logo/logo-5.jpg"
import logo6 from "../../assets/img/banniere-logo/logo-6.jpg"
import logo7 from "../../assets/img/banniere-logo/logo-7.jpg"
import logo8 from "../../assets/img/banniere-logo/logo-8.jpg"
import logo9 from "../../assets/img/banniere-logo/logo-9.jpg"
import './BanniereLogo.scss';

const BanniereLogo = (props) => {

    const [numImgActive, setNumImgActive] = useState(0)

    // var changeBanniereAuto = setTimeout(() => {
    //     setNumImgActive((numImgActive + 1) % 10)
    //     clearTimeout(changeBanniereAuto)
    // }, 4000)

    useEffect(() => {
        props.clickLogo(numImgActive)
    })

    function clickImage(e) {
        const numImage = parseInt(e.target.id.slice(4))

        e.target.classList.toggle("active")
        setNumImgActive(numImage)
    }

    function changeBanniere(direction) {
        let temp
        if (direction === "gauche") temp = (numImgActive + 9) % 10
        else if (direction === "droite") temp = (numImgActive + 1) % 10
        setNumImgActive(temp)
    }


    return (
        <div className="banniere-logo valign-wrapper">
            <span className="material-icons fleche-gauche" onClick={() => changeBanniere("gauche")}>arrow_back_ios</span>
            <img src={logo0} id="logo0" className={numImgActive === 0 && "active"} alt="logo0" onClick={(e) => clickImage(e)} />
            <img src={logo1} id="logo1" className={numImgActive === 1 && "active"} alt="logo1" onClick={(e) => clickImage(e)} />
            <img src={logo2} id="logo2" className={numImgActive === 2 && "active"} alt="logo2" onClick={(e) => clickImage(e)} />
            <img src={logo3} id="logo3" className={numImgActive === 3 && "active"} alt="logo3" onClick={(e) => clickImage(e)} />
            <img src={logo4} id="logo4" className={numImgActive === 4 && "active"} alt="logo4" onClick={(e) => clickImage(e)} />
            <img src={logo5} id="logo5" className={numImgActive === 5 && "active"} alt="logo5" onClick={(e) => clickImage(e)} />
            <img src={logo6} id="logo6" className={numImgActive === 6 && "active"} alt="logo6" onClick={(e) => clickImage(e)} />
            <img src={logo7} id="logo7" className={numImgActive === 7 && "active"} alt="logo7" onClick={(e) => clickImage(e)} />
            <img src={logo8} id="logo8" className={numImgActive === 8 && "active"} alt="logo8" onClick={(e) => clickImage(e)} />
            <img src={logo9} id="logo9" className={numImgActive === 9 && "active"} alt="logo9" onClick={(e) => clickImage(e)} />
            <span className="material-icons fleche-droite" onClick={() => changeBanniere("droite")}>arrow_forward_ios</span>
        </div>
    );
};

export default BanniereLogo;