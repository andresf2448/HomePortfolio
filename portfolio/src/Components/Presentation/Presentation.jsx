import React from 'react';
import "./Presentation.css";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';

export default function Presentation({menu}) {
    return (
        <div className="image">
            <span className="prese">
                {/* <h2 className="eti1">EXPLORE BEYOND HORIZON</h2> */}
            </span>
            {/* <label className="prese">EXPLORE BEYOND HORIZON <br />Magna mundi referrentur quo, no rebum dignissim qui. <br />Per quodsi accusata id, agam labores.</label> */}
            
            <span className="conteinerList">
            {menu?<>
                <ul className="list1">
                    <li className="etiqueta"><Link to="/" className="link">All</Link></li>
                    <li className="etiqueta"><Link to="/" className="link">Branding</Link></li>
                    <li className="etiqueta"><Link to="/" className="link">Web</Link></li>
                    <li className="etiqueta"><Link to="/" className="link">Photography</Link></li>
                    <li className="etiqueta"><Link to="/" className="link">App</Link></li>
                    <li><BiSearch className="icon2"/></li>
                    
                </ul>
            </>:
                <div className="center"><div><h1 className="eti">EXPLORE BEYOND HORIZON</h1> <br /></div>
                <label className="eti2">Magna mundi referrentur quo, no rebum dignissim qui.</label> <br />
                <label className="eti2">Per quodsi accusata id, agam labores.</label> <br /> <br />
                <button className="btn">VIEW OUR WORK</button></div>}
            </span>
        </div>
    )
}
