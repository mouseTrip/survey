/*
 * @Author: Terry Zhang
 * @Date: 2020-04-05 16:06:35
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-07-12 17:49:55
 * @Description:
 */

import { Module } from 'vuex'
import { SurveyPreview, SurveyConfig, SubjectConfig } from '@/types/survey'
import { RootState } from '../type'
import {
  SURVEY_DEFAULT_TITLE,
  SURVEY_DEFAULT_DESC,
  SURVEY_DEFAULT_EPILOGUE,
} from '@/constants'

const UPDATE_USER_SURVEYS = 'UPDATE_USER_SURVEYS'
const UPDATE_EDITTING_SURVEY = 'UPDATE_EDITTING_SURVEY'
const UPDATE_SURVEY_CURRENT = 'UPDATE_SURVEY_CURRENT'

export type SurveyModule = {
  userSurveys: SurveyPreview[]
  edittingSurvey: SurveyConfig
  current: number
}
const INITIAL_STATE: SurveyModule = {
  userSurveys: [],
  edittingSurvey: {
    sid: '',
    title: '',
    desc: '',
    epilogue: '',
    thumbnail: '',
    subjects: [],
    status: 0,
  },
  current: -1,
}
const survey: Module<SurveyModule, RootState> = {
  namespaced: true,
  state: INITIAL_STATE,
  getters: {
    currentSubject(state): SubjectConfig {
      const {
        current,
        edittingSurvey: { subjects },
      } = state
      if (current >= 0 && subjects.length > 0) {
        return subjects[current]
      } else {
        return {} as SubjectConfig
      }
    },
  },
  mutations: {
    [UPDATE_USER_SURVEYS](state, payload = { surveys: [] as SurveyPreview[] }) {
      state.userSurveys = payload.surveys
    },
    [UPDATE_EDITTING_SURVEY](
      state,
      payload: SurveyConfig = INITIAL_STATE.edittingSurvey,
    ) {
      state.edittingSurvey = { ...payload }
    },
    [UPDATE_SURVEY_CURRENT](state, payload: { current: number }) {
      state.current = payload.current
    },
  },
  actions: {},
}

export default survey
