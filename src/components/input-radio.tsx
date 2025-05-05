import clsx from "clsx";
import { Proposition } from "../types";
import { Image } from "./image";

interface Props {
  proposition: Proposition
  isChecked: boolean
  onChange: (isChecked: boolean, answerId: number, questionId: number) => void
}

export function InputRadio({ proposition, isChecked, onChange }: Props) {
  const { text, question_id, id, type, link } = proposition

  return (
    <label
      onClick={() => onChange(!isChecked, id, question_id)} 
      className="flex items-center gap-2"
    >
      <div 
        className={clsx(
          "w-6 h-6 rounded-full flex justify-center items-center border-2 ease-in-out",
          isChecked ? "border-blue-400 duration-150" : "border-gray-500 duration-100"
        )}
      >
        <div 
          className={clsx(
            "w-3 h-3 rounded-full bg-blue-400 ease-in-out",
            isChecked ? 'scale-100 opacity-100 duration-200' : 'scale-[.2] opacity-0 duration-150'
          )}
        />
      </div>
      {type == 'text' && (
        <span>{text}</span>
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
    </label>
  )
}