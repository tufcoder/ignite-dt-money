import styled from "styled-components";

import { pxToRem } from "../../styles/functions";

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: ${pxToRem(1120)};
  margin: 0 auto;
  margin-block-start: -5rem;
  padding: 0 1.5rem;

  @media (max-width: 500px) {
    overflow-x: auto;
  }
`
