import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  padding: 1.5rem, 0.8rem;
  margin: 10px 5px;
  color: #000;
  z-index: 10;
  width: 100%;
  text-align: center;
  animation: 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
  background
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    /* display: inline-block; */
    border-radius: 5rem;
    transition: all 0.2s;


    //change for the <button> element
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba($color-black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:focus,
  &:active {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 10%;
    width: 20%;
    border-radius: 10rem;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: green;
  }
`;

const Buttons = (props) => {
  return (
    <div>
              
      <Button className="btn-text" style={{ backgroundImage: `linear-gradient(${props.btncolor})` }}>
        {props.btn}
      </Button>
    </div>
  );
};

export default Buttons;
