import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagarm_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} />
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Product</li>
                <li>Ofices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagarm_icon} />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} />
                </div>
                <div className="footer-icon-container">
                    <img src={pinterest_icon} />
                </div>
            </div>
            <div className="footer-copyright">
                    <hr/>
                    <p>Copyright @ 2024 - All Reserved</p>
                </div>
        </div>
    )
}

export default Footer