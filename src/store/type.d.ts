type Option = string

export interface AbstractSubject<T, R> {
  type: T
  title: string
  isRequired: boolean
  value: R
}
export interface OptionConfig {
  randomOpt: boolean
  options: Option[]
}
export interface SingleSubject
  extends AbstractSubject<'single', Option>,
    OptionConfig {
  showResult: boolean
}
export interface MultipleSubject
  extends AbstractSubject<'multiple', Option[]>,
    OptionConfig {
  limit: number
  showResult: boolean
}
export interface SelectSubject
  extends AbstractSubject<'select', Option>,
    OptionConfig {}
export interface ScaleSubject extends AbstractSubject<'scale', number> {
  scaleType: 'satisfaction' | 'agreement' | 'importance' | 'wish' | 'match'
  range: 5 | 6 | 7 | 8 | 9 | 10
}
export interface InputSubject extends AbstractSubject<'input', string> {
  validate: RegExp | null
}
export interface TextareaSubject extends AbstractSubject<'textarea', string> {
  limitRow: 1 | 2 | 3 | 4 | 5
}
export interface DescriptionSubject
  extends AbstractSubject<'description', string> {}
export interface SortSubject extends AbstractSubject<'sort', Option[]> {}
export interface AnnexSubject extends AbstractSubject<'annex', File> {}

export type Subject =
  | SingleSubject
  | MultipleSubject
  | SelectSubject
  | ScaleSubject
  | InputSubject
  | TextareaSubject
  | DescriptionSubject
  | SortSubject
  | AnnexSubject

export interface Survey {
  uuid: string
  title: string
  desc: string
  epilogue: string
  thumbnail: string
  subjects: Subject[]
}
export interface User {
  phone: string
  name: string
  surveys: Survey[]
}

export type Dictionary<T> = {
  [key: string]: T
}

export type RootState = Dictionary<any>
