/*
 * @Author: Terry Zhang
 * @Date: 2020-07-06 22:37:31
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-07-08 22:15:00
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
