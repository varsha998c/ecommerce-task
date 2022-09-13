import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Items() {
    const [list, setList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUsers = list
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((lists) => {
            return (
                <Item>
                    <ImgContainer>
                        <Img src={lists.image} alt="image" />
                    </ImgContainer>
                    <Price>Price: {lists.price}</Price>
                    <Details to="single-page">Details</Details>
                </Item>
            );
        });
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                setList(res.data);
                console.log(res.data);
            }
        });
    });
    const pageCount = Math.ceil(list.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <Container id="shop">
            <Section>
                {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
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
    );
}

export default Items;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    padding: 50px 0;
`;
const Section = styled.div`
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
`;
const Item = styled.div`
    cursor: pointer;
    width: 20%;
    height: 350px;
    margin-bottom: 30px;
    margin-right: 20px;
    border-radius: 10px;
    border: 1px solid red;
    padding: 20px;
    background-color: #fff;
`;
const ImgContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 60%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    height: 100%;
`;
const Price = styled.div`
    margin-top: 40px;
    color: green;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid red;
    border: 4px;
    margin-bottom: 30px;
    /* padding: 10px; */
    /* width: 90px; */
`;
const Details = styled(Link)`
    /* text-align: right; */
    font-size: 18px;
    border: 1px solid #000;
    padding: 5px 10px;
    margin-left: auto;
    /* background-color: yellow; */

    width: 70px;
    border-radius: 4px;
    &:hover {
        background-color: green;
    }
`;
