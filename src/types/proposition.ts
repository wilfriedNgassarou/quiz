export type Proposition = {
  id: number
  slug: string
  question_id: number
  type: 'text' | 'image'
  text: string | null
  link: string | null
  is_correct: boolean
  created_at: string
  updated_at: string
}