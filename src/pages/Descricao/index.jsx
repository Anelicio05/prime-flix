import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Imagemdescricao, Center, TextDescricao, CardDescricao, Botao} from "../../style/style";

import api from "../../services/api";

function Descricao(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [filmes, setFilmes] = useState({})
    const [nota, setNota] = useState()

    useEffect(()=>{
        async function loadingDescricao(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'e05b949b2a9b2520e50b9182523068b2',
                    language: 'pt-Br',
                }
            })
            .then((response)=>{
                setFilmes(response.data)
                setNota(response.data.vote_average && response.data.vote_average.toFixed(1))
            })
            .catch(()=>{
                console.log("filme não encontrado")
                navigate("/", {replace: true})
                return
            })
        }
        loadingDescricao()
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primePlix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filmes.id)

        if(hasFilmes){
            alert("ESSE FILME JA ESTÁ SALVO")
            return
        }

        filmesSalvos.push(filmes)
        localStorage.setItem('@primePlix', JSON.stringify(filmesSalvos))
        alert("FILME SALVO COM SUCESSO")
    }

    return(
        <Center>
            <CardDescricao>
                <Imagemdescricao src={`https://image.tmdb.org/t/p/original${filmes.backdrop_path}`}/>
                <TextDescricao>Avaliação: {nota} / 10</TextDescricao>
                <TextDescricao>{filmes.overview}</TextDescricao>
                <Botao onClick={salvarFilme}>Salvar</Botao>
                <Botao>
                    <a target="blank" style={{textDecoration: 'none', color: "black"}} href={`https://www.youtube.com/results?search_query=${filmes.title} Trailer`}>
                        Trailer
                    </a>
                </Botao>
            </CardDescricao>
        </Center>
    )
}

export default Descricao 