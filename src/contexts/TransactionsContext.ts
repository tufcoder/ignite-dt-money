import { createContext } from "use-context-selector";

import { TransactionsContextType } from "./TransactionsContextProvider";

export const TransactionsContext = createContext({} as TransactionsContextType);

/**
 * Referential Equality (Igualdade Referencial)
 * Context Selector: prop drilling, avoid rendering context api
 * Memo: deep comparison
 * Use Callback: Only change a callback if the inputs changed
 * Use Memo: Only change a variable if the value changed
 */
