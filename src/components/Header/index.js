import React from "react";
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix"/>    
                </a>
            </div>
            <div className="header--user">
                <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-2.png" alt="Usuário" />
            </div>
        </header>
    );
}

export default Header;