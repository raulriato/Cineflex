import styled from "styled-components";

export default function SeatStates() {
    return (
        <Wrapper>
            <div>
                <SeatState isAvailable={true} picked={true} />
                <p>Selecionado</p>
            </div>
            <div>
                <SeatState isAvailable={true} />
                <p>Disponível</p>
            </div>
            <div>
                <SeatState isAvailable={false} />
                <p>Indisponível</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        color: rgba(78, 90, 101, 1);
    }
`;

const SeatState = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${({ isAvailable, picked }) => !isAvailable ? 'rgba(251, 225, 146, 1)' : picked ? 'rgba(141, 215, 207, 1)' : 'rgba(195, 207, 217, 1)'};
    border: 1px solid ${({ isAvailable, picked }) => !isAvailable ? 'rgba(247, 197, 43, 1)' : picked ? 'rgba(26, 174, 158, 1)' : 'rgba(128, 143, 157, 1)'};
`;