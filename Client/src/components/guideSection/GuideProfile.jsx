import React from "react";
import styled from "styled-components";



export const Guideprofile = styled.div`
    box-shadow: #685e5b;
  border: 1rem solid;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  width: 25rem;
  border-color: rgb(40, 180, 133);
  align-content: center;
  margin: 1.5rem;
`;

export const ImageBox = styled.div`
  border: 1px solid;
  margin: 0.5rem auto;
  height: 15rem;
  width: 15rem;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
`;

export const Downbox = styled.div`
  height: 50%;
  width: 90%;
  text-align: left;
  margin: 0 auto;
  margin-top: rem;
`;

export const GuideText = styled.div`
  width: 100%;
  color: #000;
  font-size: 15px;
`;

export const Tags = styled.span`
  font-weight: 1000;
  text-transform: uppercase;
`;

export const Contactbtn = styled.button`
  font-size: 20px;
  padding: 0.9rem, 0;
  margin: 6px 5px;
  background-image: linear-gradient(
    rgb(126, 213, 111) 20%,
    rgb(40, 180, 133) 100%
  );
`;

export const Line = styled.hr`
  width: 100%;
`;

const GuideProfile = (props) => {
  return (
    <Guideprofile>
      <ImageBox
        style={{ backgroundImage: `url(${props.profilepic})` }}
      ></ImageBox>
      <Downbox>
        <GuideText>
          <Tags>Name: </Tags>
          <span> {props.name}</span>
        </GuideText>
        <Line />
        <GuideText>
          <Tags>Age: </Tags>
          <span> {props.age}</span>
          <span> </span>
          <Tags>sex: </Tags>
          <span> {props.sex}</span>
        </GuideText>
        <Line />
        <GuideText>
          <Tags>Langages: </Tags>
          <span> {props.language}</span>
        </GuideText>
        <Line />{" "}
      </Downbox>
      <Contactbtn>Call</Contactbtn>
      <Contactbtn>Chat</Contactbtn>
    </Guideprofile>
  );
};

export default GuideProfile;
