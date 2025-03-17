import { ButtonHTMLAttributes, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { IconTitles } from "../../utils/enums";

import { IconWrapper } from "../IconWrapper";

import { ButtonContainer } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export function ButtonSearch({ text, ...props }: Props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <ButtonContainer {...props}>
      <IconWrapper
        icon={<MagnifyingGlass size={20} weight='bold' />}
        title={IconTitles.MagnifyingGlass}
      />
      {screenWidth > 500 && text}
    </ButtonContainer>
  )
}
