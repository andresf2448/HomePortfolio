import { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navar() {
    const [menu, setMenu] = useState(false);
    
    function viewMenu(){
        setMenu(!menu);
    }

    return (
        <Fragment>
            <nav className="NavContent">
                <label className="logo">Hola</label>
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

            {menu?<>
                <ul className="list1">
                    <li><Link to="/" className="link">All</Link></li>
                    <li><Link to="/" className="link">Branding</Link></li>
                    <li><Link to="/" className="link">Web</Link></li>
                    <li><Link to="/" className="link">Photography</Link></li>
                    <li><Link to="/" className="link">App</Link></li>
                    <li><BiSearch className="icon"/></li>
                </ul>
            </>:null}

            
        </Fragment>
    )
}