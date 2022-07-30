import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Top from "./Top";
import Success from "./Success";
import Dates from "./Dates";
import Sits from "./Sits";

export default function App(){
    return(
    <>
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:movieId' element={<Dates />} />
                <Route path='/sessao/:sessionId' element={<Sits />} />
                <Route path='/sucesso' element={<Success />} />
            </Routes>
        </BrowserRouter>
        <GlobalStyle />
    </>
    );
}