import { Fragment } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navar() {
    return (
        <Fragment>
            <nav className="NavContent">
                <label className="logo">Hola</label>
                <div className="NavContainer">
                    <ul className="list">
                        <li><Link className="link">All</Link></li>
                        <li><Link className="link">Branding</Link></li>
                        <li><Link className="link">Web</Link></li>
                        <li><Link className="link">Photography</Link></li>
                        <li><Link className="link">App</Link></li>
                        <li><BiSearch className="icon"/></li>
                    </ul>
                    <GiHamburgerMenu className="iconMenu"/>
                </div>
            </nav>
            
        </Fragment>
    )
}