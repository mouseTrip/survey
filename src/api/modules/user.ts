import $http from '@/utils/http'
import qs from 'qs'
import { getUserInfoReq, BusinessRes, getUserInfoRes } from '../type'

const getUserInfo: (
  params: getUserInfoReq,
) => Promise<BusinessRes<getUserInfoRes>> = params => {
  // return $http.post('/getUserInfo', qs.stringify(params))
  return $http.post(`/getUserInfo?${qs.stringify(params)}`)
}

export default {
  getUserInfo,
}
