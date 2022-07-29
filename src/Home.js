import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Home() {

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
        promise.then(({ data }) => {
            setMovieList(data);
        })
    }, []);


    return (
        <SHome>
            <Text>
                <p>Selecione um Filme</p>
            </Text>
            <Movies>
                {movieList.map(movie => (
                    <Movie>
                        <Link to={`/filme/${movie.id}`}>
                            <Img src={movie.posterURL} alt='' />
                        </Link>
                    </Movie>
                ))}
            </Movies>
        </SHome>
    )
}

const SHome = styled.div`
    width: 100vw;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
    }
`;

const Movies = styled.div`
    width: 85%;
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
    margin-bottom: 110px;

&:last-child {
    margin-bottom: 0;
}
`;

const Img = styled.img`
    width: 129px;
    height: 193px;
`;