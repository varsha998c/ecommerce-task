import React from "react";
import styled from "styled-components";
import Bg from "../../assets/images/spotlight.png";
import Header from "../general/Header";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function Spotlight() {
    return (
        <Container>
            <Header />
            <Section>
                <Left>
                    <ImgContainer>
                        <Img
                            src={require("../../assets/images/images-removebg-preview.png")}
                            alt="image"
                        />
                    </ImgContainer>
                </Left>
                <Middle>
                    <Heading>Winter has arrived</Heading>
                    <Paragraph>discover the FW 18 collection</Paragraph>
                    <Button to="shop">
                        Shop Now
                        <Arrow className="arrow">
                            <BsArrowRightShort />
                        </Arrow>
                    </Button>
                </Middle>
                <Right>
                    <ImgContainer>
                        <Img
                            src={require("../../assets/images/winter-removebg-preview.png")}
                            alt="image"
                        />
                    </ImgContainer>
                </Right>
            </Section>
        </Container>
    );
}

export default Spotlight;
const Container = styled.div`
    width: 100%;
    height: 90vh;
    padding: 0 0 40px 0;
    /* background: url(${Bg}); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-image: linear-gradient(to right, #eedece 50%, #f0f0f0 50%);
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 30%;
    margin-left: auto;
`;

const Right = styled.div`
    width: 30%;
    margin-right: auto;
`;
const ImgContainer = styled.div`
    width: 380px;
    margin: 90px auto 0;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const Middle = styled.div`
    width: 25%;
`;
const Heading = styled.h2`
    text-transform: capitalize;
    font-size: 40px;
    font-weight: 700;
`;
const Paragraph = styled.p`
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
`;
const Button = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding: 8px 12px;
    margin: 30px auto 0;
    width: 120px;
    color: #000;
    /* text-align: center; */
    font-weight: 400;
    cursor: pointer;
    &:hover {
        background: linear-gradient(to left, #eedece 50%, #f0f0f0 50%);
    }
`;
const Arrow = styled.div`
    font-size: 20px;
    &:hover {
        transform: rotate(90deg);
    }
`;
