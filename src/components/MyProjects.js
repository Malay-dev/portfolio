import React from "react";
import styled from "styled-components";
import { Component } from "react";
import { useEffect } from "react";

// Slider imported
import Slider from "react-slick";
// importing styles for slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position: relative;
  background-color: #070707; //#171717
  color: #fff;
  border: 1px solid white;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  color: #fff;

  margin: 0 auto;
  margin-left: 50px;
  margin-right: 50px;

  background-color: "transparent";
  z-index: 1;
`;
const ProjectsHead = styled.div`
  position: absolute;
  transform: translateX(var(--scrollPercent));
  animation-timing-function: linear;
  transition: transform 1.5s ease-out;
  font-family: "Oswald", sans-serif;
  color: #fff;
  opacity: 30%;
  align-self: center;
  left: -100%;
  font-size: 18rem;
  z-index: 0;
`;
const Cards = styled.div`
  width: 350px;
  height: 600px;
  border-radius: 20px;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgb(120 120 120 / 30%) 40%,
    rgb(50 50 50 / 30%) 100%
  );
  backdrop-filter: blur(2.5px);
  z-index: 3;
  filter: drop-shadow(0 0 0.75rem rgb(222 200 200 / 40%));
  border: 3px solid rgb(222 200 200 / 40%);
`;
export default function MyProjects() {
  const handleScroll = (event) => {
    let head = document.getElementById("h3");
    let scrollPercent = 0;
    const { body, documentElement } = event.target;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    if (sp >= 60 && sp <= 80) {
      scrollPercent = sp * 1.6;
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

  // Settings for carousel
  var settings = {
    centerMode: true,
    className: "center",
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
      </svg>
    ),
    prevArrow: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
      </svg>
    ),
  };
  return (
    <div>
      <Container>
        <ProjectsHead id="h3">My Projects</ProjectsHead>
        <SliderContainer>
          <div style={{ padding: "0 50% 0 0 !important" }}>
            <Slider {...settings}>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
              <div>
                <Cards>
                  <h3>1</h3>
                </Cards>
              </div>
            </Slider>
          </div>
        </SliderContainer>
      </Container>
    </div>
  );
}
