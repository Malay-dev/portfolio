import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: #070707; //#171717
  border: 1px solid white;
  height: 100vh;
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
  border: 1px solid white;
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
  font-size: 6rem;
`;
const CurrentStatus = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 2rem;
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
export default function Starter() {
  return (
    <div>
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </BtnContainer>
      </Container>
    </div>
  );
}
