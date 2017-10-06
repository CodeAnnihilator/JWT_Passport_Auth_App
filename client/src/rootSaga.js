import { fork } from 'redux-saga/effects'

import registrationSaga from '@src/components/Auth/Registration/registrationSaga'
import loginSaga from '@src/components/Auth/Login/loginSaga'
import categoryProductsSaga from '@src/components/CategoryProducts/categoryProductsSaga'

export default function* rootSaga() {
  yield fork(registrationSaga)
  yield fork(loginSaga)
  yield fork(categoryProductsSaga)
}
