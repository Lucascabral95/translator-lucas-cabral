import "./Footer.scss"
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="contenedor-de-iconos">
                <div className="icono">
                    <a href="https://github.com/Lucascabral95" target="_blank">
                        <FaGithub className="icon" />
                    </a>
                </div>
                <div className="icono">
                    <a href="https://www.instagram.com/lucascabral95" target="_blank">
                        <FaInstagram className="icon" />
                    </a>
                </div>
                <div className="icono">
                    <a href="https://web.facebook.com/lucas.cabral3/" target="_blank">
                        <FaFacebook className="icon" />
                    </a>
                </div>
                <div className="icono">
                    <a href="https://www.linkedin.com/in/lucas-gast%C3%B3n-cabral/" target="_blank">
                        <FaLinkedin className="icon" />
                    </a>
                </div>
            </div>
            <div className="descripcion">
                <p> Passionately crafted by Lucas Cabral ❤🚀 </p>
            </div>
        </footer>
    )
}

export default Footer