import styled from "styled-components";

import { buttonMedium } from "../../styles/buttons";
import { pxToRem } from "../../styles/functions";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${props => props.theme["gray-900"]};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${pxToRem(1120)};
  margin: 0 auto;
  padding: 0 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`

export const NewTransactionButton = styled.button`
  ${buttonMedium}
`
