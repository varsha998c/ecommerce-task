import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";

function Footer() {
    return (
        <Container>
            <Section className="wrapper">
                <Left>
                    <Div>
                        <Title>About Us</Title>
                        <ListItems>
                            <Item>Our Company</Item>
                            <Item>Our History</Item>
                            <Item>Contact</Item>
                            <Item>Jobs</Item>
                            <Item>store locations</Item>
                        </ListItems>
                    </Div>
                    <Div>
                        <Title>How can we help</Title>
                        <ListItems>
                            <Item>FAQs</Item>
                            <Item>Order Tracking</Item>
                            <Item>Terms & Conditions</Item>
                            <Item>Privacy policy</Item>
                            <Item>returns & refund</Item>
                            <Item>support</Item>
                        </ListItems>
                    </Div>
                    <Div>
                        <Title>shop</Title>
                        <ListItems>
                            <Item>Women</Item>
                            <Item>men</Item>
                            <Item>Accessories</Item>
                            <Item>Tops</Item>
                            <Item>Jeans</Item>
                            <Item>shirt</Item>
                        </ListItems>
                    </Div>
                </Left>
                <Right>
                    <Content>
                        <Input
                            type="text"
                            placeholder="Type your search here"
                        />
                        <ImgContainer>
                            <BiSearchAlt2 />
                        </ImgContainer>
                    </Content>
                    <FollowContainer>
                        <Title>Follow us</Title>
                        <Icons>
                            <Icon>
                                <FaFacebookF />
                            </Icon>
                            <Icon>
                                <AiOutlineInstagram />
                            </Icon>{" "}
                            <Icon>
                                <AiOutlineTwitter />
                            </Icon>{" "}
                            <Icon>
                                <AiOutlineYoutube />
                            </Icon>{" "}
                        </Icons>
                    </FollowContainer>
                    <PaymentOptions>
                        <Title>Payment options</Title>
                        <Options>
                            <One>
                                <RiVisaLine />
                            </One>
                            <One>
                                <RiVisaLine />
                            </One>
                            <One>
                                <RiVisaLine />
                            </One>
                        </Options>
                    </PaymentOptions>
                </Right>
            </Section>
        </Container>
    );
}

export default Footer;
const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    padding: 50px 0;
`;
const Section = styled.div`
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
    width: 95%;
    margin: 0 auto;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Div = styled.div`
    width: 33%;
`;
const Title = styled.h5`
    margin: 0 0 10px 0;
    text-transform: uppercase;
    color: #808080;
    cursor: pointer;
`;
const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin-top: 20px;
`;
const Item = styled.div`
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 10px;
    color: #3a3b3c;
`;
const Right = styled.div`
    width: 40%;
`;
const Content = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cecece;
    margin-bottom: 35px;
`;
const ImgContainer = styled.div`
    font-size: 20px;
    cursor: pointer;
`;
const FollowContainer = styled.div``;
const Icons = styled.div`
    width: 140px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Icon = styled.div`
    cursor: pointer;
    font-size: 20px;
`;
const Input = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    background-color: transparent;
    &::placeholder {
        font-size: 16px;
        color: #cecece;
    }
`;
const PaymentOptions = styled.div`
    margin-top: 30px;
`;
const Options = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const One = styled.div`
    font-size: 40px;
    cursor: pointer;
`;
