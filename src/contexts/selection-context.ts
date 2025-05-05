import { createContext, Dispatch, SetStateAction } from "react"

export type SelectionContextType = {
  data: Data[]
  setData: Dispatch<SetStateAction<Data[]>>
}


export type Data = { question_id: number; answer_ids: number[] }

export const SelectionContext = createContext<SelectionContextType>({
  data: [],
  setData: () => {},
})