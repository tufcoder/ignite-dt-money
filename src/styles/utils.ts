import { css } from "styled-components"

/**
 * Rules for flex row center.
 */
const flexRowCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Rules for flex column center.
 */
const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/**
 * Rules for grid center.
 */
const gridCenter = css`
  display: grid;
  align-content: center;
`

/**
 * Interface for transition properties.
 * @property `properties`: Strings[ ] for `transition-property`.
 * @property `duration`: String for `transition-duration`.
 * @property `timing`: String for `transition-timing-function`.
 */
interface TransitionProps {
  properties: string[]
  duration?: string
  timing?: string
}

/**
 * Rules to apply transition effects in properties.
 *
 * @param properties ['color', 'background-color', ...]
 * @param duration Optional. Default '0.3s'.
 * @param timing Optional. Default 'ease'.
 * @returns
 */
const transition = ({
  properties,
  duration = '0.3s',
  timing = 'ease'
}: TransitionProps) => css`
  transition-property: ${properties.join(', ')};
  transition-duration: ${properties.map(() => duration).join(', ')};
  transition-timing-function: ${properties.map(() => timing).join(', ')};
`

export {
  flexRowCenter,
  flexColumnCenter,
  gridCenter,
  transition,
}
