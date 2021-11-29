import Head from 'next/head'
import Header from '../components/Header'
import { GetServerSideProps } from "next";
import Products, { ProductsProps } from "../components/Products";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  align-items: center;
  height: 90vh;
`

type Props = {
    feed: ProductsProps[]
}

const Home: React.FC<Props> = props => {
    return (
        <>
            <Head>
                <title>shopping cart</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main>
              {props.feed.map(products => (
                  <div key={products.id}>
                      <Products products={products} />
                  </div>
              ))}
            </Main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/products/find")
    const feed = await res.json()
    return {
        props: {feed},
    }
}

export default Home
