import React from "react";

const Footer = () => {
    return(
        <footer className="footer1">
            <ul className="ListFooter">
                <li className="ItemFooter">Contatos</li>
                <li className="ItemFooter"> <a href="/contato" className="linkFooter">Sobre nós</a></li>
                <li className="ItemFooter">Instagram</li>
                <li className="ItemFooter">Facebook</li>
            </ul>
            <ul className="ListFooter2">
                <li className="ItemFooter">Agende uma consulta</li>
                <li className="ItemFooter"> <a href="/perfil" className="linkFooter">Acesse seu perfil</a></li>
                <li className="ItemFooter">Fique atenta ao calendario</li>
                <li className="ItemFooter"><a href="/" className="linkFooter">Voltar para a parte de cima do site</a></li>
            </ul>
        </footer>
    )
}
export default Footer;