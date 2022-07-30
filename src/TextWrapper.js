import styled from "styled-components";

export default function TextWrapper({ children }){
    return (
        <Text>{children}</Text>
    )
}

const Text = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;