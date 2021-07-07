import { Fragment } from "react";
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navar() {
    return (
        <Fragment>
            <nav className="NavContent">
                <label className="logo">Hola</label>
                <div className="NavContainer">
                    <span><label className="head">All</label></span>
                    <span><label className="head">Branding</label></span>
                    <span><label className="head">Web</label></span>
                    <span><label className="head">Photography</label></span>
                    <span><label className="head">App</label></span>
                    <span><BiSearch className="icon"/></span>
                </div>
                <span><GiHamburgerMenu className="iconMenu"/></span>
            </nav>
        </Fragment>
    )
}
