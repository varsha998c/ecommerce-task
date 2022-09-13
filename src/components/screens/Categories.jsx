import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bg1 from "../../assets/images/images.jpg";
import Bg2 from "../../assets/images/images (1).jpg";
import Bg3 from "../../assets/images/download-removebg-preview.png";
import Bg4 from "../../assets/images/images__2_-removebg-preview.png";
import Bg5 from "../../assets/images/images__3_-removebg-preview.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    setCategory(res.data);
                    console.log(res.data);
                    console.log(category[0]);
                }
            });
    }, []);

    return (
        <Container id="categories">
            <Section>
                <TopContainer>
                    <Men to={`${category[2]}`}>
                        <Span className="color">{category[2]}</Span>
                    </Men>
                    <Women to={`${category[3]}`}>
                        <Span className="color">{category[3]}</Span>
                    </Women>
                </TopContainer>
                <BottomContainer>
                    <Bag to={`${category[1]}`}>
                        <Span className="color">{category[1]}</Span>
                    </Bag>
                    <Accessories to={`${category[0]}`}>
                        <Span className="color">{category[0]}</Span>
                    </Accessories>
                    {/* <Shoes>
                        <Span className="color">Shoes</Span>
                    </Shoes> */}
                </BottomContainer>
            </Section>
        </Container>
    );
}

export default Categories;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 40px 0;
`;
const Section = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Men = styled(Link)`
    width: 49%;
    background-image: url(${Bg2});
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    border-radius: 5px;
    cursor: pointer;
`;
const Women = styled(Link)`
    background-image: url(${Bg1});

    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 49%;
    border-radius: 5px;
`;
const BottomContainer = styled.div`
    margin-top: 30px;
    /* gap: 40px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Bag = styled(Link)`
    width: 48%;
    border-radius: 5px;
    height: 300px;
    cursor: pointer;
    background-color: #e3e0db;
`;
const Accessories = styled(Link)`
    width: 48%;
    border-radius: 5px;
    background-color: #e3e0db;
    height: 300px;
    cursor: pointer;
`;

const Span = styled.span`
    transform: translate(82px, 61px);
    position: absolute;
    font-size: 30px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
        &.color {
            background: -webkit-linear-gradient(#eee, #333);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
