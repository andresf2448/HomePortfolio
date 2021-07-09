import { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImLibrary } from 'react-icons/im';
import Presentation from "../Presentation/Presentation";

export default function Navar() {
    const [menu, setMenu] = useState(false);
    
    function viewMenu(){
        setMenu(!menu);
    }

    return (
        <Fragment>
            <nav className="NavContent">
                <ImLibrary className="logo"/>
                <div className="NavContainer">
                    <ul className="list">
                        <li><Link to="/" className="link">All</Link></li>
                        <li><Link to="/" className="link">Branding</Link></li>
                        <li><Link to="/" className="link">Web</Link></li>
                        <li><Link to="/" className="link">Photography</Link></li>
                        <li><Link to="/" className="link">App</Link></li>
                        <li><BiSearch className="icon"/></li>
                    </ul>
                    <button onClick={viewMenu} className="iconMenu1"><GiHamburgerMenu className="iconMenu"/></button>
                </div>
            </nav>

            <Presentation menu={menu}/>

            
        </Fragment>
    )
}