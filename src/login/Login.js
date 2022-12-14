import styled from "styled-components";
import track from "../imgs/track.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ContextApi from "../contextApi/ContextApi";

export default function Login() {
    const { setUser } = useContext(ContextApi);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(event) {
        event.preventDefault();

        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function sendForm(event) {
        event.preventDefault();
        const body = {
            ...form,
        };

        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                body
            )
            .then((res) => {
                setUser(res.data);
                navigate("/habits");
            });
    }

    return (
        <Main>
            <div>
                <img src={track} />
            </div>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={handleSubmit}
                ></input>
                <input
                    type="text"
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={handleSubmit}
                ></input>
                <button onClick={sendForm}>Entrar</button>
                <p onClick={() => navigate("/register")}>
                    Não tem uma conta? Cadastre-se!
                </p>
            </form>
        </Main>
    );
}

const Main = styled.main`
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    height: 67.7rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.6rem;

        input,
        button {
            width: 30.3rem;
            height: 4.5rem;
        }

        input {
            background: #ffffff;
            border: 1px solid #d5d5d5;
            border-radius: 5px;

            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: black;
            padding: 1.1rem;

            ::placeholder {
                color: #dbdbdb;
            }
        }

        button {
            background: #52b6ff;
            border-radius: 4.63636px;

            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            color: #ffffff;
            border: none;
            cursor: pointer;
        }
    }

    p {
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52b6ff;
        margin-top: 2.6rem;
        cursor: pointer;
    }
`;
