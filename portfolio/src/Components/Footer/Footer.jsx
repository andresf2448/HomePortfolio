import '../Footer/Footer.css';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { BiBasketball } from 'react-icons/bi';
import { FaGooglePlusG } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { AiOutlineCopyright } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className="containerFooter">
            <div className="btnFooter"><button className="btn1">Show Me More</button></div> <br />
            <div className="dateFooter"><AiOutlineCopyright /> <label>2016 - <b className="color">Sneak</b> All Right Reserved</label></div>
            <div className="footerIcons"><ImFacebook className="iconFooter1"/> <FaTwitter className="iconFooter2"/> <BiBasketball className="iconFooter3"/> <FaGooglePlusG className="iconFooter4"/> <ImYoutube2 className="iconFooter5"/></div>
        </div>
    )
}
