export type Question = {
  id: number
  slug: string
  type: 'text' | 'image'
  intitule: string | null
  link: string | null
  nombre_de_points: number
  allow_multiple_response: boolean
  created_at: string
  updated_at: string
}