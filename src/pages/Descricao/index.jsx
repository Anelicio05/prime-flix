import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Imagemdescricao, Center, TextDescricao, CardDescricao} from "../../style/style";

import api from "../../services/api";

function Descricao(){
    const {id} = useParams()
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
            })
        }
        loadingDescricao()
    }, [])


    return(
        <Center>
            <CardDescricao>
                <Imagemdescricao src={`https://image.tmdb.org/t/p/original${filmes.backdrop_path}`}/>
                <TextDescricao>Avaliação: {nota} / 10</TextDescricao>
                <TextDescricao>{filmes.overview}</TextDescricao>
            </CardDescricao>
        </Center>
    )
}

export default Descricao 