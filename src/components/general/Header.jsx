import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-scroll";
import axios from "axios";
import { BsCartCheck } from "react-icons/bs";

function Header({ addCart }) {
    const [isList, setIsList] = useState(false);
    const [items, setItems] = useState([]);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                setItems(res.data);
                console.log(res.data);
            }
        });
    }, []);
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = items.filter((value) => {
            return value.title.includes(searchWord);
        });
        setFilterData(newFilter);
    };

    // console.log(addCart.length, "lengthhhhhh");
    return (
        <>
            <Container>
                <Section>
                    <Left>
                        <Ul>
                            <Li>Home</Li>
                            <Li>shop</Li>
                            <Li
                                to="categories"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                            >
                                categories
                            </Li>
                            <Li>pages</Li>
                        </Ul>
                    </Left>
                    <Middle></Middle>
                    <Right>
                        <Ul>
                            <Li>
                                <Cart>
                                    <BsCartCheck />
                                    {addCart.length === 0 ? (
                                        ""
                                    ) : (
                                        <Span>{addCart.length}</Span>
                                    )}
                                </Cart>
                            </Li>
                            <Li className="login">login</Li>
                            <Li className="button">
                                <Input
                                    type="text"
                                    placeholder="enter something"
                                    onChange={handleFilter}
                                />
                                <Search>
                                    <FiSearch />
                                </Search>
                            </Li>
                            {filterData.length != 0 && (
                                <Li className="dataResult">
                                    {filterData.map((data) => (
                                        <a className="dataItem" href={data.id}>
                                            <p>{data.title}</p>
                                        </a>
                                    ))}
                                </Li>
                            )}
                        </Ul>
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    position: fixed;
    border-radius: 5px;
    border: 1px solid #fff;
    height: 70px;
    /* background-color: #eed5d9; */
    padding: 10px 0;
    background-image: linear-gradient(to right, #eedece 50%, #f0f0f0 50%);
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Middle = styled.div`
    width: 10%;
`;
const ImgContainer = styled.div`
    width: 200px;
`;
const Img = styled.img``;
const Right = styled.div`
    width: 25%;
`;
const Search = styled.div``;
const Ul = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Li = styled(Link)`
    display: flex;
    position: relative;
    width: calc(20% - 5px);
    color: #000;
    cursor: pointer;
    font-size: 18px;
    text-transform: capitalize;
    &.login {
        margin-right: 20px;
    }
    &.button {
        display: flex;
        width: 100%;
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 8px;
    }
    &:hover {
        text-decoration: underline;
    }
`;
const Input = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    &::placeholder {
        color: #000;
        text-transform: capitalize;
        font-size: 16px;
    }
`;
const Cart = styled.div`
    font-size: 25px;
    cursor: pointer;
    position: relative;
`;
const Span = styled.span`
    width: 40px;
    border-radius: 50px;
    padding: 4px;
    position: absolute;
    bottom: 9px;
    right: -30px;
    text-align: center;
    background-color: #eedece;
`;
const Select = styled.select`
    color: #000;
    left: -23px;
    position: absolute;
    top: -10px;
    font-size: 19px;
    cursor: pointer;
    text-transform: capitalize;
`;
const Option = styled.option``;
