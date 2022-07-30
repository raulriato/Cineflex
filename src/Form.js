import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({ ids, setIds }){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();
    function handleForm(e){
        e.preventDefault();

        const reservation = {
            ids,
            name,
            cpf
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', reservation);
        promise.then(() => navigate('/sucesso'));
    }

    return (
        <Wrapper>
            <form onSubmit={handleForm}>
                <div>
                    <span>Nome do comprador:</span>
                    <input type='text' placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <span>CPF do comprador:</span>
                    <input type='number' placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf} />
                </div>
                <button>Reservar assento(s)</button>
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

    button {
        width: 225px;
        height: 42px;
        border-radius: 3px;
        margin-top: 57px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(232, 131, 58, 1);
        border: none;
    }
`;