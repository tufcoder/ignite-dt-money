import styled from "styled-components";

import { buttonSearch } from "../../styles/buttons";

export const ButtonContainer = styled.button`
  ${buttonSearch}
  justify-content: center;

  @media (max-width: 500px) {
    width: 54px;
  }
`
