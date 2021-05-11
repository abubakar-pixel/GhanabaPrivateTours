import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Navigation from "../Navigation";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <>
      <Navigation />
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Input type="nationality" placeholder="Nationality" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
}
