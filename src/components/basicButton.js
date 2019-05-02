import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #a1cdf1;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default () => {
  return (
    <StyledButton onClick={() => console.log("clicked")}>
      Basic button
    </StyledButton>
  );
};
