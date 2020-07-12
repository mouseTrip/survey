import { RootState } from './type'
export default {
  phone: (store: RootState) => store.user.phone,
  avatar: (store: RootState) => store.user.avatar,
  name: (store: RootState) => store.user.name,
}
