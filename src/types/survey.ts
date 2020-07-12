/*
 * @Author: Terry Zhang
 * @Date: 2020-07-12 17:26:42
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-07-12 17:34:32
 * @Description:
 */

export interface SurveyBase {
  sid: string
}

export type SubjectTypes =
  | 'single'
  | 'multiple'
  | 'select'
  | 'scale'
  | 'input'
  | 'textarea'
  | 'description'
  | 'sort'
  | 'annex'

export interface SurveyPreview extends SurveyBase {
  title: string
  count?: number
  status: 0 | 1 | 2 // 0 - 未回收状态； 1 - 正在回收状态； 2 - 暂停回收状态
}

/** config */
type Option = string

export interface AbstractSubjectConfig<T> {
  type: T
  title: string
  isRequired: boolean
}
export interface OptionConfig {
  randomOpt: boolean
  options: Option[]
}
export interface SingleSubjectConfig
  extends AbstractSubjectConfig<'single'>,
    OptionConfig {
  showResult: boolean
}
export interface MultipleSubjectConfig
  extends AbstractSubjectConfig<'multiple'>,
    OptionConfig {
  limit: number
  showResult: boolean
}
export interface SelectSubjectConfig
  extends AbstractSubjectConfig<'select'>,
    OptionConfig {}
export interface ScaleSubjectConfig extends AbstractSubjectConfig<'scale'> {
  scaleType: 'satisfaction' | 'agreement' | 'importance' | 'wish' | 'match'
  range: 5 | 6 | 7 | 8 | 9 | 10
}
export interface InputSubjectConfig extends AbstractSubjectConfig<'input'> {
  validate: RegExp | null
}
export interface TextareaSubjectConfig
  extends AbstractSubjectConfig<'textarea'> {
  limitRow: 1 | 2 | 3 | 4 | 5
}
export interface DescriptionSubjectConfig
  extends AbstractSubjectConfig<'description'> {}
export interface SortSubjectConfig extends AbstractSubjectConfig<'sort'> {}
export interface AnnexSubjectConfig extends AbstractSubjectConfig<'annex'> {}

export type SubjectConfig =
  | SingleSubjectConfig
  | MultipleSubjectConfig
  | SelectSubjectConfig
  | ScaleSubjectConfig
  | InputSubjectConfig
  | TextareaSubjectConfig
  | DescriptionSubjectConfig
  | SortSubjectConfig
  | AnnexSubjectConfig

export interface SurveyConfig extends SurveyPreview {
  desc: string
  epilogue: string
  thumbnail: string
  subjects: SubjectConfig[]
}

export type SubjectValue = string | string[] | number | number[]

export interface SurveyContent extends SurveyBase {
  series: string
  subjects: SubjectValue[]
}
