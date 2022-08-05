import styled from "styled-components";
import track from "../imgs/track.svg";

export default function Login() {
    return (
        <main>
            <img src={track} />
            <section>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
            </section>
        </main>
    );
}
