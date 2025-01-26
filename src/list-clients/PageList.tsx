import { useState, useEffect } from "react";
import { Header } from "../Components/Header/Header";
import { Input } from "../Components/Input/Input";
import { Tabela } from "../Components/Tabela/Tabela";

const PageList = () => {

    const [Nomes, setNomes] = useState<{ id:number, nome: string; categoria: string, empresa: string, telefone: string, email: string, site: string }[]>([]);
    const [filtroNome, setFiltroNome] = useState<string>("Nomes");
    const [Categorias, setCategorias] = useState<string>("Categorias")
    const [Pesquisa, setPesquisa] = useState("");

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await response.json();

                const DadosAPI = data.map((
                    user: { name: string; company: { bs: string, name: string}; 
                    phone: string; email: string; website: string }) => ({
                    
                    nome: user.name,
                    categoria: user.company.bs,
                    empresa: user.company.name,
                    telefone: user.phone,
                    email: user.email,
                    site: user.website,
                }))
                setNomes(DadosAPI);
            } catch (error) {
                console.error("Erro ao fazer a requisição:", error);
            }
        };

        fetchData();
    }, [])

    const dadosFiltrados = Nomes.filter((item) => {
        const FiltroAtivo = filtroNome === "Nomes" || item.nome === filtroNome;
        const FiltroCategorias = Categorias === "Categorias" || item.categoria === Categorias;
        const PesquisaAtiva = item.nome.toLowerCase().includes(Pesquisa.toLowerCase()) || item.categoria.toLowerCase().includes(Pesquisa.toLowerCase())
        return FiltroAtivo && PesquisaAtiva && FiltroCategorias;
    });

    return(
        <>
            <Header/>
            <Input 
            Nomes={Nomes}
            Categorias={[... new Set(Nomes.map((item) => ({ categoria: item.categoria} )))]}
            onFiltroChange={(filtro, tipo) => {
                if (tipo === "nome") setFiltroNome(filtro);
                if (tipo === "categoria") setCategorias(filtro);
            }}
            onPesquisaChange={setPesquisa}
            
            />
            <Tabela Nomes={dadosFiltrados}/>
        </>
    )
}

export { PageList }