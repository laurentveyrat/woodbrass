import React from 'react';
import M from 'materialize-css';
import './Modal.scss'


const Modal = () => {

    M.AutoInit()

    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.modal');
    //     M.Modal.init(elems);
    //   });

    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.modal');
    //     setTimeout(() => {
    //         elems.classList.add('open')
    //     }, 2000)
    // });

    // document.addEventListener("DOMContentLoaded", () => {
    //     console.log("DOM entièrement chargé et analysé");
    //   });


    setTimeout(() => {
        var elems = document.querySelector('.modal');
        elems.classList.add('open')
    }, 2000)
    

    return (
        <>
             {/* Modal Trigger */}
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

               {/* Modal Structure */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                <h4>Woodbrass utilise des cookies.</h4>
                <p>Lors de votre visite sur notre site, nous pouvons recueillir certaines données vous concernant 
                via le dépôt de cookies. Ces cookies nous permettent d'optimiser votre expérience d'achat, de 
                personnaliser le contenu et les annonces ou encore d'analyser le trafic sur le site. 
                Nous partageons également des informations sur l'utilisation de notre site avec nos partenaires 
                de médias sociaux, de communication et d'analyse, qui peuvent combiner celles-ci avec d'autres 
                informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de 
                leurs services.</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">ACCEPTER ET FERMER</a>
                </div>
            </div>
        </>
    );
};

export default Modal;