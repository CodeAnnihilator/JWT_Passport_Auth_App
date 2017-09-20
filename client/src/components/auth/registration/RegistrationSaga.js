import { take, call, fork, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { REGISTRATE } from 'src/components/auth/registration/RegistrationActions'
import { registrateUser } from 'src/components/auth/registration/RegistrationApi'

import { authorizeUser } from 'src/components/auth/login/LoginApi'
import { authorizeSuccess } from 'src/components/auth/login/LoginActions'

function* authorizeUserSaga(username, email, password) {
  const { data: { token } } = yield call(authorizeUser, email, password)
  cookies.set('token', token, { path: '/' })
  yield put(authorizeSuccess(username, email))
  browserHistory.push('/')
}

export default function* registrateUserSaga() {
  while (true) {
    const { payload: { username, email, password } } = yield take(REGISTRATE)
    const { data } = yield call(registrateUser, username, email, password)
    yield fork(authorizeUserSaga, username, email, password)
  }
}
