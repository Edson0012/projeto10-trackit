import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import ContextApi from "../contextApi/ContextApi";
import bob from "../imgs/bob.svg";
import elipse from "../imgs/elipse.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Header from "../Header";
import trashCan from "../imgs/trashCan.svg";

export default function Habits() {
    const { user } = useContext(ContextApi);

    console.log(user.token);

    const [add, setAdd] = useState(false);
    const [name, setName] = useState("");
    const [day, setDay] = useState([]);
    const [list, setList] = useState([]);

    function addform(event) {
        event.preventDefault();
        setAdd(true);
    }

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    function handleSubmit(event) {
        event.preventDefault();
        const body = {
            name: name,
            days: day,
        };

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body,
            config
        );

        promise
            .then((res) => {
                setAdd(false);
            })
            .catch((err) => {
                alert("ERRO");
            });
    }

    function handleButton(e) {
        e.preventDefault();
        e.target.classList.toggle("cinza");

        const dentro = day.includes(e.target.id);

        if (dentro) {
            const fora = day.filter((res) => res !== e.target.id);
            setDay(fora);
        } else {
            setDay([...day, e.target.id]);
        }

        console.log(day);
    }

    useEffect(() => {
        const promise = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            config
        );

        promise.then((res) => {
            console.log(res.data);
            setList(res.data);
        });
    }, []);

    return (
        <Main>
            <Header />
            <div className="habits">
                <h2>Meus hábitos</h2>
                <button onClick={addform}>+</button>
            </div>
            <form>
                {add && (
                    <div className="creating-habits">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="nome do hábito"
                            onChange={(event) => setName(event.target.value)}
                        ></input>
                        <div className="box-button">
                            <button id="0" onClick={handleButton}>
                                D
                            </button>
                            <button id="1" onClick={handleButton}>
                                S
                            </button>
                            <button id="2" onClick={handleButton}>
                                T
                            </button>
                            <button id="3" onClick={handleButton}>
                                Q
                            </button>
                            <button id="4" onClick={handleButton}>
                                Q
                            </button>
                            <button id="5" onClick={handleButton}>
                                S
                            </button>
                            <button id="6" onClick={handleButton}>
                                S
                            </button>
                        </div>
                        <div className="send-habits">
                            <p onClick={() => setAdd(false)}>Cancelar</p>
                            <button onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                )}
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                </p>

                <div className="your-habits">
                    <div>
                        <p>Ler 1 capítulo de livro</p>
                        <div className="box-button">
                            <button id="0" onClick={handleButton}>
                                D
                            </button>
                            <button id="1" onClick={handleButton}>
                                S
                            </button>
                            <button id="2" onClick={handleButton}>
                                T
                            </button>
                            <button id="3" onClick={handleButton}>
                                Q
                            </button>
                            <button id="4" onClick={handleButton}>
                                Q
                            </button>
                            <button id="5" onClick={handleButton}>
                                S
                            </button>
                            <button id="6" onClick={handleButton}>
                                S
                            </button>
                        </div>
                    </div>
                    <img src={trashCan} />
                </div>
            </form>
            <footer>
                <h3>Hábitos</h3>
                <img src={elipse} />
                <h3>Histórico</h3>
            </footer>
        </Main>
    );
}

const Main = styled.main`
    width: 100%;
    height: 67.7rem;
    display: flex;
    flex-direction: column;
    background: #e5e5e5;

    .habits {
        width: 100%;
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
            border-radius: 0.463636rem;
            border: none;
            cursor: pointer;

            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            line-height: 3.4rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }

    form {
        width: 100%;
        padding: 1.7rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        p {
            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 1.7976rem;
            line-height: 2.2rem;

            color: #666666;
        }

        .creating-habits {
            width: 34rem;
            height: 18rem;
            background: #ffffff;
            border-radius: 5px;

            display: flex;
            flex-direction: column;
            padding: 1.9rem;
            gap: 0.8rem;

            input {
                width: 30.3rem;
                height: 4.5rem;
                border: 2px solid;
                border-color: rgba(212, 212, 212, 1);
                border-radius: 0.5rem;
                background: #ffffff;
                font-family: "Lexend Deca";
                font-size: 1.9rem;

                padding: 1.1rem;

                ::placeholder {
                    color: rgba(212, 212, 212, 1);
                    font-family: "Lexend Deca";
                    font-size: 1.9rem;
                }
            }

            .box-button {
                gap: 0.4rem;
                display: flex;

                button.cinza {
                    background-color: #cfcfcf;
                    color: #ffffff;
                }

                button {
                    font-family: "Lexend Deca";
                    width: 3rem;
                    height: 3rem;
                    border: 2px solid rgba(212, 212, 212, 1);
                    border-radius: 0.5rem;
                    background-color: #ffffff;
                    color: rgba(212, 212, 212, 1);
                    cursor: pointer;
                }
            }

            .send-habits {
                width: 100%;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 2.3rem;

                p {
                    font-family: "Lexend Deca";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.5976rem;
                    line-height: 2rem;
                    color: #52b6ff;
                    cursor: pointer;
                }

                button {
                    width: 8.4rem;
                    height: 3.5rem;

                    background: #52b6ff;
                    border-radius: 4.63636px;
                    border: none;
                    color: #ffffff;

                    font-family: "Lexend Deca";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 3.4rem;
                    cursor: pointer;
                }
            }
        }
    }

    .your-habits {
        width: 34rem;
        height: 9.1rem;
        background-color: #ffffff;
        border-radius: 0.5rem;
        padding: 1.3rem;

        display: flex;
        justify-content: space-between;

        img {
            width: 1.3rem;
            height: 1.5rem;
        }

        .box-button {
            gap: 0.4rem;
            display: flex;

            button.cinza {
                background-color: #cfcfcf;
                color: #ffffff;
            }

            button {
                font-family: "Lexend Deca";
                width: 3rem;
                height: 3rem;
                border: 2px solid rgba(212, 212, 212, 1);
                border-radius: 0.5rem;
                background-color: #ffffff;
                color: rgba(212, 212, 212, 1);
                cursor: pointer;
            }
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
