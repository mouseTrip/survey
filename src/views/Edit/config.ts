import { SubjectTypes } from '@/store/type'
export type Config = string
export type SubjectConfig = {
  [key in SubjectTypes]: Config[]
}
const config: SubjectConfig = {
  single: ['randomOpt', 'showResult'],
  multiple: ['limit', 'randomOpt', 'showResult'],
  select: ['randomOpt'],
  scale: ['scaleType', 'range'],
  input: ['validate'],
  textarea: ['limitRow'],
  description: [],
  sort: [],
  annex: [],
}

export default config
