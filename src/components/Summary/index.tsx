import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar
} from "@phosphor-icons/react";

import { useSummary } from "../../hooks/useSummary";

import { IconTitles } from "../../utils/enums";

import { SummaryCard } from "../SummaryCard";

import {
  SummaryContainer,
} from "./styles";

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard
        icon={<ArrowCircleUp size={32} />}
        iconTitle={IconTitles.ArrowCircleUp}
        title="Entradas"
        price={summary.income}
      />
      <SummaryCard
        icon={<ArrowCircleDown size={32} />}
        iconTitle={IconTitles.ArrowCircleDown}
        title="Saídas"
        price={summary.outcome}
      />
      <SummaryCard
        icon={<CurrencyDollar size={32} />}
        iconTitle={IconTitles.CurrencyDollar}
        title="Total"
        price={summary.total}
        variant="green"
      />
    </SummaryContainer>
  )
}
