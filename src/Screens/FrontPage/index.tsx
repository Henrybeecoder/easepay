"use client";
import React from "react"
import Header from "@/Components/Header";
import styled from "styled-components"
// import myVideo from "../../../public/video.mp4"
import LanguageToggle from "@/Components/LangaugeToggle";
import Faq from "@/Components/FAQ";

const FrontPage = () => {
    return (
        <>
         {/* <video autoplay muted loop poster="polina.jpg" id="bgvid" style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "90",
        objectFit: "cover"
    }}>
  <source src="https://res.cloudinary.com/henrybee558/video/upload/v1694530222/video_gjqdkt.mp4" type="video/webm"/>
  <source src="https://res.cloudinary.com/henrybee558/video/upload/v1694530222/video_gjqdkt.mp4" type="video/mp4"/>
</video> */}
        <ParentSection>
   

            <Header />
            <ParentHeaderText>
                Open Payments at the Speed of Light
            </ParentHeaderText>
            <ParentParagraphText>Unlock Groundbreaking New Payment Experiences</ParentParagraphText>
            <EmailSection>
                <EmailSectionInput placeholder="Enter your email" />
                <EmailSectionButton>Join our waitlist</EmailSectionButton>
            </EmailSection>
         
            <LanguageToggle />
           {/* <Faq /> */}

           
        </ParentSection>
        </>
    )
}

const ParentSection = styled.section`
 height: 100vh;
 width: 100%;
 background: #050110E3;
`;

const ParentHeaderText = styled.h1`
 font-size: 3.8rem;
 color: #FFFFFF;
 text-align: center;
 font-weight: 700;
 margin-top: 60px;
 padding: 0 300px;
`;

const ParentParagraphText = styled.p`
font-size: 1rem;
color: #FFFFFF;
text-align: center;
font-weight: 400;
margin: 30px 0;
`;


const EmailSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;
const EmailSectionInput = styled.input`
border: 1px solid #000000;
background: #FFFFFF;
outline: none;
padding: 13px 50px 13px 10px;
border-radius: 2px;
`;
const EmailSectionButton = styled.button`
border: 2px solid #310E93;
color: #FFFFFF;
padding: 3px 5px;
background: #310E93;
outline: none;
cursor: pointer;
padding: 10px 15px;
margin-left: 20px;
font-size: 1rem;
border-radius: 2px;
`;

const VideoSection = styled.div`
object-fit: cover;
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
`;


export default FrontPage;