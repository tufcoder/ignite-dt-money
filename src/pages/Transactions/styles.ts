import styled, { css } from "styled-components";

import { pxToRem } from "../../styles/functions";
import { robotoM, robotoS } from "../../styles/typograph";
import { transition } from "../../styles/utils";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: ${pxToRem(1120)};
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  h2 {
    display: flex;
    justify-content: space-between;
    margin-block-end: 0.5rem;
    font-size: 1.125rem;
    font-weight: 400;

    span {
      opacity: 0.6;
    }

    @media (min-width: 500px) {
      display: none;
    }
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  margin-block-start: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      span {
        display: flex;

        svg {
          display: none;
        }
      }
    }
  }

  @media (max-width: 500px) {
    tr {
      display: flex;
      flex-direction: column;
      margin-block-end: 0.5rem;

      td {
        width: 100%;
        padding: 0.5rem;

        div {
          display: flex;
          justify-content: space-between;

          span {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: ${props => props.theme["gray-500"]};

            svg {
              display: inline-flex;
            }
          }
        }
      }
    }
  }
`

interface PriceHighlightProps {
  $variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ $variant, theme }) => $variant === 'income'
    ? theme["green-300"]
    : theme["red-300"]
  };

@media (max-width: 500px) {
  ${robotoM({ bold: true })}
}
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-block-start: 2rem;
`

export const ButtonsPaginationContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface ButtonPaginateProps {
  $pageNumber: number
  $total: number
  $page?: number
}

const ButtonPaginateBase = styled.button<ButtonPaginateProps>`
  border: 0;
  background-color: transparent;
  color: ${props => props.theme["green-500"]};
  cursor: pointer;
`

export const ButtonPrevious = styled(ButtonPaginateBase)`
  ${props => {
    if (props.$pageNumber === 1) {
      return css`
        color: ${props.theme["gray-600"]};
        cursor: not-allowed;
      `
    }
  }}
`

export const ButtonNext = styled(ButtonPaginateBase)`
  ${props => {
    if (props.$pageNumber === props.$total) {
      return css`
        color: ${props.theme["gray-600"]};
        cursor: not-allowed;
      `
    }
  }}
`

export const ButtonPaginate = styled.button<ButtonPaginateProps>`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  ${robotoS({ bold: true })}
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-500"]};
  cursor: pointer;

  ${transition({ properties: ['background-color'] })}

  &:hover {
    background-color: ${props => props.theme["green-300"]};
  }

  ${props => {
    if (props.$page !== props.$pageNumber) {
      return css`
        opacity: 0.6;
        background-color: ${props => props.theme["gray-600"]};
      `
    }
  }}
`
