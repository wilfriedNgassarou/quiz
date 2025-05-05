import { useSelectionContext } from "../hooks";
import { Proposition } from "../types";
import { getIsChecked } from "../utils";
import { InputCheckBox } from "./input-checkbox";

interface Props {
  propositions: Proposition[]
}

export function PropositionsListCheckboxType({ propositions }: Props) {
  const { data, setData } = useSelectionContext()

  const handleChange = (isChecked: boolean, answerId: number, questionId: number) => {
    const newData = data.map((d) => {
      if (d.question_id !== questionId) return d

      const array = isChecked ? [...d.answer_ids, answerId] : d.answer_ids.filter((id) => id !== answerId)

      return ({
        question_id: d.question_id,
        answer_ids: array
      })
    })

    setData(newData)
  }

  return (
    <section className="flex flex-col gap-1.5">
      {propositions.map((proposition) => (
        <InputCheckBox
          isChecked={getIsChecked(data, proposition)}
          key={proposition.slug} 
          proposition={proposition}
          onChange={handleChange} 
        />
      ))}
    </section>
  )
}