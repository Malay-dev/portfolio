import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const Container = styled.div`
  background-color: #070707; //#171717
  border: 1px solid white;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const ContactsHead = styled.div`
  position: relative;
  transform: translateX(var(--scrollPercent));
  animation-timing-function: linear;
  transition: transform 1.5s ease-out;
  font-family: "Oswald", sans-serif;
  color: #fff;
  opacity: 30%;
  align-self: center;
  left: -100%;
  font-size: 15rem;
  z-index: 0;
`;
export default function ContactMe() {
  const handleScroll = (event) => {
    let head = document.getElementById("h4");
    let scrollPercent = 0;
    const { body, documentElement } = event.target;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    if (sp >= 80) {
      scrollPercent = sp * 1.4;
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
    <div>
      <Container>
        <ContactsHead id="h4">Contact Me</ContactsHead>
      </Container>
    </div>
  );
}
