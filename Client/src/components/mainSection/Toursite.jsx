import React from "react";
import styled from "styled-components";

export const Sitebox = styled.div`
  width: 19vw;
  height: 20vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
`;

export const Sitename = styled.div`
  width: 10vh;
  height: 5vh;
  font-size: 5px;
  position: relative;
`;
export const Price = styled.span`
  font-weight: 200;
  font-size: 12px;
  color: #000;
  position: absolute;
  background-color: #7ed56f;
`;

export const Sitent = styled.h2`
  text-align: left;
  position: absolute;
  right: 1%;
  top: 100%;
  font-size: 13px;
  background-color: rgb(126, 213, 111);
`;
const Toursite = (props) => {
  return (
    <Sitebox style={{ backgroundImage: `url(${props.sitebg})` }}>
      <Sitename>
        <Price>{props.price}</Price>
        <Sitent>{props.sitea}</Sitent>
      </Sitename>
    </Sitebox>
  );
};

export default Toursite;
