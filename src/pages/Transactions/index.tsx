import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import { CalendarBlank, CaretLeft, CaretRight, TagSimple } from "@phosphor-icons/react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { IconWrapper } from "../../components/IconWrapper";

import { dateFormatter, priceFormatter } from "../../utils/functions";
import { IconTitles } from "../../utils/enums";

import {
  ButtonNext,
  ButtonPaginate,
  ButtonPrevious,
  ButtonsPaginationContainer,
  PaginationContainer,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable
} from "./styles";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  )

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTransactions = transactions.slice(startIndex, endIndex)

  const paginateButtons = (pages: number) => {
    const buttons = []

    for (let i = 1; i <= pages; i++) {
      buttons.push(i)
    }

    function handleClickPaginate(event: React.MouseEvent<HTMLButtonElement>) {
      setCurrentPage(parseInt(event.currentTarget.value))
    }

    return (
      buttons.map(button => (
        <ButtonPaginate
          key={button}
          onClick={handleClickPaginate}
          value={button}
          $pageNumber={currentPage}
          $total={totalPages}
          $page={button}
        >
          {button}
        </ButtonPaginate>
      ))
    )
  }

  function handleClickPrevious() {
    setCurrentPage(state => Math.max(state - 1, 1))
  }

  function handleClickNext() {
    setCurrentPage(state => Math.min(state + 1, totalPages))
  }

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <h2>
          Transações
          <span>{transactions.length > 0 && `${transactions.length} itens`}</span>
        </h2>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {currentTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight $variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.toStringCurrencyBRL(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>
                  <div>
                    <span>
                      <IconWrapper
                        icon={<TagSimple size={16} />}
                        title={IconTitles.TagSimple}
                      />
                      {transaction.category}
                    </span>
                    <span>
                      <IconWrapper
                        icon={<CalendarBlank size={16} />}
                        title={IconTitles.TagSimple}
                      />
                      {dateFormatter.toDateBRL(transaction.createdAt)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
        {totalPages > 1 ? (
          <PaginationContainer>
            <ButtonPrevious
              onClick={handleClickPrevious}
              $pageNumber={currentPage}
              $total={totalPages}
              disabled={currentPage === 1}
            >
              <IconWrapper
                icon={<CaretLeft size={24} weight="bold" />}
                title={IconTitles.CaretLeft}
              />
            </ButtonPrevious>
            <ButtonsPaginationContainer>
              {paginateButtons(totalPages)}
            </ButtonsPaginationContainer>
            <ButtonNext
              onClick={handleClickNext}
              $pageNumber={currentPage}
              $total={totalPages}
              disabled={currentPage === totalPages}
            >
              <IconWrapper
                icon={<CaretRight size={24} weight="bold" />}
                title={IconTitles.CaretRight}
              />
            </ButtonNext>
          </PaginationContainer>
        ) : ''}
      </TransactionsContainer>
    </div>
  )
}
