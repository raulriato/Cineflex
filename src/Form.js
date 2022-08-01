import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Form({ ids, movie, date, showTime, pickedSeats }) {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();

        if (pickedSeats.length === 0) {
            alert('Selecione um assento para reservar')
        } else {

            const reservation = {
                ids,
                name,
                cpf
            }

            const tickets = {
                ...reservation,
                ids: pickedSeats,
                movie,
                date,
                showTime,
            }

            const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', reservation);
            promise.then(() => navigate('/sucesso', {
                state: {
                    tickets
                }
            }));
        }
    }

    return (
        <Wrapper>
            <form onSubmit={handleForm}>
                <div>
                    <span>Nome do comprador:</span>
                    <input type='text'
                        placeholder="Digite seu nome..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div>
                    <span>CPF do comprador:</span>
                    <input type='text'
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        placeholder="Digite seu CPF..."
                        onChange={(e) => setCpf(e.target.value)}
                        value={cpf}
                        required
                    />
                </div>
                <Button>Reservar assento(s)</Button>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin-top: 42px;

    form {
        width: 87.2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-top: 7px;
    }

    input {
        width: 100%;
        height: 51px;
        border: 1px solid rgba(212, 212, 212, 1);
        padding-left: 18px;
        margin-top: 5px;
    }

    input::placeholder {
        font-style: italic;
        color: rgba(175, 175, 175, 1);
    }

    input:focus {
        outline: 0;
    }
`;