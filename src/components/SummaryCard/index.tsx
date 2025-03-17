import { ReactElement } from "react";

import { priceFormatter } from "../../utils/functions";

import { IconWrapper } from "../IconWrapper";

import { SummaryCardContainer } from "./styles";

interface Props {
  variant?: 'green'
  icon: ReactElement<HTMLElement>
  iconTitle: string
  title: 'Entradas' | 'Saídas' | 'Total'
  price: number
}

export function SummaryCard({ variant, icon, iconTitle, price, title }: Props) {
  return (
    <SummaryCardContainer $variant={variant} $title={title}>
      <header>
        <h2>{title}</h2>
        <IconWrapper
          icon={icon}
          title={iconTitle}
        />
      </header>
      <strong>{priceFormatter.toStringCurrencyBRL(price)}</strong>
    </SummaryCardContainer>
  )
}
