import styled, { css } from "styled-components"

import { robotoR } from "../../styles/typograph"

interface SummaryCardContainerProps {
  $variant?: string
  $title: 'Entradas' | 'Saídas' | 'Total'
}

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  border-radius: 6px;
  padding: 2rem;
  background-color: ${props => props.theme["gray-600"]};

  ${props => props.$variant && css`
    background-color: ${props => props.theme["green-700"]};
  `}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};

    h2 {
      ${robotoR()}
    }
  }

  strong {
    display: block;
    margin-block-start: 1rem;
    font-size: 2rem;
  }

  ${props => {
    const colorMap = {
      "Entradas": props.theme["green-300"],
      "Saídas": props.theme["red-300"],
      "Total": props.theme.white,
    }

    const color = colorMap[props.$title] || "inherit";

    return css`
      header {
        svg { color: ${color}; }
      }
    `
  }}
`
