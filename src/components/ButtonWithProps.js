import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props => (props.secondary ? "#F7A072" : "#a1cdf1")};
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
`;

export default () => {
  return (
    <div>
      <StyledButton>Button with props 1</StyledButton>
      <StyledButton secondary>Button with props 2</StyledButton>
    </div>
  );
};
