import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePage() {
    const [singleItem, setSingleItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                setSingleItem(res.data);
                setLoading(false);
                // console.log(res.data);
                // console.log(category[0]);
            }
        });
        console.log(singleItem);
    }, []);
    return (
        <>
            {" "}
            {loading ? (
                <h1>loading.....</h1>
            ) : (
                <>
                    <Container id="single-page">
                        <Section>
                            <Content>
                                <Top>
                                    <ImgContainer>
                                        <Img
                                            src={singleItem.image}
                                            alt="image"
                                        />
                                    </ImgContainer>
                                    <Title>{singleItem.title}</Title>
                                </Top>

                                <Description>
                                    {singleItem.description}
                                </Description>
                                <Bottom>
                                    <Price>{singleItem.price}</Price>
                                    <Order>Order Now</Order>
                                </Bottom>
                                <Rating>
                                    <IconContainer>
                                        <Img
                                            src={require("../../assets/images/star.png")}
                                            alt="image"
                                        />
                                    </IconContainer>
                                    <Rate>{singleItem.rating.rate}</Rate>
                                </Rating>
                                {/* <Count>{singleItem.rating.count}</Count> */}
                            </Content>
                        </Section>
                    </Container>
                </>
            )}
        </>
    );
}

export default SinglePage;
const Container = styled.div`
    background-color: #d1d0cb;
    width: 100%;
    height: 100vh;
    padding: 60px 0;
`;
const Section = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const Content = styled.div`
    width: 40%;
    margin: 60px auto;
    border: 1px solid #000;
    padding: 30px;
    border-radius: 10px;
    background-color: #fff;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ImgContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    height: 100%;
`;
const Title = styled.h4`
    margin-left: 20px;
    color: #000;
    font-weight: 500;
    font-size: 18px;
`;
const Description = styled.p`
    margin-top: 10px;
    font-size: 15px;
    color: #000;
    margin-bottom: 25px;
`;
const Price = styled.span`
    color: red;
    font-size: 25px;
    font-weight: 800;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 5px;
`;
const Rating = styled.div`
    margin-top: 30px;
    display: flex;
`;
const Rate = styled.h4`
    font-size: 20px;
`;
const Count = styled.div``;
const IconContainer = styled.div`
    width: 30px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const Order = styled.div`
    color: red;
    font-size: 23px;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 5px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;
