import { useEffect, useState } from "react"
import api from "../../services/api"

import { Title, ImagemEdit, Center, Card, Acessar } from "../../style/style"
import gif from '../../../src/assets/giphy.gif'

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                api_key: 'e05b949b2a9b2520e50b9182523068b2',
                language: 'pt-Br',
                page: 1,
                }
            })

            //console.log(response.data.results)
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes()

    }, [])

    if(loading){
        return(
            <Center>
                <div>
                    <img src={gif} alt="loading" style={{width: '100px', height: '100px'}}/>
                    <Title>Carregando...</Title>
                </div>
            </Center>
        )
    }

    return(
        <div>
           <Center>
                {filmes.map((filme) =>{
                    return(
                        <Card key={filme.id}>
                            <Title>{filme.title}</Title>
                            <ImagemEdit src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                            <a href={`/descricao/${filme.id}`}>
                                <Acessar>
                                    Acessar
                                </Acessar>
                            </a>
                        </Card>
                    )
                })}
           </Center>
        </div>
    )
}

export default Home