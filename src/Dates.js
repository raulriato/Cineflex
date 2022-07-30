import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TextWrapper from "./TextWrapper";
import Footer from "./Footer";

export default function Dates(){

    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);
        promise.then(({ data }) => {
            setMovie(data);
        })
    }, [movieId]);

    return (
        <Wrapper>
            <TextWrapper>
                Selecione o Horário
            </TextWrapper>
            {movie.days?.map(day => (
                <Date key={day.id}>
                    <p>{`${day.weekday} - ${day.date}`}</p>
                    <div>
                        {day.showtimes.map(time => (
                            <Link key={time.id} to={`/sessao/${time.id}`}>
                                <button>{time.name}</button>
                            </Link>
                        ))}
                    </div>
                </Date>
            ))}
            <Footer image={movie.posterURL} name={movie.title} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: 67px 0 120px;
`;

const Date = styled.div`
    width: 100%;
    height: 90px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 23px;
    
    p {
        font-size: 20px;
    }

    button {
        width: 83px;
        height: 43px;
        background-color: rgba(232, 131, 58, 1);
        border: none;
        border-radius: 3px;
        color: rgba(255, 255, 255, 1);
        margin-right: 9px;
    }
`;