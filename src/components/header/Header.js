import React from 'react';
import Top from './Top'
import MenuSticky from './MenuSticky'
// import CategoriesNav from './CategoriesNav'

const Header = () => {

    return (
        <div>
            <Top />
            <MenuSticky />
            {/* <CategoriesNav /> */}
        </div>
    );
};

export default Header;