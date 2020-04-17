import { UserModule } from './modules/user'
import { SurveyModule } from './modules/survey'

export type RootState = {
  user: UserModule,
  survey: SurveyModule
}
