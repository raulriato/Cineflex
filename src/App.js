import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Top from "./Top";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";

export default function App(){
    return(
    <>
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:movieId' element={<Movie />} />
                <Route path='/filme/:movieId/sessao/:SessionId' element={<Session />} />
                <Route path='/sucesso' element={<Success />} />
            </Routes>
        </BrowserRouter>
        <GlobalStyle />
    </>
    );
}