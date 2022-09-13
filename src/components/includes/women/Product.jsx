import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import bg1 from "../../../assets/images/360_F_309569941_14ZG5SptF1raUg6ARfc1hV7wfRLDVN2N.jpg";
import dress from "../../../assets/images/one-removebg-preview.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Header from "../../general/Header";
import { BsCartCheck } from "react-icons/bs";

function Product() {
    const { spot } = useParams();
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;
    const [isActive, setIsActive] = useState(false);
    const [addCart, setAddCart] = useState([]);

    const handleClick = () => {
        setIsActive((current) => !current);
    };
    const cartItems = [];

    const addCartItems = (item) => {
        const cart = item.id;
        if (!addCart.includes(cart)) {
            //  only runs if value not in array
            setAddCart([...addCart, cart]);
        }
        // addCart.push(addCart);
    };
    console.log(addCart, "---------------cart----------");
    const displayUsers = items
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item) => {
            return (
                <>
                    <Div key={item.id}>
                        <Top>
                            <ImgContainer>
                                <Img src={item.image} alt="image" />
                            </ImgContainer>
                        </Top>
                        <Middle>
                            <Title>{item.title}</Title>
                            {/* <Description>{item.description}</Description> */}
                        </Middle>
                        <Bottom>
                            <Span>{item.span}</Span>
                            <Price>{item.price}</Price>
                        </Bottom>
                        <Below>
                            <LeftContainer>
                                <IconContainer>
                                    <Img
                                        src={require("../../../assets/images/download (1).png")}
                                        alt="image"
                                    />
                                </IconContainer>
                                <Cart
                                    style={{
                                        backgroundColor: isActive
                                            ? "eedece"
                                            : "",
                                        color: isActive ? "white" : "",
                                    }}
                                    onClick={() => {
                                        addCartItems(item);
                                    }}
                                >
                                    <BsCartCheck />
                                </Cart>
                            </LeftContainer>
                            <Right to={`single-page/${item.id}`}>
                                Shop this
                            </Right>
                        </Below>
                    </Div>
                </>
            );
        });

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${spot}`)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    setItems(res.data);
                    console.log(res.data);
                }
            });
    }, []);

    const pageCount = Math.ceil(items.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <Header addCart={addCart} />
            <Container id="spot">
                <Section>
                    {displayUsers}
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationButtons"}
                        previousLinkClassName={"previousButton"}
                        nextLinkClassName={"nextButton"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Section>
            </Container>
        </>
    );
}

export default Product;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 115px 0 0;
    background-image: linear-gradient(to left, #eedece 50%, #f0f0f0 50%);
`;
const Section = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
`;
const Div = styled.div`
    cursor: pointer;
    padding: 10px;
    width: 30%;
    margin-right: 20px;
    height: 600px;
    background-color: #f0f0f0;
    border-radius: 8px;
    border: 2px solid #808080;
    &:last-child {
        margin-right: 0;
    }
`;
const Top = styled.div`
    height: 70%;
`;
const ImgContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 85%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    height: 100%;
`;
const Middle = styled.div``;
const Title = styled.h4`
    text-align: center;
`;
const Description = styled.p``;
const Bottom = styled.div`
    border-bottom: 1px solid #000;
    padding-bottom: 16px;
    margin-top: 30px;
`;
const Span = styled.span`
    margin-top: 10px;
    color: #3a3b3c;
`;
const Price = styled.h3``;
const Below = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
`;
const LeftContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const IconContainer = styled.div`
    width: 20px;
    margin-right: 20px;
`;

const Right = styled(Link)`
    cursor: pointer;
    text-transform: uppercase;
    color: red;
`;
const Cart = styled.div`
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: #eedece;
        border-radius: 50%;
        font-size: 27px;
        padding: 7px;
    }
`;
