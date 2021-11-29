import styled from "styled-components";
import Image from "next/image";
import Router from "next/router"

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 324px;
    min-width: 200px;
    margin: 30px auto;

    .back,
    .cart {
        cursor: pointer;
    }
`

export default function CartHeader() {
    return (
        <>
            <Head>
                <Image className="back" onClick={() => Router.back()} src="/img/arrow-left.svg" alt="back icon" width={24} height={24} />
                <Image className="cart" src="/img/shopping-cart.svg" alt="shopping cart icon" width={24} height={24} />
            </Head>
        </>
    )
}