import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    const validate = (values) => {
        const errors = {};
        const regex = "/^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/";
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    return (
        <Container>
            <Section>
                <TopContainer>
                    <Title>Sign In</Title>
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                    <FormContainer
                        id="registrationForm"
                        action="/"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <InputField>
                            <Input
                                placeholder="Username"
                                type="text"
                                name="fName"
                                id="fName"
                                // value={formValues.username}
                                onChange={handleChange}
                            />
                            <p>{formErrors.username}</p>
                        </InputField>
                        <InputField>
                            <Input
                                placeholder="email"
                                type="email"
                                name="email"
                                // value={initialValues.email}
                                onChange={handleChange}
                            />
                            <p>{formErrors.email}</p>
                        </InputField>
                        <InputField>
                            <Input
                                placeholder="password"
                                type="password"
                                name="password"
                                // value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                            {/* <p>{s.password}</p> */}
                        </InputField>
                        <SubmitButton to="landingpage">Sign In</SubmitButton>
                    </FormContainer>
                </TopContainer>
            </Section>
        </Container>
    );
}

export default Login;
const Container = styled.div`
    width: 100%;
    background-color: #000;
    height: 100vh;
    padding: 50px 0;
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const TopContainer = styled.div`
    width: 40%;
    margin: 50px auto;
    /* height: 300px; */
    display: flex;
    padding: 40px;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #fff;
`;
const FormContainer = styled.form``;
const InputField = styled.div`
    background-color: #333;
    padding: 15px 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    p {
        color: #fff;
    }
`;
const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    font-size: 16px;
    outline: none;
    color: #fff;
    &::placeholder {
        color: #818c8c;
    }
    &:hover {
        &::placeholder {
            transform: translateY(-5px);
            font-size: 12px;
        }
    }
`;
const SubmitButton = styled(Link)`
    padding: 15px 20px;
    border-radius: 6px;
    background-color: #e50914;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    margin-top: 40px;
    cursor: pointer;
`;
const Title = styled.h2`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    margin: 0 0 25px 0;
`;
