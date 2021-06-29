import React from 'react';
import './ExtraitArticleBlog.scss'
import Button from '../button/Button'

import img1 from "../../assets/img/extrait-blog/img1.jpg"
import img2 from "../../assets/img/extrait-blog/img2.jpg"
import img3 from "../../assets/img/extrait-blog/img3.jpg"
import img4 from "../../assets/img/extrait-blog/img4.jpg"
import img5 from "../../assets/img/extrait-blog/img5.jpg"


const ExtraitArticleBlog = (props) => {
    var imgSrc
    switch (props.image) {
         case 1:
            imgSrc = <img className="img-extrait-blog" src={img1} alt="article blog" />
            break
         case 2:
            imgSrc = <img className="img-extrait-blog" src={img2} alt="article blog" />
            break
         case 3:
            imgSrc = <img className="img-extrait-blog" src={img3} alt="article blog" />
            break
         case 4:
            imgSrc = <img className="img-extrait-blog" src={img4} alt="article blog" />
            break
         case 5:
            imgSrc = <img className="img-extrait-blog" src={img5} alt="article blog" />
            break
        default: 
            imgSrc = <img className="img-extrait-blog" src={img1} alt="article blog" />
    }

    return (
        <div className="extrait-blog">
            {/* <img className="img-extrait-blog" src={imgSrc} alt="article blog" /> */}
            {imgSrc}
            <span className="titre-extrait-blog">{props.titre || "WALL OF DEATH, SATAN, MAD FOXES..."}</span>
            <div className="texte-extrait-blog">
                {props.description || "La France sort ses riffs. Longtemps tapies dans l’ombre des formations anglophones, de jeunes pousses fortement inspirées commencent à se faire entendre au-delà des frontières nationales et se mettent à rêver de desseins outre-Atlantique. Une résonance accrue par le travail acharné de labels passionnés (...)"}
            </div>
            <div className="button-lire-la-suite">
                <Button texte="Lire la suite" />
            </div>
        </div>
    );
};

export default ExtraitArticleBlog;