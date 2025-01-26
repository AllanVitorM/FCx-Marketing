import "./styles.css"

type CardProps = {
    Cliente: {
        nome: string;
        empresa: string;
        telefone: string;
        email: string;
        site: string;
    };
    OnClose: () => void;
}

const Card: React.FC<CardProps> = ({Cliente, OnClose}) => {
    return(
        <>
            <div id="Overlay">
                <div className="ContainerCard">
                    <button className="BotaoFechar" onClick={OnClose} >X</button>
                    <h4>Cliente: {Cliente.nome} </h4>
                    <h4>Empresa: {Cliente.empresa} </h4>
                    <h4>Telefone: {Cliente.telefone} </h4>
                    <h4>Email: {Cliente.email} </h4>
                    <h4>Site: {Cliente.site} </h4>
                </div>
            </div>
        </>
    )

}

export { Card }