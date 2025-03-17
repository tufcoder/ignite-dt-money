import { cloneElement, ReactElement } from "react"

import { SpanContainer } from "./styles"

interface Props {
  icon: ReactElement<HTMLElement>
  title: string
}

export function IconWrapper({ icon, title }: Props) {
  const clonedIcon = cloneElement(icon, { title })

  return (
    <SpanContainer title={title}>
      {clonedIcon}
    </SpanContainer>
  )
}
