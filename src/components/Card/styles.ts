import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 12.563rem;
  width: 16.125rem;
  background-color: #f04f4f;
  padding: 0.5rem;
  margin-bottom: 2.125rem;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

export const WrapperBody = styled.div`
  color: #ffff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 1.5rem;

  h2 {
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-self: flex-end;
`;
