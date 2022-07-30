import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextWrapper from "./TextWrapper";
import Seat from "./Seat";

export default function Seats() {

    const { sessionId } = useParams();
    const [session, setSession] = useState({});
    const [seats, setSeats] = useState([]);
    


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(({ data }) => {
            setSession(data);
            setSeats(data.seats);
        })
    }, [sessionId]);

    return (
        <Wrapper>
            <TextWrapper>Selecione o(s) assento(s)</TextWrapper>
            <SeatsWrapper>
                {seats.map(seat => (
                    <Seat key={seat.id} isAvailable={seat.isAvailable} seat={seat} >{seat.name}</Seat>
                ))}
            </SeatsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: 67px 0 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SeatsWrapper = styled.div`
    
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SeatColors = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;