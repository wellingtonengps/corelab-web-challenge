import styled from "styled-components";

export const Container = styled.div`
  padding-left: 1rem;
  display: flex;
  background-color: #ffffff;
  border: 1px solid rgba(2, 2, 2, 0.8);
  height: 2.375rem;
  border-radius: 6.25rem;
`;

export const Input = styled.input`
  background-color: transparent;
  height: 2rem;
  border: 0;
  font-size: 1.25rem;

  :focus {
    outline: none;
  }
`;
