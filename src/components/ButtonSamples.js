import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";

const ButtonSamples = () => {
  return (
    <div>
      <Container>
        <Heading>Button</Heading>
      </Container>
      <Container>
        <Button>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button inverse>Inverse Button</Button>
        <Button big>Big Primary Button</Button>
        <Button loading>Primary Loading Button</Button>
      </Container>
    </div>
  );
};

export default ButtonSamples;
