export interface BusinessRes<T> {
  ret: 0 | 1
  errorcode: number
  msg: string
  data: T
}

export interface getUserInfoReq {
  phone: string
}
export interface getUserInfoRes {
  _id: string
  phone: string
  name: string
  avatar: string
}

export interface getSurveyListReq {
  phone: string
}
export interface getSurveyListRes {
  list: {
    uuid: string
    title: string
    desc: string
    epilogue: string
    thumbnail: string
    subjects: string
  }[]
}
