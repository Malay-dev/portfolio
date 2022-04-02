import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

var htmlLogo = require("./Assets/Logo/html logo.png");
var cssLogo = require("./Assets/Logo/css logo.png");
var jsLogo = require("./Assets/Logo/js logo.png");
var nojsLogo = require("./Assets/Logo/nodejs logo.png");
var reLogo = require("./Assets/Logo/react logo.png");
var bsLogo = require("./Assets/Logo/bootstrap logo.png");
var djLogo = require("./Assets/Logo/django logo.png");
var flLogo = require("./Assets/Logo/flask logo.png");
var sqlLogo = require("./Assets/Logo/mysql logo.png");
var fiLogo = require("./Assets/Logo/figma logo.png");
var xdLogo = require("./Assets/Logo/adobe xd logo.png");
var pyLogo = require("./Assets/Logo/python logo.png");
var cLogo = require("./Assets/Logo/c logo.png");
var cppLogo = require("./Assets/Logo/c++ logo.png");
var jLogo = require("./Assets/Logo/java logo.png");
var gLogo = require("./Assets/Logo/git logo.png");

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
const MySkillsHead = styled.div`
  position: relative;
  transform: translateX(var(--scrollPercent));
  animation-timing-function: linear;
  transition: transform 1.5s ease-out;
  font-family: "Oswald", sans-serif;
  color: #fff;
  opacity: 30%;

  left: -97.5%;
  font-size: 17vw;
  z-index: 0;
`;
const CloudContainer = styled.div`
  position: absolute;
  display: flex;
`;

export default function MySkills() {
  const handleScroll = (event) => {
    let head = document.getElementById("h2");
    let scrollPercent = 0;
    const { body, documentElement } = event.target;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    if (sp >= 40 && sp <= 60) {
      scrollPercent = sp * 3.5;
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
    <div id="my-skills">
      <Container>
        <MySkillsHead id="h2">My Skills</MySkillsHead>
        <CloudContainer>
          <div id="myCanvasContainer">
            <canvas
              width="900"
              height="600"
              style={{ width: "100%" }}
              id="myCanvas">
              <p>
                Anything in here will be replaced on browsers that support the
                canvas element
              </p>
            </canvas>
          </div>
          <div id="tags">
            <ul>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/HTML"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={htmlLogo}
                    alt="html"
                    srcSet=""
                    style={{ width: "110px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/CSS"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={cssLogo}
                    alt="css"
                    srcSet=""
                    style={{ width: "80px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={jsLogo}
                    alt="javascript"
                    srcSet=""
                    style={{ width: "90px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Node.js"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={nojsLogo}
                    alt="node js"
                    srcSet=""
                    style={{ width: "120px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={reLogo}
                    alt="react"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={bsLogo}
                    alt="bootstrap"
                    srcSet=""
                    style={{ width: "120px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Django_(web_framework)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={djLogo}
                    alt="django"
                    srcSet=""
                    style={{ width: "200px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/MySQL"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={sqlLogo}
                    alt="mySql"
                    srcSet=""
                    style={{ width: "120px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Flask_(web_framework)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={flLogo}
                    alt="flask"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={pyLogo}
                    alt="python"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={jLogo}
                    alt="java"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/C_(programming_language)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={cLogo}
                    alt="c"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/C%2B%2B"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={cppLogo}
                    alt="c++"
                    srcSet=""
                    style={{ width: "90px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Figma_(software)"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={fiLogo}
                    alt="figma"
                    srcSet=""
                    style={{ width: "70px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Adobe_XD"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={xdLogo}
                    alt="adobe xd"
                    srcSet=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Git"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={gLogo}
                    alt="git"
                    srcSet=""
                    style={{ width: "220px", height: "100px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </CloudContainer>
      </Container>
    </div>
  );
}
