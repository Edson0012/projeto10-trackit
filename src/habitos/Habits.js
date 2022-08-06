import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import ContextApi from "../contextApi/ContextApi";
import bob from "../imgs/bob.svg";
import elipse from "../imgs/elipse.svg";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";

export default function Habits() {
    const { token } = useContext(ContextApi);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token} `,
            },
        };

        const body = {
            name: "",
            days: [1, 3, 5],
        };

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body,
            config
        );

        promise.then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <>
            <Header>
                <h1>TrackIt</h1>
                <img src={bob} />
            </Header>
            <Main>
                <div>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </div>
                <section>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um
                        hábito para começar a trackear!
                    </p>
                </section>
                <footer>
                    <h3>Hábitos</h3>
                    <img src={elipse} />
                    <h3>Histórico</h3>
                </footer>
            </Main>
        </>
    );
}

const Header = styled.header`
    width: 100%;
    height: 7rem;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem;

    h1 {
        font-family: "Playball";
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #ffffff;
    }
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    background-color: azure;
    flex-direction: column;

    div {
        width: 100%;
        height: 7rem;
        background-color: blanchedalmond;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.7rem;

        h2 {
            font-family: "Lexend Deca";
            font-weight: 400;
            font-size: 2.2976rem;
            line-height: 2.9rem;
            color: #126ba5;
        }

        button {
            width: 4rem;
            height: 3.5rem;
            background: #52b6ff;
            border-radius: 4.63636px;
            border: none;

            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 2.6976rem;
            line-height: 3.4rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    section {
        width: 100%;
        padding: 1.7rem;

        p {
            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 1.7976rem;
            line-height: 2.2rem;

            color: #666666;
        }
    }

    footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: aliceblue;
        position: fixed;
        bottom: 0;
        left: 0;

        h3 {
            font-family: "Lexend Deca";
            font-weight: 400;
            font-size: 1.7976rem;
            line-height: 2.2rem;

            color: #52b6ff;
        }
    }
`;
