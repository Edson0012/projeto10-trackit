import styled from "styled-components";
import bob from "./imgs/bob.svg";
import { useContext } from "react";
import ContextApi from "./contextApi/ContextApi";

export default function Header() {
    const { user } = useContext(ContextApi);
    return (
        <Topo>
            <h1>TrackIt</h1>
            <img src={user.image} />
        </Topo>
    );
}

const Topo = styled.header`
    width: 100%;
    height: 7rem;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem;

    img {
        height: 100%;
    }

    h1 {
        font-family: "Playball";
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #ffffff;
    }
`;
