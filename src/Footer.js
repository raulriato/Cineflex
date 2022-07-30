import styled from "styled-components";


export default function Footer({ image, name, session}){

    return (
        <Wrapper>
            <Border>
                <img src={image} alt="" />
            </Border>
            <Info>
                <p>{name}</p>
                <p>{session}</p>
            </Info>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 100%;
    height: 117px;
    background-color: rgba(223, 230, 237, 1);
    border-top: 1px solid rgba(158, 173, 186, 1);
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const Border = styled.div`
    width: 64px;
    height: 89px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 14px 0 10px;

    img {
        width: 48px;
        height: 72px;
    }
`;

const Info = styled.div`
    font-size: 26px;
`;