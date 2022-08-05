import styled from "styled-components";
import track from "../imgs/track.svg";

export default function Login() {
    return (
        <Main>
            <div>
                <img src={track} />
            </div>
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button>Entrar</button>
            </form>
            <p>Não tem uma conta? Cadastre-se!</p>
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
            color: #dbdbdb;
            padding: 1.1rem;
        }

        button {
            background: #52b6ff;
            border-radius: 4.63636px;

            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            color: #ffffff;
        }
    }

    p {
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52b6ff;
        margin-top: 2.6rem;
    }
`;
