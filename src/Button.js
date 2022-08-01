import styled from "styled-components";

export default function Button({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.button`
    width: 225px;
    height: 42px;
    border-radius: 3px;
    margin-top: 57px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(232, 131, 58, 1);
    border: none;
`;