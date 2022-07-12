import styled from "styled-components";

interface ButtoProps {
  size?: "small" | "large";
}

export const Container = styled.button<ButtoProps>`
  display: flex;
  background-color: #65dcc7;
  border: 0;
  height: ${({ size }) => (size === "small" ? 3.75 : 2.75)}rem;
  width: ${({ size }) => (size === "small" ? 22.75 : 7.688)}rem;
  border-radius: 6.25rem;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: ${({ size }) => (size === "small" ? 30 : 18)}px;
  line-height: 36px;
  text-transform: uppercase;
`;
