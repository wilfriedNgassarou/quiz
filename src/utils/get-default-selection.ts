import { Proposition, Question } from "../types"

type Param = (Question & { propositions: Proposition[] })[]

// export const getDefaultSelection = (questions: Param) => {
export const getDefaultSelection = (questions: Param) => questions.map(q => ({
  question_id: q.id,
  answer_ids: [] as number[]
}))