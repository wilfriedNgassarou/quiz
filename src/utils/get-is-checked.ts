import { Data } from "../contexts";
import { Proposition } from "../types";

export const getIsChecked = (data: Data[], propostion: Proposition) => {
  const record = data.find((d) => d.question_id == propostion.question_id)

  if (!record) throw new Error('Invalid default data in context')

  const record2 = record.answer_ids.find((id) => id == propostion.id)

  return record2 !== undefined
}