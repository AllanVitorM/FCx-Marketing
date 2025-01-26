import './styled.css';
import Searchicon from "../../assets/search-line.png"

type InputProps = {
    Nomes: { nome: string;}[];
    Categorias: {categoria: string;}[];
    onFiltroChange: (filtro: string, tipo: "nome" | "categoria") => void;
    onPesquisaChange: (pesquisa: string) => void;
}


const Input: React.FC<InputProps> = ({Nomes, Categorias, onPesquisaChange, onFiltroChange}) => {

    const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const input = document.querySelector<HTMLInputElement>(".InputPesquisa");
        if(input) {
            onPesquisaChange(input.value)
        }
    };

    return(
        <>
        <div id="InputContainer">
            <form>
                <input className="InputPesquisa" placeholder="Buscar por empresas e categorias" type="text"/>
                <button className="search" type="button" onClick={handleSearchClick}>
                    <img className="SearchIcon" src={Searchicon} alt="Icone de Pesquisa" />
                </button>
            </form>

        <div id="Dropbox">
                <select name="Nomes" className="Nomes" onChange={(e) => onFiltroChange(e.target.value, "nome")}>
                    <option selected>Nomes</option>
                    {Nomes.map((item, index) =>        
                        <option key={index} value={item.nome}>{item.nome}</option>    
                    )}
                </select>
                <select name="Categoria" className="Categoria" onChange={(e) => onFiltroChange(e.target.value, "categoria")}>
                    <option value="Categorias">Categoria</option>
                    {Categorias.map((item, index) =>        
                        <option key={index} value={item.categoria}>{item.categoria}</option>    
                    )}
                </select>
            </div>
        </div>
        
        </>
    )
}

export { Input }