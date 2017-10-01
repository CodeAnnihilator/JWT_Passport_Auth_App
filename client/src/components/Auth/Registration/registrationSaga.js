import { take, call, fork, put } from 'redux-saga/effects'

const DAEMON = true

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import { REGISTRATE } from '@src/components/Auth/Registration/registrationActions'
import { registratePending } from '@src/components/Auth/Registration/registrationActions'
import { registrateUser } from '@src/components/Auth/Registration/registrationApi'

import { authorizeUser } from '@src/components/Auth/Login/loginApi'
import { loginSuccess, loginPending } from '@src/components/Auth/Login/loginActions'

function* authorizeUserSaga(username, email, password) {
  try {
    yield put(loginPending(true, 'Login is in progress', 'Checking user data'))
    const { data: { token } } = yield call(authorizeUser, email, password)
    cookies.set('token', token, { path: '/' })
    yield put(loginSuccess(username))
    yield put(loginPending(false, 'success', `Wow, you have successfully logged in, ${username}!`))
  } catch (e) {
    console.log(e)
  }
}

export default function* registrateUserSaga() {
  while (DAEMON) {
    const { payload: { username, email, password } } = yield take(REGISTRATE)
    try {
      yield put(registratePending(true, 'Registration is in progress', `Saving User with email: ${email}`))
      yield call(registrateUser, username, email, password)
      yield fork(authorizeUserSaga, username, email, password)
    } catch (e) {
      console.log(e)
    }
  }
}
