import { css } from "styled-components";

import { fontBold, fontNormal } from "./variables";

import { pxToRem } from "./functions";

/**
 * Rules for font `Roboto`.
 */
const fontRoboto = css`
  font-family: Roboto, sans-serif;
  font-weight: ${fontNormal};
  line-height: 1.6;
`

/**
 * Interface to define additional properties.
 * @property {boolean} `bold` Optional, define font bold.
 */
interface FontProps {
  bold?: boolean
}

/**
 *
 * @param props `{ bold?: boolean }`.
 * @returns Roboto 14px.
 */
const robotoS = (props?: FontProps) => css`
  ${fontRoboto}
  font-size: ${pxToRem(14)};
  font-weight: ${props?.bold ? fontBold : fontNormal};
`

/**
 *
 * @param props `{ bold?: boolean }`.
 * @returns Roboto 16px.
 */
const robotoR = (props?: FontProps) => css`
  ${fontRoboto}
  font-size: ${pxToRem(16)};
  font-weight: ${props?.bold ? fontBold : fontNormal};
`

/**
 *
 * @param props `{ bold?: boolean }`.
 * @returns Roboto 20px.
 */
const robotoM = (props?: FontProps) => css`
  ${fontRoboto}
  font-size: ${pxToRem(20)};
  font-weight: ${props?.bold ? fontBold : fontNormal};
`

/**
 *
 * @param props `{ bold?: boolean }`.
 * @returns Roboto 24px.
 */
const robotoL = (props?: FontProps) => css`
  ${fontRoboto}
  font-size: ${pxToRem(24)};
  font-weight: ${props?.bold ? fontBold : fontNormal};
`

/**
 *
 * @param props `{ bold?: boolean }`.
 * @returns Roboto 32px.
 */
const robotoXL = (props?: FontProps) => css`
  ${fontRoboto}
  font-size: ${pxToRem(32)};
  font-weight: ${props?.bold ? fontBold : fontNormal};
`

export {
  robotoS,
  robotoR,
  robotoM,
  robotoL,
  robotoXL,
}
