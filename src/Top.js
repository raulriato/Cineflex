import styled from "styled-components";

export default function Top() {
    return (
        <Title>
            CINEFLEX
        </Title>
    )
}

const Title = styled.div`
    width: 100%;
    height: 67px;
    background-color: rgba(195, 207, 217, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    color: rgba(232, 131, 58, 1);
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`;