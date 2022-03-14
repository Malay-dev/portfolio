import React from "react";
import ConfettiBtn from "./Utility/ConfettiBtn";
// import PropTypes from "prop-types";

import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: #070707; //#171717
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Stage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-self: space-around;
  text-align: center;
  color: white;
  z-index: 1;
  /* border: 1px solid white; */
`;
const ProfilePhoto = styled.div`
  margin: 2rem;
  border: 1px solid white;
  filter: drop-shadow(-0.5rem 0.5rem 0px #b400ff);
`;
const Intro = styled.div`
  margin: 2rem;
  color: #fffafa;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
`;
const NameReveal = styled.div`
  font-family: "Comforter", cursive;
  font-size: 8vw;
`;
const CurrentStatus = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 2vw;
`;
const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  bottom: 0px;
  color: #ffff;
`;
const mouse = keyframes`
from{opacity:1;
top:5px;}
to{
  opacity: 0;
  top:15px;
}
`;
const MouseScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  font-family: Helvetica, "Arial Narrow", sans-serif;
  color: #fff;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
const MouseScroll = styled.div`
  position: relative;

  cursor: pointer;
  width: 16px;
  height: 28px;
  border: 2px solid #fff;

  border-radius: 60px;
  ::before {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    justify-self: center;
    top: 5px;
    left: 50%;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    opacity: 1;
    animation: ${mouse} 1.5s infinite;
  }
`;
export default function Starter() {
  return (
    <div id="Starter">
      <Container>
        <Stage>
          {/* <h1>hello</h1> */}
          <ProfilePhoto>
            <img src="" alt="Profile" />
          </ProfilePhoto>
          <Intro>
            <NameReveal>Malay Kumar</NameReveal>
            <CurrentStatus>Undergrad at VIT Chennai</CurrentStatus>
          </Intro>
        </Stage>
        <BtnContainer>
          <div>
            <ConfettiBtn></ConfettiBtn>
          </div>
          <MouseScrollContainer>
            <a href="#about-me">
              <MouseScroll></MouseScroll>
            </a>
            <p>Scroll down</p>
          </MouseScrollContainer>
          <div>3</div>
        </BtnContainer>
      </Container>
    </div>
  );
}
