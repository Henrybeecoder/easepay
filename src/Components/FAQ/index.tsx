"use client";
import React from 'react'
import styles from "./style.module.css"
import styled from 'styled-components'

const FaqComponenet = (question) => {
    return (
        <div>
            <div className={styles.faq}>
                <p>{question}</p>
                <p>+</p>
            </div>
        </div>
    )
}

const Faq = () => {
    return (
        < Wrapper>
           <Header >FAQS</Header>

            <p>
            Are you looking for a reliable payment processor to help you expand your online business? Look no further, Zenithpay is here to help you access a larger market with ease!
            </p>
            <div className={styles.faq}>
                <p>When do we launch?</p>
                <p>+</p>
            </div>
            <div className={styles.faq}>
                <p>Do you get a discount when you join the waitlist?</p>
                <p>+</p>
            </div>
            <div className={styles.faq}>
                <p>When do we launch?</p>
                <p>+</p>
            </div>
         

            <h2>Still Have a Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ContactButton>Contact us</ContactButton>
        </ Wrapper>
    )
}

const Header = styled.h1`
 color: white;
 font-size: 1rem
`;

const Wrapper = styled.div`
 background: #04010E;
 height: 100vh;
`;


const ContactButton= styled.button`
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    padding: 2px 6px;
    background: transparent;
    cursor: pointer;
`;

export default  Faq ;