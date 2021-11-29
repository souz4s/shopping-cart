import styled from "styled-components";
import Image from "next/image"

export type ProductsProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;

}

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    text-align: center;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 204.34px;
    height: 130.64px;
`

const Description = styled.div`
    display: grid;
    justify-items: center;

    .name {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 11.5942px;
        line-height: 14px;
        color: #000000;
        margin: 0;
    }

    .description {
        width: 80px;
        font-family: Roboto;
        font-style: italic;
        font-weight: 300;
        font-size: 11.5942px;
        line-height: 14px;
        text-align: center;
        color: #000000;
    }

    .price {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;       
        color: #000000;
        
    }
`
const CartButton = styled.button`
    width: 144.93px;
    height: 28.99px;
    border: 1px solid #6FCF97;
    box-sizing: border-box;
    border-radius: 3.62319px;
    background: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background: #6FCF97;
    }
`

const Teste = styled.img``

const Products: React.FC<{products: ProductsProps}> = ({ products }) => {
    return (
        <>
            <Layout>
                <Card>
                    <Content>
                        <Description>
                            <p className="name">{products.name}</p>
                            <p className="description">{products.description}</p>
                            <p className="price">R$ {products.price}</p>
                        </Description>
                        <Teste src={products.image_url} alt="blouse" />
                    </Content>
                    <CartButton>
                        <Image src="/img/shopping-cart.svg" alt="shopping cart icon" width={14} height={14}/>
                    </CartButton>
                </Card>
            </Layout>
        </>
    )
}

export default Products