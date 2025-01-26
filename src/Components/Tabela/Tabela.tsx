import { useState } from 'react';
import './styled.css';
import { Card } from '../Card/Card';


type Cliente = {
    id: number;
    nome: string;
    categoria: string;
    empresa: string;
    telefone: string;
    email: string;
    site: string;

}

type TabelaProps = {
    Nomes: Cliente[];
}

const Tabela: React.FC<TabelaProps> = ({ Nomes }) => {

    const [ContatoSelecionado, setContatoSelecionado] = useState<Cliente | null>(null);

    return(
        <>
        <div id='ContainerTabela'>
            <table className="Tabelamae">
                <thead>
                    <tr className="Cabecalhotabela"> 
                        <th>Nome do Cliente</th>
                        <th>Categoria</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {Nomes.map((item) => 
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.categoria}</td>
                        <td> 
                            <button className="Contato" onClick={() => setContatoSelecionado(item)}>Contato</button> 
                        </td> 
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
            {ContatoSelecionado && <Card Cliente={ContatoSelecionado} OnClose={() => setContatoSelecionado(null)} />}
        </>
    )
}

export { Tabela }