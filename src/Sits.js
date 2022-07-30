import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sits(){
    return (
        <Session>
            <Link to='/sucesso'>
                <h1>Escolheu a sessão, agora escolhe a cadeira e segue a vida</h1>
            </Link>
        </Session>
    )
}

const Session = styled.div`
    margin-top: 67px;
`;