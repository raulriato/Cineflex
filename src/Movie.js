import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Movie(){

    const { movieId } = useParams();
    
    return (
        <Smovie>
            <Link to='/filme/1/sessao/1'>
                <h1>Escolheu o filme, agora escolhe a Sessão</h1>
            </Link>
        </Smovie>
    )
}

const Smovie = styled.div`
    margin-top: 67px;
`;