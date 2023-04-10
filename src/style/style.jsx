import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 15px;
    padding: 1rem;
    color: white;
`

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 2rem;
    text-align: center;
`

export const Card = styled.article`
    width: 300px;
`

export const Acessar = styled.button`
    width: 300px;
    border: none;
    padding: 1rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    background-color: #0059ff;
`

export const ImagemEdit = styled.img`
    width: 300px;
    max-width: 100%;
    max-height: 600px;
    object-fit: cover;
    display: block;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const CardDescricao = styled.div`
    max-width: 800px;
    background-color: #0059ff;
    border-radius: 10px;
`

export const Imagemdescricao = styled.img`
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
export const TextDescricao = styled.p`
    font-size: 20px;
    padding: 1rem;
    color: white;
`