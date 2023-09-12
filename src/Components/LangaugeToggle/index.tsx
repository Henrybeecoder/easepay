"use client";
import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Python from "../../../public/python.svg"
import Javascript from "../../../public/javascript.svg"
import Container from "../../../public/container.svg"

const LanguageToggle = () => {
    const [tabSelected, setTabSelected] = useState("python")

    return (
        <Wrapper>
            <Header>
                <LanguageTab>
                    Language
                </LanguageTab>

                <p onClick={() => setTabSelected("python")} style={{
                    color: tabSelected === "python" ? "#ffffff" : "#8F8F8F",
                    cursor: "pointer",
                     margin: "10px"
                }}>Python</p>
                <p onClick={() => setTabSelected("javascript")} style={{
                    color: tabSelected === "javascript" ? "#ffffff" : "#8F8F8F",
                    cursor: "pointer",
                    margin: "10px"
                }}>Javascript</p>
            </Header>
            <ImageSection>
                <Image
                    src={tabSelected === "python" ? Python : Javascript}
                    alt="Logo"
                    width={820}
                    height={820}
                    blurDataURL="data:..."
                    placeholder="blur"
                    style=
            {{
                zIndex: "1",
            }}
                />
            </ImageSection>
            <Image src={Container} width={600} height={600} alt="container" style=
            {{
                zIndex: "-1",
                position: 'absolute',
                top: "-50px",
                left: "50px"
            }}/>
         
        </Wrapper>
    )
}

const Wrapper = styled.section`
 width: 60%;
 margin-left: 200px;
 position: absolute;
`;

const Header = styled.div`
 display: flex;
 width: 100%;
 background: #030017;
 height: 10vh;
`;

const LanguageTab = styled.div`
   background: #030423;
   color: #FCFCFC;
   padding: 0 60px;
   height: "100%";
   display; flex;
   align-items: center;
   justify-content: center;
  
`;

const ImageSection = styled.div`
  margin-top: -21%;
`;

export default LanguageToggle;