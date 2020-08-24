import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/" className=""> 
                <img className="Logo" src={Logo} alt="logo thingsflix"></img>
            </a>
            <ButtonLink className="ButtonLink" href="#">Novo Vídeo</ButtonLink>
        </nav>
    );   
}

export default Menu;
