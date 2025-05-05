import { Proposition, Question } from "../types";
import { Image } from "./image";
import { PropositionsList } from "./propositions-list";

interface Props {
  question: Question & { propositions: Proposition[] }
  position: number
}

export function QuestionItem({ question, position }: Props) {
  const { propositions, intitule, type, link } = question

  const correctPropositions = propositions.filter((p) => p.is_correct == true)
  const allowMultipleAnswer = correctPropositions.length > 1

  return (
    <div>
      <h1 className="text-lg font-medium">
        Question {position}
      </h1>
      <div className="h-0.5 my-2 bg-gray-200 w-full" />
      {type == 'text' && (
        <h2 className="mb-4">
          {intitule}
        </h2>
      )}
      {type == 'image' && (
        <div className="w-60 h-28">
          <Image
            src={link!} 
            className="w-full h-full object-cover"
            alt="Proposition label" 
          />
        </div>
      )}
      <PropositionsList
        allowMultipleAnswer={allowMultipleAnswer} 
        propositions={propositions} 
      />
    </div>
  )
}