import React from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { IoIosReturnLeft } from "react-icons/io";
import { AiOutlineUnlock } from "react-icons/ai";

function Conditions() {
    return (
        <Container>
            <Section className="wrapper">
                <Div>
                    <IconContainer>
                        <BsCart3 />
                    </IconContainer>
                    <Title>Free International shipping</Title>
                    <Description>On all orders over $100.00</Description>
                </Div>
                <Div>
                    <IconContainer>
                        <IoIosReturnLeft />
                    </IconContainer>
                    <Title>Free International shipping</Title>
                    <Description>On all orders over $100.00</Description>
                </Div>
                <Div>
                    <IconContainer>
                        <AiOutlineUnlock />
                    </IconContainer>
                    <Title>Free International shipping</Title>
                    <Description>On all orders over $100.00</Description>
                </Div>
            </Section>
        </Container>
    );
}

export default Conditions;
const Container = styled.div`
    width: 100%;
    padding: 50px 0 80px 0;
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Div = styled.div`
    cursor: pointer;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const IconContainer = styled.div`
    font-size: 20px;
`;
const Title = styled.h5`
    margin: 10px 0 5px 0;
    text-transform: capitalize;
    font-size: 16px;
`;
const Description = styled.p`
    margin: 0;
`;
