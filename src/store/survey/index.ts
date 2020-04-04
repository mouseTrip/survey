import { Module } from 'vuex'
import { Survey, RootState, Subject } from '../type'
import {
  SURVEY_DEFAULT_TITLE,
  SURVEY_DEFAULT_DESC,
  SURVEY_DEFAULT_EPILOGUE,
} from '@/constants/common'

const UPDATE_SURVEY_UUID = 'UPDATE_SURVEY_UUID'
const UPDATE_SURVEY_TITLE = 'UPDATE_SURVEY_TITLE'
const UPDATE_SURVEY_DESC = 'UPDATE_SURVEY_DESC'
const UPDATE_SURVEY_EPILOGUE = 'UPDATE_SURVEY_EPILOGUE'
const UPDATE_SURVEY_THUMBNAIL = 'UPDATE_SURVEY_THUMBNAIL'
const UPDATE_SURVEY_SUBJECTS = 'UPDATE_SURVEY_SUBJECTS'
const UPDATE_SURVEY_CURRENT = 'UPDATE_SURVEY_CURRENT'

type SurveyStore = Survey & { current: number }
const INITIAL_STATE: SurveyStore = {
  uuid: '',
  title: SURVEY_DEFAULT_TITLE,
  desc: SURVEY_DEFAULT_DESC,
  epilogue: SURVEY_DEFAULT_EPILOGUE,
  thumbnail: '',
  subjects: [],
  current: -1
}
const survey: Module<SurveyStore, RootState> = {
  namespaced: true,
  state: INITIAL_STATE,
  getters: {
    currentSubject(state): Subject {
      const { current, subjects } = state
      if (current >= 0 && subjects.length > 0) {
        return subjects[current]
      } else {
        return {} as Subject
      }
    }
  },
  mutations: {
    [UPDATE_SURVEY_UUID](state, payload: { uuid: string }) {
      state.uuid = payload.uuid
    },
    [UPDATE_SURVEY_TITLE](state, payload: { title: string }) {
      state.title = payload.title
    },
    [UPDATE_SURVEY_DESC](state, payload: { desc: string }) {
      state.desc = payload.desc
    },
    [UPDATE_SURVEY_EPILOGUE](state, payload: { epilogue: string }) {
      state.epilogue = payload.epilogue
    },
    [UPDATE_SURVEY_THUMBNAIL](state, payload: { thumbnail: string }) {
      state.thumbnail = payload.thumbnail
    },
    [UPDATE_SURVEY_SUBJECTS](state, payload: { subjects: Subject[] }) {
      state.subjects = payload.subjects
    },
    [UPDATE_SURVEY_CURRENT](state, payload: { current: number }) {
      state.current = payload.current
    }
  },
  actions: {},
}
