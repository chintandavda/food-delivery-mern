import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rem veniam magnam aliquam pariatur nisi minima,
                        magni excepturi! Eum perspiciatis odio tempore dolores
                        eius iusto, recusandae saepe voluptatum, omnis
                        distinctio amet.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91 88585 *****</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 Tomato</p>
        </div>
    );
};

export default Footer;
