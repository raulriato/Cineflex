import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TextWrapper from "./TextWrapper";

export default function Home() {

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        promise.then(({ data }) => {
            setMovieList(data);
        })
    }, []);


    return (
        <Content>
            <TextWrapper>
                Selecione um Filme
            </TextWrapper>
            <Movies>
                {movieList.map(movie => (
                    <Movie key={movie.id}>
                        <Link to={`/filme/${movie.id}`}>
                            <Img src={movie.posterURL} alt='' />
                        </Link>
                    </Movie>
                ))}
            </Movies>
        </Content>
    )
}

const Content = styled.div`
    width: 100vw;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Movies = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Movie = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 11px;

&:last-child {
    margin-bottom: 0;
}
`;

const Img = styled.img`
    width: 129px;
    height: 193px;
`;