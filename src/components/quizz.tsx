import { useState } from "react";
import { getDefaultSelection } from "../utils";
import { QuestionItem } from "./question-item";
import { SelectionContext } from "../contexts";
import { questions } from "../constants";
import clsx from "clsx";


export function Quizz() {
  const defaultSelection = getDefaultSelection(questions)

  const [selection, setSelection] = useState(defaultSelection)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (isLoading) return 

    const invalidInputs = selection.filter((s) => {
      if ('answer_id' in s) {
        if (s.answer_id == null) return true

        return false
      }

      return s.answer_ids.length === 0
    })

    
    const isValid = invalidInputs.length > 0

    if (isValid) return alert('Veuillez repondre a toutes les questions')

    setIsLoading(true)

    // backend request 
    await new Promise((resolve) => setTimeout(() => resolve('ok'), 1500))

    setIsLoading(false)
  }

  return (
    <SelectionContext 
      value={{ 
        data: selection, 
        setData: setSelection,
      }}
    >
      <section className="py-6 px-4 flex flex-col gap-6">
        {questions.map((item, index) => (
          <QuestionItem
            key={item.slug}
            position={++index}
            question={item} 
          />
        ))}
        <div className="flex justify-center my-2">
          <button
            onClick={handleSubmit}
            className={clsx(
              "w-full md:w-fit h-11 bg-blue-500 px-20 rounded-lg relative",
              isLoading ? 'opacity-70' : 'opacity-100'
            )}
          >
            <span 
              className={clsx(
                "font-medium text-white",
                isLoading ? 'opacity-0' : 'opacity-100'
              )}
            >
              Valider
            </span>
            {isLoading && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin" />
            )}
          </button>
        </div>
      </section>
    </SelectionContext>
  )
}