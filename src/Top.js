import styled from "styled-components";

export default function Top() {
    return (
        <Title>
            CINEFLEX
        </Title>
    )
}

const Title = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

    width: 100%;
    height: 67px;
    background-color: rgba(195, 207, 217, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    color: rgba(232, 131, 58, 1);
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`;