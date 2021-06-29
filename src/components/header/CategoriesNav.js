import React from 'react';
import { Link } from "react-router-dom";
import "./CategoriesNav.scss"

import CategoriesJSON from "../../json/categories.json"


const CategoriesNav = () => {

    var categoriesTab = Object.values(CategoriesJSON);
    var categories = categoriesTab.map((categorie, index) => {
        return (
            <Link key={index} to={categorie.link} style={{ color: "black" }}>
                <li className="categoriesNav--categorie">{categorie.nom}</li>
            </Link>
        )
    })

    return (
        <ul className="categoriesNav">
            {categories}
        </ul>
    );
};

export default CategoriesNav;