import styled from "styled-components";

export default function TicketsInfo({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 110px;
    padding-left: 28px;
    margin-bottom: 30px;

    strong {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    div {
        margin-top: 15px;
    }

    span {
        margin-top: 500px;
        font-size: 22px;
    }
`;