import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./components/Header";
import Descricao from "./pages/Descricao";

function RoutApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes/:id" element={<Filmes/>}/>
                <Route path="/descricao/:id" element={<Descricao/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutApp