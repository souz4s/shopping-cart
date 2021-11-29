import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    width: 100vw;
    height: 50px;
    background: #6FCF97;
    border: none;
    bottom: 0px;
    cursor: pointer;
    transition: 0.5s;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #FFFDFD;


    &:hover {
        background: #27AE60;
    }
`

export default function CartFooter() {
    return (
        <>
            <Button>COMPRAR</Button>
        </>
    )
}