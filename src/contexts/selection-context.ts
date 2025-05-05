import { createContext, Dispatch, SetStateAction } from "react"

export type SelectionContextType = {
  data: Data[]
  setData: Dispatch<SetStateAction<Data[]>>
}


export type Data = { question_id: number } & ( Result | Answer )

type Result = {
  answer_ids: number[]
}

type Answer = {
  answer_id: number | null
}

export const SelectionContext = createContext<SelectionContextType>({
  data: [],
  setData: () => {},
})