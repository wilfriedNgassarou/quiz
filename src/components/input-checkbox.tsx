import { Check } from "./svgs/check";
import clsx from "clsx";
import { Proposition } from "../types";
import { Image } from "./image";

interface Props {
  proposition: Proposition
  isChecked: boolean
  onChange: (isChecked: boolean, answerId: number, questionId: number) => void
}

export function InputCheckBox({ proposition, isChecked, onChange }: Props) {
  const { text, question_id, id, link, type } = proposition

  const clipPath = isChecked ? 'inset(0px 0px 0px 0px)' : 'inset(0px 100% 0px 0px)'

  return (
    <label
      onClick={() => onChange(!isChecked, id, question_id)} 
      className="flex items-center gap-2"
    >
      <div 
        className={clsx(
          "w-6 h-6 flex justify-center items-center border-[1.5px] border-gray-500 ease-in-out",
          isChecked ? "bg-blue-400 duration-150" : "bg-transparent duration-100"
        )}
      >
        <Check 
          size={24}
          stroke="white"
          className={clsx(
            "ease-in-out",
            isChecked ? "duration-150 delay-100" : "duration-100"
          )} 
          style={{ clipPath }}
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