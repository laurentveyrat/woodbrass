import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./MenuSticky.scss"
import CategoriesNav from './CategoriesNav'
import ConnexionCompte from '../signup/ConnexionCompte'

import logoWoodbrass from "../../assets/img/woodbrass-20-ans-musique.png"


const MenuSticky = () => {
    const [banniereOpen, setBanniereOpen] = useState(false)

    useEffect(() => {
        
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};
    
        // Get the navbar, categoriesNav, 
        var navbar = document.getElementById("navbar");
        var categoriesNav = document.querySelector(".categories-nav");        
    
        // Get the offset position of the navbar
        // var sticky = navbar.offsetTop;
        var sticky = 40;
        
    
        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
                if (banniereOpen) {
                    categoriesNav.classList.add("rajoutMarginBanniere")
                } else {
                    categoriesNav.classList.remove("rajoutMarginBanniere")
                    categoriesNav.classList.add("rajoutMargin")
                }
                  
            } else {
                navbar.classList.remove("sticky")
                categoriesNav.classList.remove("rajoutMarginBanniere", "rajoutMargin")
            }
        }
    })

    function handleClickBanniereCompte() {
        setBanniereOpen(!banniereOpen)
    }

    return (
        <>  
            <div id="navbar" >
                <div className={`banniere-connexion-inscription` + (banniereOpen ? '' : " hide")} >
                    <ConnexionCompte handleClickBanniereCompte={handleClickBanniereCompte}/>
                </div>
                <div className="menuSticky">
                    <button className="btn btn-mobile-menu hide-on-med-and-up">MENU</button>
                    <Link to="/" className="menuSticky--logo-woodbrass">
                        <img className="logo-woodbrass" src={logoWoodbrass} alt="france flag" />
                    </Link>
                    <div className="menuSticky--searchBar valign-wrapper">
                        <form>
                            <div className="input-field ">
                                <input id="search" type="search" placeholder="Je cherche un piano" required />
                                <label className="label-icon" htmlFor="search"  >
                                    {/* <i class="material-icons">search</i> */}
                                </label>
                                {/* <i class="material-icons">close</i> */}
                                <span className="bouton-rechercher">
                                    <button className="btn hide-on-med-and-down">
                                        <span className="material-icons">search</span>
                                        <span>RECHERCHER</span> 
                                    </button>
                                    <span className="material-icons black-text hide-on-large-only show-on-medium-and-down">search</span>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="menuSticky--newDestockRecon">
                        <span className="menuSticky--nouveau">NOUVEAU</span>
                        <span className="menuSticky--destockage">DÉSTOCKAGE</span>
                        <span className="menuSticky--reconditionne">RECONDITIONNÉ</span>
                    </div>
                    <div className="menuSticky--comptePanier">
                        <div className="menuSticky--comptePanier--aPropos hide-on-small-only">
                            <span className="material-icons">info_outline</span>
                                    A PROPOS
                        </div>
                        <div className="menuSticky--comptePanier--compte" onClick={handleClickBanniereCompte}>
                                <span className="material-icons">account_circle</span><span className="hide-on-small-only">COMPTE</span> 
                        </div>
                        <div className="menuSticky--comptePanier--panier">
                            <span className="material-icons">shopping_basket</span>
                            <span className="hide-on-small-only">PANIER</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-nav hide-on-small-only">
                <CategoriesNav />
            </div>
        </>
    );
};

export default MenuSticky;