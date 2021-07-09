import { TiEquals } from 'react-icons/ti';
import { TiThLarge } from 'react-icons/ti';
import { Link } from "react-router-dom"
import '../Intermediate/Intermediate.css';

export default function Intermediate() {
    return (
        <div>
            <div className="interIcons"> <TiThLarge className="icons1"/>  <TiEquals className="icons2"/></div>

            <div className="interList">
                <ul className="listInter">
                    <li><Link to="/" className="link1">All</Link></li>
                    <li><Link to="/" className="link1">Branding</Link></li>
                    <li><Link to="/" className="link1">Web</Link></li>
                    <li><Link to="/" className="link1">Photography</Link></li>
                    <li><Link to="/" className="link1">App</Link></li>
                </ul>
            </div>
        </div>
    )
}
