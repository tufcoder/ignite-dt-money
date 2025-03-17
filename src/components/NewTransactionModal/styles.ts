import styled, { css } from "styled-components";

import { pxToRem } from "../../styles/functions";
import { transition } from "../../styles/utils";
import { buttonTransaction } from "../../styles/buttons";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme["gray-800"]};

  @media (max-width: 900px) {
    min-width: unset;
    width: 50%;
    top: 70%;
  }

  @media (max-width: 500px) {
    min-width: unset;
    width: 100%;
    top: 70%;
    padding: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-start: 2rem;

    input {
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      background-color: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};

      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }

    button[type=submit] {
      height: ${pxToRem(58)};
      margin-block-start: 1.5rem;
      border: 0;
      border-radius: 6px;
      padding: 0 1.25rem;
      font-weight: bold;
      color: ${props => props.theme.white};
      background-color: ${props => props.theme["green-500"]};
      cursor: pointer;
      ${transition({ properties: ['background-color'] })}

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${props => props.theme["green-700"]};
      }
    }

    div {
      display: flex;
      gap: 1rem;

      label {
        flex: 1;
      }
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${props => props.theme["gray-500"]};
  background-color: transparent;
  cursor: pointer;
`

interface TransactionTypeProps {
  $variant: 'income' | 'outcome'
}

export const TransactionType = styled.label<TransactionTypeProps>`
  ${buttonTransaction}
  position: relative;

  input[type=radio] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }

  ${props => {
    switch (props.$variant) {
      case "income":
        return css`
          svg {
            color: ${props.theme["green-300"]};
          }

          &:has(input[type=radio]:checked) {
            color: ${props.theme.white};
            background-color: ${props.theme["green-700"]};

            svg { color: inherit; }
          }
        `
      case "outcome":
        return css`
          svg {
            color: ${props.theme["red-300"]};
          }

          &:has(input[type=radio]:checked) {
            color: ${props.theme.white};
            background-color: ${props.theme["red-700"]};

            svg { color: inherit; }
          }
        `
      default:
        return css`
          svg {
            color: ${props.theme.white};
          }
        `
    }
  }}
`
