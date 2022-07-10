import styled from "styled-components";

export const Containe = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  background-color: rgba(101, 220, 199, 0.3);
  border: 0;
  height: 3.75rem;
  border-radius: 6.25rem;
  align-items: center;
  justify-content: start;
`;

export const Input = styled.input`
  background-color: transparent;
  height: 3.75rem;
  width: 100%;
  border: 0;
  margin-left: 0.5rem;
  font-size: 1.25rem;

  :focus {
    outline: none;
  }
`;
