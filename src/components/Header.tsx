import Image from "next/image";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22.5%;
    max-width: 324px;
    min-width: 200px;
    margin: 30px auto;
`

const Cart = styled.div`
    cursor: pointer;
`

export default function Header() {
    return(
        <>
            <Nav>
                <a href="https://github.com/souz4s"><Image src="/img/github.svg" alt="github icon" width={24} height={24} /></a>
                <a href="https://www.linkedin.com/in/pedro-souza-29084520b/"><Image src="/img/linkedin.svg" alt="lnkedin icon" width={24} height={24} /></a>
                <Cart>
                    <Image src="/img/shopping-cart.svg" alt="shoppig cart icon" width={24} height={24} />
                </Cart>
            </Nav>
        </>
    )
}