import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success() {
    return (
        <Ssuccess>
            <Link to='/'>
                <h1>Boa carai, comprou o ingresso, agora volta pra Home</h1>
            </Link>
        </Ssuccess>
    )
}

const Ssuccess = styled.div`
    margin-top: 67px;
`;