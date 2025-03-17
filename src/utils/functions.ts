/**
 * Interface to format currencies.
 */
interface PriceFormatter {
  /**
   *
   * @param price A number to be formated in a string.
   * @returns {string} A string in currency BRL `R$ <price>`.
   */
  toStringCurrencyBRL: (price: number) => string
  /**
   *
   * @param price A number to be formated in a string.
   * @param min Mininum digits.
   * @param max Maximum digits.
   * @returns {string} A string formated in BRL with min and max digits.
   *
   * @example
   *
   * toStringDecimal(19.9, 2, 2) // "19,90"
   * toStringDecimal(9.789, 2, 2) // "9,78"
   * toStringDecimal(9.789, 2, 3) // "9,789"
   */
  toStringDecimal: (price: number, min: number, max: number) => string
}

export const priceFormatter: PriceFormatter = {
  toStringCurrencyBRL(price: number) {
    return new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ).format(price)
  },
  toStringDecimal(price: number, min: number, max: number): string {
    return new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'decimal',
        minimumFractionDigits: min,
        maximumFractionDigits: max,
      }
    ).format(price)
  }
}

/**
 * Interface to format string dates.
 */
interface DateFormatter {
  /**
   *
   * @param date A date in string format.
   * @returns {string} A string in BRL format `dd/mm/AAAA`.
   */
  toDateBRL: (date: string) => string
}

export const dateFormatter: DateFormatter = {
  toDateBRL(date: string) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
  }
}
