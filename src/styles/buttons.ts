import { css } from "styled-components";

import { robotoR, robotoS } from "./typograph";
import { flexRowCenter, transition } from "./utils";

/**
 * Base button styles.
 */
const buttonBase = css`
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-500"]};
  cursor: pointer;
  ${transition({ properties: ['background-color'] })}

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-300"]};
  }
`

/**
 * Small button. Font Roboto 14px bold.
 */
const buttonSmall = css`
  ${buttonBase}
  padding: 0.5rem 1rem;
  ${robotoS({ bold: true })}
`

/**
 * Medium button. Font Roboto 16px bold.
 */
const buttonMedium = css`
  ${buttonBase}
  padding: 0.75rem 1.25rem;
  ${robotoR({ bold: true })}
`

/**
 * Large button. Font Roboto 16px bold.
 */
const buttonLarge = css`
  ${buttonBase}
  padding: 1rem 2rem;
  ${robotoR({ bold: true })}
`

/**
 * Rules for search button.
 */
const buttonSearch = css`
  ${buttonBase}
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid ${props => props.theme["green-300"]};
  padding: 0.875rem 2rem;
  ${robotoR({ bold: true })}
  color: ${props => props.theme["green-300"]};
  background-color: transparent;
  ${transition({ properties: ['background-color', 'color', 'border-color'] })}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["green-500"]};
  }
`

const buttonTransaction = css`
  ${flexRowCenter}
  gap: 0.5rem;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  ${robotoR()}
  color: ${props => props.theme["gray-300"]};
  background-color: ${props => props.theme["gray-700"]};
  ${transition({ properties: ['background-color', 'color'] })}

  &:hover {
    background-color: ${props => props.theme["gray-600"]};
  }
`

export {
  buttonBase,
  buttonSmall,
  buttonMedium,
  buttonLarge,
  buttonSearch,
  buttonTransaction,
}
