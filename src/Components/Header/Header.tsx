import './styled.css';
import Logo from "../../assets/logo_fc.svg"

const Header = () => {

    return(
        <div className="spacebar">
            <img id="logo" src={Logo} alt="Ferreira Costa logo" />
            <h2 className="barra">|</h2>
            <h3 className="NomeProjeto">FCx Marketing</h3>
        </div>
    )
}

export { Header }