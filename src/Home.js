import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {

    return (
        <Shome>
            <Link to='/filme/1'>
                <h1>Bora gastar?</h1>
            </Link>
        </Shome>
    )
}

const Shome = styled.div`
    margin-top: 67px;
`;