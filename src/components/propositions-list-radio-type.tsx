import { useSelectionContext } from "../hooks";
import { Proposition } from "../types";
import { getIsChecked } from "../utils";
import { InputRadio } from "./input-radio";

interface Props {
  propositions: Proposition[]
}

export function PropositionsListRadioType({ propositions }: Props) {
  const { data, setData } = useSelectionContext()

  const handleChange = (isChecked: boolean, answerId: number, questionId: number) => {
    const newData = data.map((d) => {
      if (d.question_id !== questionId) return d

      return ({
        question_id: d.question_id,
        answer_id: isChecked ? answerId : null
      })
    })

    setData(newData)
  }

  return (
    <section className="flex flex-col gap-1.5">
      {propositions.map((p) => (
        <InputRadio
          key={p.slug} 
          isChecked={getIsChecked(data, p)}
          proposition={p}
          onChange={handleChange} 
        />
      ))}
    </section>
  )
}