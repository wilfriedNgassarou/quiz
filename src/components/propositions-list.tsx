import { Proposition } from "../types";
import { PropositionsListCheckboxType } from "./propositions-list-checkbox-type";
import { PropositionsListRadioType } from "./propositions-list-radio-type";

interface Props {
  propositions: Proposition[]
  allowMultipleAnswer: boolean
}

export function PropositionsList({ propositions, allowMultipleAnswer }: Props) {
  const List = allowMultipleAnswer ? PropositionsListCheckboxType : PropositionsListRadioType

  return <List propositions={propositions}  />
}