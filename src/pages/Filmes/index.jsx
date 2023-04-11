import { useState,useEffect } from "react"
import { Center, Title, Lista, Botao} from "../../style/style"
import { Link } from "react-router-dom"

function Filmes(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const listaFilmes = localStorage.getItem("@primePlix")
        const filmesSanlvos = JSON.parse(listaFilmes) || []
        setFilmes(filmesSanlvos)
    }, [])

    function excluirFilme(idFilme){
        let filtraFilme = filmes.filter((item)=>{
            return (item.id !== idFilme)
        })

        setFilmes(filtraFilme)
        localStorage.setItem("@primePlix", JSON.stringify(filtraFilme))
    }

    return(
        <Center>
            <div>
                <Title>Lista de Filmes</Title>
                <ul>
                    {filmes.map((filme)=>{
                        return(
                            <Lista key={filme.id}>
                                <Title>{filme.title}</Title>
                                <Link style={{color: 'white'}} to={`/descricao/${filme.id}`}>Ver detalhes</Link>
                                <Botao onClick={()=>excluirFilme(filme.id)}>Excluir</Botao>
                            </Lista>
                        )
                    })}
                </ul>
            </div>
        </Center>
    )
}

export default Filmes