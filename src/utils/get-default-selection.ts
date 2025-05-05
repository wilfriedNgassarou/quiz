import { Data } from "../contexts"
import { Proposition, Question } from "../types"

type Param = (Question & { propositions: Proposition[] })[]

export const getDefaultSelection = (questions: Param) => {
  return questions.map((q) => {
    const validPropositions = q.propositions.filter((p) => p.is_correct == true)
    const allowMultipleAnswer = validPropositions.length > 1

    // si ca accepte plusieurs reponses, answer est un tableau d'ids
    // sinon c'est juste l'id de la reponse valide 
    const key = allowMultipleAnswer ? 'answer_ids' : 'answer_id'

    return ({
      question_id: q.id,
      [key]: allowMultipleAnswer ? [] : null
    }) as Data
  })
}