import React from "react";
import styled from "styled-components";

export const Guidesec = styled.div`
  width: 25rem;
  height: 15rem;
  display: flex;
  margin: 0 1rem; 
  margin-bottom: 2rem;
`;

export const Pic = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 100;
`;

export const Infobox = styled.div`
  width: 50%;
  color: #000;
  font-size: 5px;
  border: 1px solid;
  background-color: #726767;
`;

export const Info = styled.div`
  font-size: 10px;
`;

export const Infohead = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 1000;
`;

export const Actbtn = styled.button`
  border-radius: 20%;
  margin: 0.5rem;
  font-size: 15px;
  padding: 0.5rem;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
`;

const DisplaySec = (props) => {
  return (
    <div>
      <Guidesec>
        <Pic style={{ backgroundImage: `url(${props.guidepic})` }}></Pic>
        <Infobox>
          <Info>
            <Infohead>name: </Infohead>
            <span>{props.guidename}</span>
          </Info>
          <Info>
            <Infohead>sex: </Infohead>
            <span>{props.guidesex}</span>
          </Info>
          <Info>
            <Infohead>age: </Infohead>
            <span>{props.guideage}</span>
          </Info>
          <Info>
            <Infohead>language: </Infohead>
            <span>{props.guidelanguage}</span>
          </Info>
          <Actbtn>call</Actbtn>
          <Actbtn>chat</Actbtn>
        </Infobox>
      </Guidesec>
    </div>
  );
};

export default DisplaySec;
