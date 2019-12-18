import React from "react";
import { styled } from "../theme";

const ButtonStyle = styled.button`
  min-height: 40px;
  border-radius: 4px;
  font-size: 18px;
`;

const PrimaryButton = styled(ButtonStyle)`
  background-color: ${props => props.theme.colors.blue.mid};
  position: relative;
  border: none;
  font-weight: bold;
  color: ${props => props.theme.colors.grey.veryLight};
  box-shadow: 0px 2px 4px 0px ${props => props.theme.colors.blue.light};

  &:hover {
    background-color: ${props => props.theme.colors.blue.midDark};
    box-shadow: 0px 2px 8px 0px ${props => props.theme.colors.blue.light};
  }

  &:active {
    background-color: ${props => props.theme.colors.blue.dark};
    font-weight: regular;
    box-shadow: 0px 2px 1px 0px ${props => props.theme.colors.blue.light};
  }
  &:focus {
    box-shadow: 0px 0px 8px 0px ${props => props.theme.colors.blue.light};
    outline: 2px solid ${props => props.theme.colors.blue.mid};
    outline-offset: 2px;
  }
`;

export interface ButtonProps {
  type: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = () => {
  return <PrimaryButton>Color Button</PrimaryButton>;
};
