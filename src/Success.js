import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import TextWrapper from "./TextWrapper";
import TicketsInfo from "./TicketsInfo";

export default function Success() {

    const location = useLocation();
    const reservationInfo = location.state.tickets;

    return (
        <Wrapper>
            <TextWrapper color='rgba(36, 122, 107, 1)'>
                Pedido feito com sucesso!
            </TextWrapper>
            <TicketsInfo>
                <strong>Filme e sessão</strong>
                <div><span>{reservationInfo.movie}</span></div>
                <div><span>{reservationInfo.date}  {reservationInfo.showTime}</span></div>
            </TicketsInfo>
            <TicketsInfo>
                <strong>Ingressos</strong>
                {reservationInfo.ids.map((seat, index) => (seat.length === 1 ? <div key={index}><span>Assento 0{seat}</span></div> : <div key={index}><span>Assento {seat}</span></div>))}
            </TicketsInfo>
            <TicketsInfo>
                <strong>Comprador</strong>
                <div><span>Nome: {reservationInfo.name}</span></div>
                <div><span>CPF: {reservationInfo.cpf}</span></div>
            </TicketsInfo>
            <Link to='/'>
                <Button>Voltar para Home</Button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;