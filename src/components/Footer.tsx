import styled from "styled-components";

const Phrase = styled.h1`
    position: absolute;
    width: 100vw;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 11.5942px;
    line-height: 14px;
    color: #000000;
    text-align: center;
    bottom: 10%;

`

export default function Footer() {
    return (
        <>
            <Phrase>your style anytime</Phrase>
        </>
    )
}