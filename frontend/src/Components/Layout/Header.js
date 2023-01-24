import React from "react";
import logo from "../../assets/logo.png"

const Header = ()=>{

    return(
       <header>
        <nav className="navbar navbar-light bg-white">
            <a className="navbar-brand" href="#">
                <img src={logo} width="230" height="auto" alt=""/>
            </a>
        </nav>
       </header>
    )
}

export default Header;