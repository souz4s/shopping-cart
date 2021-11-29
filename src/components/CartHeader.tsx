/* eslint-disable @next/next/link-passhref */
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link"

const Head = styled.div`
    display: flex;
    width: 80%;
    max-width: 324px;
    min-width: 200px;
    margin: 30px auto;

    .back {
        cursor: pointer;
    }
`

export default function CartHeader() {
    return (
        <>
            <Head>
                <Link href="/">
                    <Image className="back" src="/img/arrow-left.svg" alt="back icon" width={24} height={24} />
                </Link>
            </Head>
        </>
    )
}