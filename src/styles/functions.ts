/**
 *
 * @param pixels Number in pixels.
 * @param base Optional. Default 16px.
 * @returns A conversion to pixels in rem.
 */
function pxToRem(pixels: number, base: number = 16) {
  return `${pixels / base}rem`
}

export {
  pxToRem,
}
