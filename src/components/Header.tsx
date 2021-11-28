import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22.5%;
    max-width: 324px;
    min-width: 200px;
    margin: 30px auto;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export default function Header() {
    return(
        <>
            <Nav>
                <a href="https://github.com/souz4s"><Icon src="/img/github.svg" alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/pedro-souza-29084520b/"><Icon src="/img/linkedin.svg" alt="lnkedin icon" /></a>
                <Icon src="/img/shopping-cart.svg" alt="shoppig cart icon" />
            </Nav>
        </>
    )
}