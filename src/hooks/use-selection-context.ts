import { useContext } from "react"
import { SelectionContext } from "../contexts"

export const useSelectionContext = () => {
  const context = useContext(SelectionContext)

  if (!context) throw new Error('Use it within a selection context provider')

  return context
}