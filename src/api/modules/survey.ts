import $http from '@/utils/http'
import qs from 'qs'
import { BusinessRes, getSurveyListReq, getSurveyListRes } from '../type'

const getSurveyList: (
  params: getSurveyListReq,
) => Promise<BusinessRes<getSurveyListRes>> = params => {
  return $http.post(`/getSurveyList?${qs.stringify(params)}`)
}

export default {
  getSurveyList,
}
