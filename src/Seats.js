import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextWrapper from "./TextWrapper";
import Seat from "./Seat";
import SeatStates from "./SeatStates";
import Form from "./Form";
import Footer from "./Footer";

export default function Seats() {

    const { sessionId } = useParams();
    const [session, setSession] = useState({});
    const [seats, setSeats] = useState([]);
    const [ids, setIds] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(({ data }) => {
            setSession(data);
            setSeats(data.seats);
        })
    }, [sessionId]);

    return (
        <Wrapper>
            <TextWrapper height='80px'>Selecione o(s) assento(s)</TextWrapper>
            <SeatsWrapper>
                {seats.map(seat => (
                    <Seat key={seat.id}
                    isAvailable={seat.isAvailable}
                    seat={seat}
                    ids={ids}
                    setIds={setIds}
                    id={seat.id}
                    >{seat.name}</Seat>
                ))}
            </SeatsWrapper>
            <SeatStates />
            <Form ids={ids} setIds={setIds} />
            <Footer image={session.movie?.posterURL} name={session.movie?.title} session={`${session.day?.weekday} - ${session.name}`} />
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

