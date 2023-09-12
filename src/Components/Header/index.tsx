"use client";
import React from "react"
import styled from 'styled-components'
import Image from 'next/image'
import Logo from "../../../public/logo.svg"

const Header = () => {
    return (
      <Wrapper>
         <FirstHeaderSection>
         <Image
      src={Logo}
      alt="Logo"
      width={50} 
      height={50}
      blurDataURL="data:..." 
      placeholder="blur"
    />
            <p>Products</p>
            <p>Solutions</p>
            <p>Resources</p>
            <p>Company</p>
         </FirstHeaderSection>
         <SecondHeaderSection>
<ContactButton>Contact us</ContactButton>
         </SecondHeaderSection>
      </Wrapper>
    )
}

const Wrapper = styled.section`
  width; 100%;
  display: flex;
  justify-content: space-between;
  background: transparent;
  padding: 3px 20px 0 10px;
`;

const FirstHeaderSection= styled.div`
  width: 40%;
  display: flex;
  color: #FFFFFF;
  justify-content: space-around;
  align-items: center;
  font-size: 0.9rem;
`;

const SecondHeaderSection= styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const ContactButton= styled.button`
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    padding: 2px 6px;
    background: transparent;
    cursor: pointer;
`;

export default Header;