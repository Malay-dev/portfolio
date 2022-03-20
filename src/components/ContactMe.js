import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { dbf } from "./Utility/firebase";
import { collection, addDoc } from "firebase/firestore";

var twitter = require("./Assets/Socials/twitter.png");
var linkedin = require("./Assets/Socials/linkedin.png");
var github = require("./Assets/Socials/github.png");
var instagram = require("./Assets/Socials/instagram.png");
var telegram = require("./Assets/Socials/telegram.png");

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
  font-size: 16.5vw;
  z-index: 0;
`;

const FormSection = styled.div`
  position: absolute;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
`;
const FromContainer = styled.div`
  height: 80vh;
  width: 80vw;
  margin: 60px 50px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: 5% 5%;
    flex-direction: column;
  }
`;
const FormWrapper = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgb(120 120 120 / 30%) 40%,
    rgb(50 50 50 / 30%) 100%
  );
  backdrop-filter: blur(1.5px);
  z-index: 3;
  filter: drop-shadow(0 0 0.75rem rgb(222 200 200 / 40%));
  border: 3px solid rgb(222 200 200 / 40%);
  border-radius: 0 10px 10px 0;
  width: 50%;
  padding: 8% 5% 10% 5%;
  @media only screen and (max-width: 600px) {
    width: 95%;
    border-radius: 0 0 10px 10px;
  }
`;
const SocialLinks = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgb(120 120 120 / 30%) 40%,
    rgb(50 50 50 / 30%) 100%
  );
  backdrop-filter: blur(1.5px);
  z-index: 3;
  filter: drop-shadow(0 0 0.75rem rgb(222 200 200 / 40%));
  border: 3px solid rgb(222 200 200 / 40%);
  border-radius: 10px 0 0 10px;
  width: 50%;
  padding: 8% 5% 10% 5%;
  @media only screen and (max-width: 600px) {
    width: 95%;
    border-radius: 10px 10px 0 0;
  }
`;
const ContactsSubhead = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(0.95, 1);
  @media only screen and (max-width: 800px) {
    font-size: clamp(40px, 10vw, 60px);
  }

  @media only screen and (max-width: 600px) {
    font-size: clamp(30px, 12vw, 60px);
  }
`;
const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  @media only screen and (max-width: 600px) {
    padding-top: 30px;
  }
`;
const SocialBtn = styled.div`
  margin: 10px;
  cursor: pointer;
`;
const SocialBtnImg = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.2s;
  user-select: none;
  :hover {
    transform: scale(1.1, 1.1);
  }
  :active {
    transform: scale(1.1, 1.1);
  }
  @media only screen and (max-width: 400px) {
    width: 38px;
    height: 38px;
  }
`;
const FormField = styled.div`
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
  font-family: "Poppins", sans-serif;
`;
const Input = styled.input`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
  background: transparent;
  :focus + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }
  :valid + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
  background: transparent;
  :focus + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }
  :valid + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }
`;
const SubmitBtn = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  overflow: hidden;
  border-radius: 5px;
  border: none;
  background-color: #6c757d;
  :hover {
    border-radius: 5px;
    padding-right: 24px;
    padding-left: 8px;
  }
  :hover:after {
    opacity: 1;
    right: 10px;
  }
  :after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    line-height: 40px;
    top: 0;
    right: -20px;
    transition: 0.4s;
  }
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name !== "", message !== "", email !== "")) {
      setLoader(true);
      addDoc(collection(dbf, "contacts"), {
        name: name,
        email: email,
        message: message,
      })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact-me">
      <Container>
        <ContactsHead id="h4">Contact Me</ContactsHead>

        <FormSection>
          <FromContainer>
            <SocialLinks>
              <ContactsSubhead>Get in touch</ContactsSubhead>
              <Socials>
                <SocialBtn>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialBtnImg src={github} alt="github" />
                  </a>
                </SocialBtn>
                <SocialBtn>
                  <a
                    href="https://www.linkedin.com/in/malay-kumar-166387216/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialBtnImg src={linkedin} alt="linkedIn" />
                  </a>
                </SocialBtn>
                <SocialBtn>
                  <a
                    href="https://twitter.com/home"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialBtnImg src={twitter} alt="twitter" />
                  </a>
                </SocialBtn>
                <SocialBtn>
                  <a
                    href="https://telegram.org/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialBtnImg src={telegram} alt="telegram" />
                  </a>
                </SocialBtn>
                <SocialBtn>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialBtnImg src={instagram} alt="telegram" />
                  </a>
                </SocialBtn>
              </Socials>
            </SocialLinks>
            <FormWrapper>
              <form>
                <FormField>
                  <Input
                    type="text"
                    name="sender"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Label>Name:</Label>
                </FormField>
                <FormField>
                  <Input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Label>Email:</Label>
                </FormField>
                <FormField className="form-item">
                  <TextArea
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required></TextArea>
                  <Label>Message:</Label>
                </FormField>
                <SubmitBtn
                  onClick={handleSubmit}
                  style={{
                    background: loader
                      ? "rgb(4 255 0 / 50%)"
                      : "rgb(0 0 0 / 50%)",
                  }}>
                  Send
                </SubmitBtn>
              </form>
            </FormWrapper>
          </FromContainer>
        </FormSection>
      </Container>
    </div>
  );
}
