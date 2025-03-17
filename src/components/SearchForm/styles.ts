import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    color: ${props => props.theme["gray-300"]};
    background-color: ${props => props.theme["gray-900"]};

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }
`
