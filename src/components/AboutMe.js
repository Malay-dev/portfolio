import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const Container = styled.div`
  background-color: #070707; //#171717
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const AboutMeHead = styled.div`
  transform: translateX(var(--scrollPercent));
  position: relative;
  animation-timing-function: linear;
  transition: transform 1.5s ease-out;
  font-family: "Oswald", sans-serif;
  color: #fff;
  opacity: 30%;
  /* top: 5%; */
  left: -95%;
  font-size: 43vh;
  z-index: 0;
`;
const AboutMeDescription = styled.div`
  color: #fff;
  position: absolute;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  line-break: strict;
  z-index: 2;
  display: flex;
  word-wrap: break-word;
  align-items: center;
  justify-self: center;
  margin-left: 10%;
  margin-right: 10%;
`;
export default function AboutMe() {
  const handleScroll = (event) => {
    let head = document.getElementById("h1");
    let scrollPercent = 0;
    const { body, documentElement } = event.target;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    if (sp >= 20 && sp <= 35) {
      scrollPercent = sp * 5;
      console.log(sp);
    }
    head.style.setProperty("--scrollPercent", scrollPercent + "%");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="about-me">
      <Container>
        <AboutMeHead id="h1">About Me</AboutMeHead>
        <AboutMeDescription>
          <p>
            Yo! I am Malay Kumar, Btech Student at VIT chennai. A computer
            science student passionate about programming and UI/UX. Currently
            trying to become a full stack developer.
          </p>
        </AboutMeDescription>
      </Container>
    </div>
  );
}
