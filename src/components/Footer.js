import React from "react";
import styled from "styled-components";
import ViewsCounter from "./Utility/ViewsCounter";

const Foot = styled.footer`
  position: relative;
  background-color: #1a1f24;

  bottom: 0;
`;
const FooterContainer = styled.div`
  max-width: 100vw;
  margin: 0 2%;
  position: relative;
  overflow: visible;
  padding-top: 20px;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2% 20%;
  width: 95vw;
  z-index: 2;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const LineBreak = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #a2845c;
  margin: 1px;
  padding: 0;
`;
const P = styled.p`
  font-size: 14px;
  text-align: center;
  color: #9e9e9e;
  font-weight: 500;
`;
const Btn = styled.button`
  margin: 0 2%;
  min-width: 8.5vw;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 10px;
  border: 1px solid #adb5bd;
  background: #3b3838;
  :hover {
    background: transparent;
    color: #adb5bd;
  }
`;
const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-self: center;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  width: 95vw;
`;
const ViewCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
const ViewCounterMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  text-align: center;
  align-items: center;
`;
const ViewCounterHead = styled.div`
  font-size: 1rem;
  color: aliceblue;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const BackToTop = styled.button`
  cursor: pointer;
  fill: #3e3e3e;
  border: none;
  background: transparent;
  :hover {
    fill: #fff;
  }
`;
const A = styled.a`
  text-decoration: none;
  margin: 0 2%;
`;
export default function Footer() {
  return (
    <div>
      <Foot>
        <FooterContainer>
          <ContainerMain>
            <ViewCounter>
              <ViewCounterMain>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="#fff"
                  style={{ width: "5rem", height: "5rem" }}>
                  <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
                </svg>
                {/* <ViewsCounter></ViewsCounter> */}
              </ViewCounterMain>
              <ViewCounterHead>Realtime Views Counter</ViewCounterHead>
            </ViewCounter>
            <NavBar>
              <A href="#about-me">
                <Btn>About Me</Btn>
              </A>
              <A href="#my-skills">
                <Btn>My Skills</Btn>
              </A>
              <A href="#my-projects">
                <Btn>My Projects</Btn>
              </A>
              <A href="#contact-me">
                <Btn>Contact Me</Btn>
              </A>
            </NavBar>
            <a href="#Starter">
              <BackToTop>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: "3rem", height: "3rem" }}>
                  <path d="M272.9 135.7C268.3 130.8 261.9 128 255.2 128C247.5 128.3 241.1 130.9 237.5 135.8l-87.25 96C143.8 238.9 142.2 249 146.1 257.7C149.9 266.4 158.5 272 167.1 272h56L224 360c0 13.25 10.75 24 24 24h16c13.25 0 23.1-10.75 23.1-24L287.1 272h56c9.531 0 18.16-5.656 22-14.38c3.811-8.75 2.092-18.91-4.377-25.91L272.9 135.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
                </svg>
              </BackToTop>
            </a>
          </ContainerMain>

          <LineBreak></LineBreak>
          <P>
            Copyright © 2022 | Designed and Created by Malay Kumar | Icons
            created by Freepik - Flaticon | All rights reserved
          </P>
        </FooterContainer>
      </Foot>
    </div>
  );
}
